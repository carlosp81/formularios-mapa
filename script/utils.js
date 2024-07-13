import { createBusquedaFormHeader, createBusquedaFormBody as search_body } from './forms/search_form.js';
import { createPalmaBody } from './forms/busqueda_forms/busqueda_palma.js';
import { createZonaBody } from './forms/busqueda_forms/busqueda_zona.js';
import { createGeodataForm } from './forms/geodata_form.js';


export function createBusquedaForm() {
    let form_element = document.querySelector(".visor_modulos");
    let formBusquedaElement = document.createElement("div");
    form_element.insertAdjacentElement("afterend", formBusquedaElement);
    formBusquedaElement.classList.add("form-box", "form-box-busqueda");
  
    let section_header = createBusquedaFormHeader();
    formBusquedaElement.insertAdjacentElement("afterbegin", section_header);
  
    let section_body = search_body();
    let search_button = createButtonBody();
    let palma_body = createPalmaBody();
    let zona_body = createZonaBody();
    section_header.insertAdjacentElement("afterend", section_body);
    
    let form_palma = section_body.firstChild.firstChild;
    
    form_palma.insertAdjacentElement("beforeend", palma_body);
    form_palma.insertAdjacentElement("beforeend", search_button);
    
    
    let busqueda_menu = form_palma.firstChild.firstChild;

    
    busqueda_menu.addEventListener("change", () => {
        console.log(busqueda_menu.value);
        switch (busqueda_menu.value) {
            case "palma":
                zona_body.remove();
                form_palma.insertAdjacentElement("beforeend", palma_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "zona":
                palma_body.remove();
                form_palma.insertAdjacentElement("beforeend", zona_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "lote":
                console.log("Lote");
                break;
            case "linea":
                console.log("LINEA");
                break;
            default:
                console.log("DEFAULT");
                break;
        }
    })
  
    return formBusquedaElement
}

export function createButtonBody() {
    let search_button = document.createElement("li");
  
    let form_submit_button = document.createElement("button");
    form_submit_button.type = "submit"
    form_submit_button.innerHTML = "Buscar";
    form_submit_button.classList.add("search-button");

    search_button.insertAdjacentElement("beforeend", form_submit_button);
  
    return search_button
  }



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
    })
}


export function selectForm(module_element, element_form) {
    switch(module_element.className) {
        case "show-form-busqueda":
            console.log("CLICK BUSQUEDA");
            element_form = createBusquedaForm();
            // if (palma_form_body().firstChild[0].value === "palma") {
            //     console.log(palma_form_body().firstChild[0].value);
            // }

 
            // element_form = search_body();
            // element_form = palma_form_body();
            break;
        case "show-form-geodata":
            element_form = createGeodataForm();
            console.log("CLICK GEODATA!!!");
            break;
    }
    return element_form;
}
  
  
export function showFormFromModule(module_element, element_form) {
    let out_form = selectForm(module_element, element_form);
    dragElement(out_form);
    
    return out_form;
}

