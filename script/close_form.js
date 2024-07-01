"use strict"
// //-------------------------------------------------------
function openForm(form_clas) {
  const form_element = document.querySelector(form_clas)
  switch(form_element.className) {
    case "form-box form-box-busqueda":
      form_element.style.display = "block";
      dragElement(form_element);
      break;
    case "form-box form-box-geodata":
      form_element.style.display = "block";
      dragElement(form_element);
      break;
    }
    }
    
    function closeForm(formulario_clase) {
      const form_element = document.querySelector(formulario_clase)
      switch(form_element.className) {
        case "form-box form-box-busqueda":
          form_element.style.display = "none";
      break;
    case "form-box form-box-geodata":
      form_element.style.display = "none";
      break;
  }
}

//------------------------ Arrastre DEL DIV --------------------------------------
//--------------------------------------------------------------------------------
// Make the DIV element draggagle:

function dragElement(elmnt) {
  // const d_element = document.querySelector("form-header__search")
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    // get the mouse cursor position at startup:
    // obtiene la posición del cursor del mouse al inicio:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', closeDragElement)
    // call a function whenever the cursor moves:
    // llama a una función cada vez que se mueve el cursor:
    document.addEventListener('mousemove', elementDrag)

    function elementDrag(e) {
      // calculate the new cursor position:
      // calcula la nueva posición del cursor:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      // establece la nueva posición del elemento:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      /* deja de moverse cuando se suelta el botón del mouse:*/
      document.removeEventListener('mousemove', elementDrag)
    }
  }

}

