import { createBusquedaFormHeader, createBusquedaFormBody as search_body } from './forms/search_form.js';
import { createPalmaBody } from './forms/busqueda_forms/busqueda_palma.js';
import { createZonaBody } from './forms/busqueda_forms/busqueda_zona.js';
import { createLoteBody } from './forms/busqueda_forms/busqueda_lote.js';
import { createLineasBody } from './forms/busqueda_forms/busqueda_lineas.js';
import { createGeodataForm } from './forms/geodata_form.js';


let busqueda = {
    zona_body : undefined,
    lote_body : undefined,
    linea_body : undefined,
    zonas_lotes : {
        zona1 : undefined,
        zona2 : undefined,
        zona3 : undefined
    },
    zonas_lineas : {
        zona1 : {
            lote1 : undefined,
            lote2 : undefined,
            lote3 : undefined
        },
        zona2 : {
            lote4 : undefined,
            lote5 : undefined,
            lote6 : undefined
        },
        zona3 : {
            lote7 : undefined,
            lote8 : undefined,
            lote9 : undefined
        },
    },
};

///------COMIENZO FUNCIONES PARA REMOVER MENUS DE SELECCION
const remover_elementos_body = (busqueda_obj) => {
    if (busqueda_obj.lote_body != undefined) {
        busqueda_obj.lote_body.remove();
    }
    if (busqueda_obj.zona_body != undefined) {
        busqueda_obj.zona_body.remove();
    }
    if (busqueda_obj.linea_body != undefined) {
        busqueda_obj.linea_body.remove();
    }
}


const eliminar_lotes = (lotes) => {
    if (lotes.zona1 != undefined) {
        lotes.zona1.remove();
    }
    if (lotes.zona2 != undefined) {
        lotes.zona2.remove();
    }
    if (lotes.zona3 != undefined) {
        lotes.zona3.remove();
    }
}


const remover_elementos_lineas = (lineas) => {
    if (lineas.zona1.lote1 != undefined) {
        lineas.zona1.lote1.remove();
    }
    if (lineas.zona1.lote2 != undefined) {
        lineas.zona1.lote2.remove();
    }
    if (lineas.zona1.lote3 != undefined) {
        lineas.zona1.lote3.remove();
    }
    if (lineas.zona2.lote4 != undefined) {
        lineas.zona2.lote4.remove();
    }
    if (lineas.zona2.lote5 != undefined) {
        lineas.zona2.lote5.remove();
    }
    if (lineas.zona2.lote6 != undefined) {
        lineas.zona2.lote6.remove();
    }
    if (lineas.zona3.lote7 != undefined) {
        lineas.zona3.lote7.remove();
    }
    if (lineas.zona3.lote8 != undefined) {
        lineas.zona3.lote8.remove();
    }
    if (lineas.zona3.lote9 != undefined) {
        lineas.zona3.lote9.remove();
    }
}

///-----TERMINA FUNCIONES PARA REMOVER MENUS DE SELECCION

const info_lineas = (busqueda_obj, zona, lote) => {
    busqueda_obj[zona][lote] = createLineasBody(lote);
    return busqueda_obj[zona][lote]
}


const lineas_zona1 = (main_form, button, lote_value, busqueda_obj) => {
    remover_elementos_lineas(busqueda_obj.zonas_lineas);
    
    // CREAR LINEAS POR LOTES
    let lineas_lote1 = info_lineas(busqueda_obj.zonas_lineas, "zona1", "lote1");
    let lineas_lote2 = info_lineas(busqueda_obj.zonas_lineas, "zona1", "lote2");
    let lineas_lote3 = info_lineas(busqueda_obj.zonas_lineas, "zona1", "lote3");
    
    

    // INSERTAR EN EL DOM LAS LINEAS POR LOTES
    switch (lote_value) {
        case "lote1":
            main_form.insertAdjacentElement("beforeend", lineas_lote1);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote2":
            main_form.insertAdjacentElement("beforeend", lineas_lote2);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote3":
            main_form.insertAdjacentElement("beforeend", lineas_lote3);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote4":
            main_form.insertAdjacentElement("beforeend", lineas_lote4);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote5":
            main_form.insertAdjacentElement("beforeend", lineas_lote5);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote6":
            main_form.insertAdjacentElement("beforeend", lineas_lote6);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        
        default:
            break;
    }
}


const lineas_zona2 = (main_form, button, lote_value, busqueda_obj) => {
    remover_elementos_lineas(busqueda_obj.zonas_lineas);
    let lineas_lote4 = info_lineas(busqueda_obj.zonas_lineas, "zona2", "lote4");
    let lineas_lote5 = info_lineas(busqueda_obj.zonas_lineas, "zona2", "lote5");
    let lineas_lote6 = info_lineas(busqueda_obj.zonas_lineas, "zona2", "lote6");

    switch (lote_value) {
        case "lote4":
            main_form.insertAdjacentElement("beforeend", lineas_lote4);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote5":
            main_form.insertAdjacentElement("beforeend", lineas_lote5);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote6":
            main_form.insertAdjacentElement("beforeend", lineas_lote6);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        default:
            break;
    }
}


const lineas_zona3 = (main_form, button, lote_value, busqueda_obj) => {
    remover_elementos_lineas(busqueda_obj.zonas_lineas);
    let lineas_lote7 = info_lineas(busqueda_obj.zonas_lineas, "zona3", "lote7");
    let lineas_lote8 = info_lineas(busqueda_obj.zonas_lineas, "zona3", "lote8");
    let lineas_lote9 = info_lineas(busqueda_obj.zonas_lineas, "zona3", "lote9");

    switch (lote_value) {
        case "lote7":
            main_form.insertAdjacentElement("beforeend", lineas_lote7);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote8":
            main_form.insertAdjacentElement("beforeend", lineas_lote8);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        case "lote9":
            main_form.insertAdjacentElement("beforeend", lineas_lote9);
            main_form.insertAdjacentElement("beforeend", button);
            break;
        default:
            break;
    }
}


