  import { db } from "./src/firebase/firebase-initialization.js"; 

  import { points, region_categories, regions } from "./src/data.js"; 
  import { updateParentHeight, updateSibling, updateChildren,  } from "./src/function.js";

/*
#######################
#######################
####   Main code   ####
#######################
#######################
*/

/*
#####################################
######   Map initialization   #######
#####################################

    continuousWorld: true
    worldCopyJump: true
    zoomControl: custom -> later
    maxZoom: 18
    minZoom: 2

    attribution:  
      https://github.com/tomchadwin/qgis2web
      https://leafletjs.com
      https://qgis.org
      http://www.openstreetmap.org/copyright
    
    Buttons:
      ->after the markers
      


*/
  //map
  const map = L.map('map',{continuousWorld: true, worldCopyJump: true, zoomControl:false, maxZoom:18, minZoom:2}).setView([20, 0], 2);

  //attribution
    map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  

//I don't know followings
    //var hash = new L.Hash(map);
    //     var bounds_group = new L.featureGroup([]);
    // function setBounds() {
    //     map.setMaxBounds(map.getBounds());
    //}
//    var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
    
	


/*
#########################
######   Markers   ######
#########################

    Add every points on the map using createPopupContent()
    Group them to filter
*/
    points.forEach(point => {
       const marker = L.marker(point.coords);
       
       marker.bindPopup(() => {
        const popupContent = createPopupContent(point);
        return popupContent;
       }) 
       marker.addTo(map);
       //set up the scrollbar at the bottom.
       map.on('popupopen', (e) => {
        const popupElement = e.popup.getElement();
        const commentsBox = popupElement.querySelector('.comments');
        if (commentsBox) {
          // Wait a tick to ensure it's rendered
          setTimeout(() => {
            commentsBox.scrollTop = commentsBox.scrollHeight;
          }, 0);
        }
      });
      
     });


/*
##########################################
######     All Kinds of Controls     #####
##########################################
     Zoom control:
     Current Position:
     Layer Control:
     Region COntrol:
     Layer control
*/

     

/*
***********************************
******   Current Position    ******
***********************************
*/

     

    var currentPosition = null;
    
    map.on('locationerror', onLocationError);
    map.on('locationfound', onLocationFound);

    map.locate({ setView: false });

