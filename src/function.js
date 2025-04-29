

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



