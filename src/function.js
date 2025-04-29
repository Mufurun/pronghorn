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
