import { createBusquedaFormHeader, createBusquedaFormBody as search_body } from './forms/search_form.js';
import { createPalmaBody } from './forms/busqueda_forms/busqueda_palma.js';
import { createZonaBody } from './forms/busqueda_forms/busqueda_zona.js';
import { createLoteBody } from './forms/busqueda_forms/busqueda_lote.js';
import { createLineasBody } from './forms/busqueda_forms/busqueda_lineas.js';
import { createGeodataForm } from './forms/geodata_form.js';


/**
 * [Crea un submenu]
 * @param  {[HTMLLIElement]} menu_option_body [zona_options_body]
 * @param  {[HTMLLIElement]} submenu_options_body [lote_options_body]
 * @param { [Object] } submenu_values [lote_option_values]
 * @param { [HTMLButtonElement] } button_ele [search_button]
 * @return {[HTMLLIElement]} [retorna lotes de la zona seleccionada]
 */
export function createSelectSubmenu(form_body, menu_option_body, submenu_options_body, submenu_values, button_ele) {

    form_body.insertAdjacentElement("beforeend", menu_option_body);
    form_body.insertAdjacentElement("beforeend", button_ele);
    let li_out = submenu_options_body;

    menu_option_body.firstChild.addEventListener("change", () => {
        // console.log("FC: ", menu_option_body.firstChild);
        console.log(submenu_values.option1);
        // SELECCION DE LAS ZONAS    
        if (menu_option_body.firstChild.value === submenu_values.option1) {
            if (li_out.zona2) {
                li_out.zona2.remove();
            }
            if (li_out.zona3) {
                li_out.zona3.remove();
            }
            form_body.insertAdjacentElement("beforeend", li_out.zona1);
            form_body.insertAdjacentElement("beforeend", button_ele);
        }

        if (menu_option_body.firstChild.value === submenu_values.option2) {
            if (li_out.zona1) {
                li_out.zona1.remove();
            }
            if (li_out.zona3) {
                li_out.zona3.remove();
            }

            form_body.insertAdjacentElement("beforeend", li_out.zona2);
            form_body.insertAdjacentElement("beforeend", button_ele);
        }
        
        if (menu_option_body.firstChild.value === submenu_values.option3) {
            if (li_out.zona1) {
                li_out.zona1.remove();
            }
            if (li_out.zona2) {
                li_out.zona2.remove();
            }
            form_body.insertAdjacentElement("beforeend", li_out.zona3);
            form_body.insertAdjacentElement("beforeend", button_ele);
        }
        if (menu_option_body.firstChild.value === submenu_values.option4) {
            li_out.zona1.remove();
            li_out.zona2.remove();
            // li_out.zona2.remove();
            // li_out.zona3.remove();
            // if (li_out.zona1) {
            // }
            // if (li_out.zona2) {
            // }
            // form_body.insertAdjacentElement("beforeend", li_out.zona3);
            // form_body.insertAdjacentElement("beforeend", button_ele);
        }

    })
    return li_out
}


// let submenu_options = {
//     submenu_options_1 : "zonas",
//     submenu_option_2 : "lotes", 
// }

// let submenu_option_values = {
//     zonas : {
//         option1 : "zona1",
//         option2 : "zona2",
//         option3 : "zona3",
//         option4 : "mensaje",
//     },
//     lotes : {
//         option1 : "lote1",
//         option2 : "lote2",
//         option3 : "lote3",
//         option4 : "mensaje",
//     }
// }

// console.log(submenu_option_values.zonas.option1);
// console.log(submenu_option_values.lotes.option1);

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
    
    
    section_header.insertAdjacentElement("afterend", section_body);
    
    let form_palma = section_body.firstChild.firstChild;
    
    form_palma.insertAdjacentElement("beforeend", palma_body);
    form_palma.insertAdjacentElement("beforeend", search_button);
    
    
    let busqueda_menu = form_palma.firstChild.firstChild;

    let zona_body;
    let lote_body;
    let linea_body;
    let linea_lote_body;
    // let lineas_lote1_body;

    let lotes_body = { };
    let lineas_body = { };

    let lotes_option_value = {
        option1 : "zona1",
        option2 : "zona2",
        option3 : "zona3",
        option4 : "mensaje",
    }

    let lineas_option_value = {
        option1 : "lote1",
        option2 : "lote2",
        option3 : "lote3",
        option4 : "mensaje",
    }

    busqueda_menu.addEventListener("change", () => {
        switch (busqueda_menu.value) {
            case "palma":
                // REMOVER FORMULARIOS
                if (lotes_body.zona1) {
                    lotes_body.zona1.remove();
                }
                if (lotes_body.zona2) {
                    lotes_body.zona2.remove();
                }
                if (lotes_body.zona3) {
                    lotes_body.zona3.remove();
                }
                if (lote_body != undefined) {
                    lote_body.remove();
                }
                if (zona_body != undefined) {
                    zona_body.remove();
                }

                form_palma.insertAdjacentElement("beforeend", palma_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "zona":
                if (lotes_body.zona1) {
                    lotes_body.zona1.remove();
                }
                if (lotes_body.zona2) {
                    lotes_body.zona2.remove();
                }
                if (lotes_body.zona3) {
                    lotes_body.zona3.remove();
                }
                if (lote_body != undefined) {
                    lote_body.remove();
                }

                palma_body.remove();
                // lote_body.remove(); 
                zona_body = createZonaBody();
                
                form_palma.insertAdjacentElement("beforeend", zona_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "lote":
                console.log("Lote");
                
                palma_body.remove();
                if (zona_body != undefined) {
                    zona_body.remove();
                }
                // zona_body.remove();
                lote_body = createZonaBody();
                lineas_body.lote1 = createLoteBody();
                lineas_body.lote2 = createLoteBody("lote2");
                lineas_body.lote3 = createLoteBody("lote3");
                // CREA EL MENU DE SELECCION DE LOTES POR ZONA SELECCIONADA
                createSelectSubmenu(form_palma, lote_body, lotes_body, lotes_option_value, search_button);
                break;
            case "linea":
                console.log("LINEA");
                // REMOVER FORMULARIOS
                if (lotes_body.zona1) {
                    lotes_body.zona1.remove();
                }
                if (lotes_body.zona2) {
                    lotes_body.zona2.remove();
                }
                if (lotes_body.zona3) {
                    lotes_body.zona3.remove();
                }

                palma_body.remove();
                if (lote_body != undefined) {
                    lote_body.remove();
                }
                if (zona_body != undefined) {
                    zona_body.remove();
                }
                
                linea_body = createZonaBody();
                linea_lote_body = createLoteBody()
                
                lotes_body.zona1 = createLoteBody();
                lotes_body.zona2 = createLoteBody("zona2");
                lotes_body.zona3 = createLoteBody("zona3");

                lineas_body.lote1 = createLineasBody();
                lineas_body.lote2 = createLineasBody("lote2");
                lineas_body.lote3 = createLineasBody("lote3");

                createSelectSubmenu(form_palma, linea_body, lotes_body, lineas_option_value, search_button);
                break;
            default:
                console.log("DEFAULT");
                break;
        }
    })

    // form_palma.insertAdjacentElement("beforeend", search_button);
  
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

