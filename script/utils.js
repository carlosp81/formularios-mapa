import { createBusquedaForm } from './forms/search_form.js';
 
//------------------------ Arrastre DEL DIV --------------------------------------
//--------------------------------------------------------------------------------
// Make the DIV element draggagle:
export function dragElement(elmnt) {
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


export function closeForm(element_form) {
    const form_element = document.querySelector('.form-header__close_form');

    form_element.addEventListener('click', () => {
        element_form.remove();
        // element_form = null;
    })
}


export function selectForm(module_element, element_form) {
    switch(module_element.className) {
        case "show-form-busqueda":
            console.log("CLICK BUSQUEDA");
            element_form = createBusquedaForm();
            break;
        case "show-form-geodata":
            // element_form = createGeodataForm();
            console.log("CLICK GEODATA!!!");
            break;
    }
    return element_form;
}
  
  
export function showFormFromModule(module_element, element_form) {
    let out_form = selectForm(module_element, element_form);
    dragElement(out_form);
    // closeForm(out_form); 
    // // out_form = null;
    // console.log("SF: ", out_form);
    // if (out_form === null) {
    //     out_form = createBusquedaForm();
    //     // closeForm(out_form);
    // }
    return out_form;
}