/*
*****************************
******   Inner HTML    ******
*****************************


*/
      const customControl = L.Control.extend({
        onAdd: function (map) {
          const container = L.DomUtil.create('div', 'custom-control leaflet-bar');
          container.innerHTML = `
          <div class = "custom-control-hover">
            <strong>Regions</strong><abbr class = 'question' id = 'regcon' title="Click Plus Sign to Zoom In"></abbr>
               <div class="custom-content">
                <button class = 'button-original-map' id = 'world'><i>Go Back to the World View</i></button>
                
                <div class = 'control-button-wrapper'> 
                  <button class="collapsible">Japan</button>
                  <button class = 'button' id = 'japan'></button>
                </div>
                <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Kanto</button>
                    <button class = 'button' id = 'kanto'></button>
                  </div>
                  <div class="content">
                    <div class = 'control-button-wrapper'> 
                      <button class="collapsible" >Tokyo</button>
                      <button class = 'button' id = 'tokyo'></button>
                    </div>
                      <div class="content">
                          <div id = 'list_tokyo'></div>
                      </div>
                      <div class = 'control-button-wrapper'> 
                        <button class="collapsible" >Kanagawa</button>
                        <button class = 'button' id = 'kanagawa'></button>
                      </div>
                      <div class="content">
                          <div id = 'list_kanagawa'></div>
                      </div>
                      <div id = 'list_kanto'></div>
                  </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Kyoto</button>
                    <button class = 'button' id = 'kyoto'></button>
                  </div>
                  <div class="content">
                      <div id = 'list_kyoto'></div>
                  </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Hokuriku</button>
                    <button class = 'button' id = 'hokuriku'></button>
                  </div>
                      <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Noto</button>
                    <button class = 'button' id = 'noto'></button>
                  </div>
                      <div class="content">
                          <div id = 'list_noto'></div>
                      </div>
                      <div id = 'list_hokuriku'></div>
                      </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Fuji</button>
                    <button class = 'button' id = 'fuji'></button>
                  </div>
                  <div class="content">
                      <div id = 'list_fuji'></div>
                  </div>
                  <div id = 'list_japan'></div>
                </div>
  
                <div class = 'control-button-wrapper'> 
                  <button class="collapsible" >Canada</button>
                  <button class = 'button' id = 'canada'></button>
                </div>
                <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Southern BC</button>
                    <button class = 'button' id = 'southernbc'></button>
                  </div>
                  <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Cowichan Area</button>
                    <button class = 'button' id = 'cowichan'></button>
                  </div>
                      <div class="content">
                          <div id = 'list_cowichan'></div>
                      </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Victoria</button>
                    <button class = 'button' id = 'victoria'></button>
                  </div>
                      <div class="content">
                          <div id = 'list_victoria'></div>
                      </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Vancouver</button>
                    <button class = 'button' id = 'vancouver'></button>
                  </div>
                      <div class="content">
                          <div id = 'list_vancouver'></div>
                      </div>
                      <div id = 'list_southernbc'></div>
                  </div>  
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Nouthern BC</button>
                    <button class = 'button' id = 'nouthernbc'></button>
                  </div>
                  <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >PG</button>
                    <button class = 'button' id = 'pg'></button>
                  </div>
                      <div class="content">
                          <div id = 'list_pg'></div>
                      </div>
                      <div id = 'list_nouthernbc'></div>
                  </div>  
                </div>
                
  
                <div class = 'control-button-wrapper'> 
                  <button class="collapsible" >Australia</button>
                  <button class = 'button' id = 'australia'></button>
                </div>
                <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Eastern New South Wales</button>
                    <button class = 'button' id = 'eastern nsw'></button>
                  </div>
                  <div class="content">
                    <div class = 'control-button-wrapper'> 
                      <button class="collapsible" >Sydney</button>
                      <button class = 'button' id = 'sydney'></button>
                    </div>
                      <div class="content">
                          <div id = 'list_sydney'></div>
                      </div>
                    <div class = 'control-button-wrapper'> 
                      <button class="collapsible" >Gosford</button>
                      <button class = 'button' id = 'gosford'></button>
                    </div>
                      <div class="content">
                          <div id = 'list_gosford'></div>
                      </div>
                      <div id = "list_australia"></div>
                  </div>
                </div>
  
                <div class = 'control-button-wrapper'> 
                  <button class="collapsible" >USA</button>
                  <button class = 'button' id = 'usa'></button>
                </div>
                <div class="content">
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Seattle</button>
                    <button class = 'button' id = 'seattle'></button>
                  </div>
                  <div class="content">
                      <div id = 'list_seattle'></div>
                  </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >Orland</button>
                    <button class = 'button' id = 'orland'></button>
                  </div>
                  <div class="content">
                      <div id = 'list_orland'></div>
                  </div>
                  <div class = 'control-button-wrapper'> 
                    <button class="collapsible" >California</button>
                    <button class = 'button' id = 'california'></button>
                  </div>
                  <div class="content">
                      <div id = 'list_california'></div>
                  </div>
                </div>
              </div>
          </div>
            `;
  
          // Prevent map click propagation
          L.DomEvent.disableClickPropagation(container);
          L.DomEvent.disableScrollPropagation(container);
  
          
  
          // Delay attaching the event until the DOM is ready
          setTimeout(() => {
            regions.forEach(region =>{
              const btn = document.getElementById(region.id);
              if(btn){
                btn.addEventListener("click", () => {
                  map.flyTo(region.zoom,region.size);
                });
              }
            })
            
           const collapsibles = document.querySelectorAll(".collapsible");
            collapsibles.forEach(button => {
              button.addEventListener("click", function () {
                const content = this.parentElement.nextElementSibling;
                if (content.style.maxHeight) {
                  content.style.maxHeight = null;
                  this.classList.toggle("active");
                  updateChildren(content);  
                } else {
                  this.classList.toggle("active");
                  content.style.maxHeight = 350 + "px";
                  updateSibling(content);  
                  updateParentHeight(content);
                }
              });
            });            
            const world = document.querySelectorAll(".button-original-map");
            world.forEach(button => {
              button.addEventListener("click", function () {
                const content = this.nextElementSibling;
                updateSibling(content);  
              });
            });

            const regconbutton = document.getElementById('regcon');
            if(regconbutton){
                regconbutton.addEventListener("click", () => {
                  alert(`Click to Open the Specific Region. 
Click Plus Sign to Zoom In`);
                });
            }
  
            region_categories.forEach(location =>{
                listMarkers(location);
            });
          }, 0);
  
          return container;
        }
      });
  
    

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
        const titleSection = document.createElement('div');
        const title = document.createElement('strong');
        title.textContent = point.name;
        title.className = 'title';
        if(point.url != null){
          const titleUrl = document.createElement('a');
          titleUrl.href = point.url;
          titleUrl.target = '_blank';
          titleUrl.appendChild(title);
          titleSection.appendChild(titleUrl);
        }else{titleSection.appendChild(title);
        }
        container.appendChild(titleSection);

  
    //image with url
        const imageSection = document.createElement('button');
        imageSection.onclick = () => image_popup("../"+point.image);

        const image = document.createElement('img');
        image.src= "../"+point.image;
        image.className = 'image';

        imageSection.appendChild(image);
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
  

      //Image popup


      function image_popup(imgsrc){
        // Check if the section already exists
        let existing = document.getElementById('popupSection');
        if (existing) {
          existing.style.display = 'block';
          return;
        }
          // Create the section
            const section = document.createElement('div');
            section.id = 'popupSection';


            //Section for Close Button
            const ipc = document.createElement('div');
            ipc.className = 'image-popup-close';
            const cb = document.createElement('button');
            cb.onclick = () => {             
              const section = document.getElementById('popupSection');
              if (section) {
                section.remove();
              }
            };
            cb.className = 'large-image-close';
            const ci = document.createElement('img');
            ci.src = '../images/close.webp';
            ci.className = 'large-image-close-icon';
            cb.appendChild(ci);
            ipc.appendChild(cb);

            section.appendChild(ipc);

          //Section without Close Button
          //Div for the image alignment
            const large_image = document.createElement("a");
            large_image.className = 'large-image-div';
            large_image.href = 'https://projectpronghorn.netlify.app/' + imgsrc;


          //Image
            const each_large_image = document.createElement('img');
            each_large_image.src = imgsrc;
            each_large_image.className = 'large-image';
            large_image.appendChild(each_large_image);
            section.appendChild(large_image);

            const large_image_note = document.createElement('p');
            large_image_note.textContent = 'click the picture to open and zoom in';
            section.appendChild(large_image_note);



            // Append it to the map
            const mapContainer = document.getElementById('map');
            mapContainer.appendChild(section);
            L.DomEvent.disableClickPropagation(section);
            L.DomEvent.disableScrollPropagation(section);

          }