const select_lote = (main_form, zona_body, button, busqueda_obj) => {
    let lotes = {zona1 : undefined, zona2 : undefined, zona3 : undefined};
    main_form.insertAdjacentElement("beforeend", zona_body);
    main_form.insertAdjacentElement("beforeend", button);
    zona_body.addEventListener("change", (e) => {
        // REMOVER FORMULARIOS
        eliminar_lotes(busqueda_obj.zonas_lotes)
        busqueda_obj.zonas_lotes.zona1 = createLoteBody();
        busqueda_obj.zonas_lotes.zona2 = createLoteBody("zona2");
        busqueda_obj.zonas_lotes.zona3 = createLoteBody("zona3");

        lotes.zona1 = busqueda_obj.zonas_lotes.zona1;
        lotes.zona2 = busqueda_obj.zonas_lotes.zona2;
        lotes.zona3 = busqueda_obj.zonas_lotes.zona3;
        
        switch (e.target.value) {
            case "zona1":
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona1);
                main_form.insertAdjacentElement("beforeend", button);
                break;
            case "zona2":
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona2);
                main_form.insertAdjacentElement("beforeend", button);
                break;
            case "zona3":
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona3);
                main_form.insertAdjacentElement("beforeend", button);
                break;
            default:
                break;
        }
    })
    return lotes
};


const select_linea = (main_form, zona_body, button, busqueda_obj) => {
    main_form.insertAdjacentElement("beforeend", zona_body);
    main_form.insertAdjacentElement("beforeend", button);
    
    zona_body.addEventListener("change", (e) => {
        // REMOVER FORMULARIOS
        eliminar_lotes(busqueda_obj.zonas_lotes);
        remover_elementos_lineas(busqueda_obj.zonas_lineas);
        // LOTES POR ZONA
        busqueda_obj.zonas_lotes.zona1 = createLoteBody();
        busqueda_obj.zonas_lotes.zona2 = createLoteBody("zona2");
        busqueda_obj.zonas_lotes.zona3 = createLoteBody("zona3");
        
        switch (e.target.value) {
            case "zona1":
                // Inserta en el DOM los lotes de la zona1
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona1);
                main_form.insertAdjacentElement("beforeend", button);
                
                busqueda_obj.zonas_lotes.zona1.addEventListener("change", (el) => {
                    lineas_zona1(main_form, button, el.target.value, busqueda_obj);
                })
                break;
            case "zona2":
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona2);
                main_form.insertAdjacentElement("beforeend", button);

                busqueda_obj.zonas_lotes.zona2.addEventListener("change", (e_z2) => {
                    lineas_zona2(main_form, button, e_z2.target.value, busqueda_obj);
                })
                break;
            case "zona3":
                main_form.insertAdjacentElement("beforeend", busqueda_obj.zonas_lotes.zona3);
                main_form.insertAdjacentElement("beforeend", button);
                
                busqueda_obj.zonas_lotes.zona3.addEventListener("change", (e_z3) => {
                    lineas_zona3(main_form, button, e_z3.target.value, busqueda_obj);
                })
                break;
            default:
                break;
        }
    })
};


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

    busqueda_menu.addEventListener("change", () => {
        switch (busqueda_menu.value) {
            case "palma":
                // REMOVER MENUS DE SELECCION
                remover_elementos_body(busqueda); // Elimina del DOM, elementos tipo body
                eliminar_lotes(busqueda.zonas_lotes); // Elimina el menú de Lotes por zonas
                remover_elementos_lineas(busqueda.zonas_lineas); // Elimina lineas por lotes
                
                form_palma.insertAdjacentElement("beforeend", palma_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "zona":
                // REMOVER MENUS DE SELECCION
                remover_elementos_body(busqueda); // Elimina del DOM, elementos tipo body
                eliminar_lotes(busqueda.zonas_lotes); // Elimina el menú de Lotes por zonas
                remover_elementos_lineas(busqueda.zonas_lineas); // Elimina lineas por lotes

                palma_body.remove();
                busqueda.zona_body = createZonaBody();
                
                form_palma.insertAdjacentElement("beforeend", busqueda.zona_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "lote":
                // REMOVER MENUS DE SELECCION
                remover_elementos_body(busqueda); // Elimina del DOM, elementos tipo body
                eliminar_lotes(busqueda.zonas_lotes); // Elimina el menú de Lotes por zonas
                remover_elementos_lineas(busqueda.zonas_lineas); // Elimina lineas por lotes

                palma_body.remove();
                
                busqueda.lote_body = createZonaBody();
                
                select_lote(form_palma, busqueda.lote_body, search_button, busqueda);
                break;
            case "linea":
                // REMOVER MENUS DE SELECCION
                remover_elementos_body(busqueda); // Elimina del DOM, elementos tipo body
                eliminar_lotes(busqueda.zonas_lotes); // Elimina el menú de Lotes por zonas
                remover_elementos_lineas(busqueda.zonas_lineas); // Elimina lineas por lotes

                palma_body.remove();
                busqueda.linea_body = createZonaBody();
                busqueda.zonas_lotes.zona1 = createLoteBody();
                busqueda.zonas_lineas.zona1 = createLineasBody();
                busqueda.zonas_lineas.zona1.lote1 = createLineasBody();

                select_linea(form_palma, busqueda.linea_body, search_button, busqueda);
                break;
            default:
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

