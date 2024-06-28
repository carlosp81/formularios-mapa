
// function cargar_pagina(){
//     alert("Ya se ha cargado el sitio web .:Bit:.");
// }

// //-------------------------------------------------------
// function jorge(){
//     alert("Este es el Boton de .:Bit:.");
// }

// //-------------------------------------------------------
// function openForm() {
//   document.getElementById("myForm").style.display = "block";
// }
  
function closeForm() {
  document.querySelector(".form-box").style.display = "none";
}


//------------------------ Arrastre DEL DIV --------------------------------------
//--------------------------------------------------------------------------------
// Make the DIV element draggagle:

const geodata_form = document.querySelector(".form-box")

dragElement(geodata_form);
    
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (geodata_form) {
    /* if present, the header is where you move the DIV from:*/
    /* si está presente, el encabezado es desde donde mueves el DIV:*/
    geodata_form.onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    /* de lo contrario, mueva el DIV desde cualquier lugar dentro del DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    // obtiene la posición del cursor del mouse al inicio:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    // llama a una función cada vez que se mueve el cursor:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
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
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