/*
***************************************
******  Function listMarker()()  ******
***************************************

    Make the list of sites on the map
    Create button to direct the location
  
*/
function listMarkers(region){
  const list = document.getElementById("list_"+region);
  if(list){
    list.innerHTML = "List of Places in " + region[0].toUpperCase()+ region.slice(1);

    if(region == 'hokuriku' || region == 'australia' || region == 'japan'){
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

      function layerControlhtml(){
        return `
          <div class = "layconContent">
            <strong>Background Map</strong><abbr class = 'question' id = 'laycon' title="Select the background map type"></abbr>
            <div class="plain">
              <select id="layer">
                <option value="osm">Street View 1</option>
                <option value="cv">Street View 2</option>
                <option value="otm">Topographic View</option>
                <option value="esi">Satellite Imagery</option>
              </select>
            </div></div>
          </div>
            `;
      }
    function layerFunctions(map){

                  setTimeout(() => {
            document.getElementById('layer').addEventListener('change', function(){
              if (document.getElementById('layer').value == 'osm'){
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank" class = ".leaflet-control-attribution">CARTO</a>');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 20,
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'cv'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                  maxZoom: 20,
                  attribution: '&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'otm'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
                  maxZoom: 20,
                  attribution: 'Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'esi'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                  maxZoom: 20,
                  attribution: 'Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
                }).addTo(map);
              }


            }); 
          }, 0);


      }
      const layerControl = L.Control.extend({
        onAdd: function (map) {
          const container = L.DomUtil.create('div');
          container.innerHTML = layerControlhtml();
          layerFunctions(map);

  
          // Prevent map click propagation
          L.DomEvent.disableClickPropagation(container);
          L.DomEvent.disableScrollPropagation(container);

          setTimeout(()=>{
            const layconbutton = document.getElementById('laycon');
            if(layconbutton){
                layconbutton.addEventListener("click", () => {
                  alert("Change the Map Layer");
                });
            }
          },0)

    
          return container;
        }
      });
    


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

export function onLocationFound(e) {
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
    map.flyTo(currentPosition,2);

    return btn;
  };
  jumpButtonCP.addTo(map);
}


export function onLocationError(e) {
  alert(e.message);
}



/* controls */


      map.addControl(new customControl({ position: 'topleft' }));
      map.addControl(new layerControl({ position: 'topright' }));
      var zoomControl = L.control.zoom({position: 'topright'}).addTo(map);

