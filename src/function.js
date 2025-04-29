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

export function updateParentHeight(element) {
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

export function updateSibling(element) {
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

export function updateChildren(element) {
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
return btn;
};
jumpButtonCP.addTo(map);
}

export function onLocationError(e) {
alert(e.message);
}


