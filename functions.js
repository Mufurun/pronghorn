
/*
###################################
###################################
##########  FUNCTIONS   ###########
###################################
###################################
*/

/*
#####################################
#####     Functions for Map     #####
#####################################
*/
    
/*
**********************************************
*******  FUNCTION createPopupContent()  ******
**********************************************

Create popup content and listeners
    Title:
    Image: with a url if I have
    "Comment"
    comments:
    input box:
    post button: link to firebase 
      data management

*/
function createPopupContent(point) {

    //div
        const container = document.createElement('div');
        container.className = 'popup-content';
  
    //title
        const title = document.createElement('strong');
        title.textContent = point.name;
        title.className = 'title';
        container.appendChild(title);
  
    //image with url
        const imageSection = document.createElement('div');
        const image = document.createElement('img');
        image.src= point.image;
        image.className = 'image';
        
        if(point.url != null){
          const imageUrl = document.createElement('a');
          imageUrl.href = point.url;
          imageUrl.target = '_blank';
          imageUrl.appendChild(image);
          imageSection.appendChild(imageUrl);
        }else{imageSection.appendChild(image);
        }
        container.appendChild(imageSection);
        
    //Label
        const label1 = document.createElement('strong');
        label1.textContent = "Comments";
        label1.className = 'label';
        container.appendChild(label1);
  
    //Comment
        const commentsDiv = document.createElement('div');
        commentsDiv.id = `comments-${point.id}`;
        commentsDiv.className = 'comments';
        commentsDiv.innerHTML = "<i>Loading comments...</i>";
        container.appendChild(commentsDiv);
        
    //text box
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Add a comment';
        input.style.width = '90%';
        input.id = `input-${point.id}`;
    
    //button
        const button = document.createElement('button')
        input.addEventListener("keypress", function(event){if (event.keyCode === 13) {
                  // Triggering click event on button when Enter key is pressed
                  button.onclick();
              }});
        button.textContent = 'Post';
        //save the comment
        button.onclick = () => {
          const comment = input.value.trim();
          const ref = db.ref(`comments/${point.id}`);
          if (comment) {
              const d = new Date()
              
            ref.push({
              text: comment,
              timestamp: d.getFullYear() +'/'+ d.getMonth() + '/'+ d.getDate() + '('+ d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ')'
            });
            input.value = '';
          }
        //data management
        //only keep 100 recent items 
          ref.once("value", snapshot => {
            const data = snapshot.val();
            const keys = Object.keys(data || {});
            if (keys.length > 100) {
              // Sort and remove oldest ones
              const sorted = keys.map(k => ({ key: k, time: data[k].timestamp }))
              .sort((a, b) => a.time - b.time);
              const toRemove = sorted.slice(0, keys.length - 10);
              toRemove.forEach(({ key }) => ref.child(key).remove());
            }
          });
        };
    
        const box = document.createElement('div');
        box.className = 'comment-box';
        box.appendChild(input);
        box.appendChild(button);
        container.appendChild(box);
  
    
        // Listen for comments in real time
        const commentsRef = db.ref(`comments/${point.id}`);
        commentsRef.on('value', (snapshot) => {
          const comments = snapshot.val();
          commentsDiv.innerHTML = '';
          if (comments) {
              Object.values(comments).forEach(c => {
              const box = document.createElement('p');
              box.textContent = c.text ;
              const time = document.createElement('p');
              time.className = 'time';
              time.textContent = c.timestamp.toString();
              box.appendChild(time);
              commentsDiv.appendChild(box);
              }
            );
          } else {
            commentsDiv.innerHTML = "<i>Be the first commenter!!</i>";
          }
          commentsDiv.scrollTop = commentsDiv.scrollHeight;//need this for the first open of bindPopup
        });  
        return container;
      }
  
  
  /*
  ######################################################
  ######     Functions for Inner HTML Control     ######
  ######################################################
  
      To maintain the folded sections:
        updateParentHeight();
        updateSibling();
        updateChildren();
      For the button of the list in each region
        listMarkers()
  */
  
  /*
  *********************************************
  ******  Function updateParentHeight()  ******
  *********************************************
  
    Adjust the size of parent section of the folded content
      when you click, the parent section open and show the content without hiding by the other section
  */
  
      function updateParentHeight(element) {
        let parent = element.parentElement;
        while (parent) {
          if (parent.classList.contains('content') && parent.style.maxHeight) {
          parent.style.maxHeight = parent.scrollHeight  +" px";
          }
          parent = parent.parentElement;
        }
      }
  
  /*
  ****************************************
  ******  Function updateSibling()  ******
  ****************************************
  
    Unfold the other sibling sections
      This is necessary since the map will zoom up the region where you open the section with
  */
  
      function updateSibling(element) {
          let sibling = element.parentElement.firstElementChild;
          while (sibling) {
              if (sibling !== element && sibling.classList.contains("content") && sibling.style.maxHeight) {
                  sibling.style.maxHeight = null;
                  sibling.previousElementSibling.classList.toggle("active");
                  updateChildren(sibling);
              }
              sibling = sibling.nextElementSibling;
          }
      }
  /*
  *****************************************
  ******  Function updateChildren()  ******
  *****************************************
  
    Unfold the children sections
      This is necessary since the map will zoom up the region where you open the section with
  */
  
      function updateChildren(element) {
          let child = element.firstElementChild;
          while (child) {
              if (child.classList.contains("content") && child.style.maxHeight) {
                  child.style.maxHeight = null;
                  child.previousElementSibling.classList.toggle("active");
                  updateChildren(child);
              }
              child = child.nextElementSibling;
          }
      }
  
  
  /*
  ***************************************
  ******  Function listMarker()()  ******
  ***************************************
  
      Make the list of sites on the map
      Create button to direct the location
    
  */
      function listMarkers(region, points, map){
        const list = document.getElementById("list_"+region);
        if(list){
          list.innerHTML = "List of Places in " + region[0].toUpperCase()+ region.slice(1);
  
          if(region == 'hokuriku' || region == 'australia'){
            list.innerHTML = "List of Other Places in " + region[0].toUpperCase()+ region.slice(1);
          }
          else if(region == 'bc'){
            list.innerHTML = "List of Places in " + region.toUpperCase();
          }
          list.classList = 'list-of-region';
          points.forEach(p =>{
            if(p.group == region){
              const title = document.createElement('button');
              title.textContent = p.name;
              title.classList = 'list-button';
              title.onclick = () => {
                map.flyTo(p.coords, 16);
              }
              list.appendChild(document.createElement('br'));
              list.appendChild(title);
            }
          });
        }
      }
  
  /*
  ####################################################
  ######     Functions for Current Position     ######
  #################################################### 
  */
  
  /*
  ******************************************
  ******  Function onLocationFound()  ******
  ******  Function onLocationError()  ******
  ******************************************
  If location is found:
        add a marker
        create a button to zoom up the location 
  */
      const greenIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
      function onLocationFound(e) {
          currentPosition = e.latlng;
          L.marker(currentPosition, {icon: greenIcon}).addTo(map);
          const jumpButtonCP = L.control({ position: 'topleft' });
          jumpButtonCP.onAdd = function (map) {
          const btn = L.DomUtil.create('button', 'my-custom-button');
          btn.innerHTML = 'Current <br> Position';
          // Prevent map from moving when clicking the button
          L.DomEvent.disableClickPropagation(btn);
          btn.onclick = () => {
            map.flyTo(currentPosition,12);
            // You can add more logic here, like map.flyTo(), addMarker(), etc.
          };
          return btn;
          };
          jumpButtonCP.addTo(map);
      }
      function onLocationError(e) {
          alert(e.message);
      }
  