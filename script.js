import { db } from "./firebaseInit.js"; 


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
*/

/*
******************************
******   zoomControl    ******
******************************
*/

    var zoomControl = L.control.zoom({
            position: 'bottomright'
        }).addTo(map);

     

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

zoomControl: bottomright

*/
     const customControl = L.Control.extend({
      onAdd: function (map) {
        const container = L.DomUtil.create('div', 'custom-control leaflet-bar');
        container.innerHTML = `
        <div class = "custom-control-hover">
            <strong>Region Control</strong>
            <div class="custom-content">
              <button class = 'button' id = 'world'><i>Go Back to the World View</i></button>
        
              <button class="collapsible" id = 'japan'>Japan</button>
              <div class="content">
                <button class="collapsible" id = 'tokyo'>Tokyo</button>
                <div class="content">
                    <div id = 'list_tokyo'></div>
                </div>
                <button class="collapsible" id = 'kyoto'>Kyoto</button>
                <div class="content">
                    <div id = 'list_kyoto'></div>
                </div>
                <button class="collapsible" id = 'hokuriku'>Hokuriku</button>
                    <div class="content">
                    <button class="collapsible" id = 'noto'>Noto</button>
                    <div class="content">
                        <div id = 'list_noto'></div>
                    </div>
                    <div id = 'list_hokuriku'></div>
                    </div>
                <button class="collapsible" id = 'fuji'>Fuji</button>
                <div class="content">
                    <div id = 'list_fuji'></div>
                </div>
              </div>

              <button class="collapsible" id = 'canada'>Canada</button>
              <div class="content">
                <button class="collapsible" id = 'bc'>BC</button>
                <div class="content">
                  <button class="collapsible" id = 'southern bc'>Southern BC</button>
                  <div class="content">
                      <button class="collapsible" id = 'victoria'>Victoria</button>
                      <div class="content">
                          <div id = 'list_victoria'></div>
                      </div>
                      <button class="collapsible" id = 'vancouver'>Vancouver</button>
                      <div class="content">
                          <div id = 'list_victoria'></div>
                      </div>
                      <div id = 'list_bc'></div>
                  </div>  
                  <button class="collapsible" id = "pg">PG</button>
                  <div class="content">
                      <div id = 'list_pg'></div>
                  </div>
                </div>
              </div>
              

              <button class="collapsible" id = 'australia'>Australia</button>
              <div class="content">
                <button class="collapsible" id = 'eastern nsw'>Eastern New South Wales</button>
                <div class="content">
                    <button class="collapsible" id = 'sydney'>Sydney</button>
                    <div class="content">
                        <div id = 'list_sydney'></div>
                    </div>
                    <button class="collapsible" id = 'gosford'>Gosford</button>
                    <div class="content">
                        <div id = 'list_gosford'></div>
                    </div>
                    <div id = "list_australia"></div>
                </div>
              </div>

              <button class="collapsible" id = 'usa'>USA</button>
              <div class="content">
                <button class="collapsible" id = 'seattle'>Seattle</button>
                <div class="content">
                    <div id = 'list_seattle'></div>
                </div>
                <button class="collapsible" id = 'orland'>Orland</button>
                <div class="content">
                    <div id = 'list_orland'></div>
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
              const content = this.nextElementSibling;
              if (content.style.maxHeight) {
                updateChildren(content);  
              } else {
              this.classList.toggle("active");
                content.style.maxHeight = 350 + "px";
                updateSibling(content);  
                updateParentHeight(content);
              }
            });
          });
          const world = document.querySelectorAll(".button");
          world.forEach(button => {
            button.addEventListener("click", function () {
              const content = this.nextElementSibling;
              updateSibling(content);  
                
            });
          });

          region_categories.forEach(location =>{
              listMarkers(location, points);
          });
        }, 0);

        return container;
      }
    });

    map.addControl(new customControl({ position: 'topleft' }));

    
