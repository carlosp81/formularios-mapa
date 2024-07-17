import { createBusquedaFormHeader, createBusquedaFormBody as search_body } from './forms/search_form.js';
import { createPalmaBody } from './forms/busqueda_forms/busqueda_palma.js';
import { createZonaBody } from './forms/busqueda_forms/busqueda_zona.js';
import { createLoteBody } from './forms/busqueda_forms/busqueda_lote.js';
import { createLineasBody } from './forms/busqueda_forms/busqueda_lineas.js';
import { createGeodataForm } from './forms/geodata_form.js';


// /**
//  * [Crea un submenu]
//  * @param  {[HTMLLIElement]} menu_option_body [zona_options_body]
//  * @param  {[HTMLLIElement]} submenu_options_body [lote_options_body]
//  * @param { [Object] } submenu_values [lote_option_values]
//  * @param { [HTMLButtonElement] } button_ele [search_button]
//  * @return {[HTMLLIElement]} [retorna lotes de la zona seleccionada]
//  */
// export function createSelectSubmenu(form_body, menu_option_zonas, submenu_options_lotes, submenu_options_lineas, submenu_values, button_ele) {

//     form_body.insertAdjacentElement("beforeend", menu_option_body);
//     form_body.insertAdjacentElement("beforeend", button_ele);
//     let li_out = submenu_options_body;

//     menu_option_zonas.firstChild.addEventListener("change", () => {
//         // console.log("FC: ", menu_option_body.firstChild);
//         console.log(submenu_values.option1);
//         // SELECCION DE LAS ZONAS    
//         if (menu_option_body.firstChild.value === submenu_values.option1) {
//             if (li_out.zona2) {
//                 li_out.zona2.remove();
//             }
//             if (li_out.zona3) {
//                 li_out.zona3.remove();
//             }
//             form_body.insertAdjacentElement("beforeend", li_out.zona1);
//             form_body.insertAdjacentElement("beforeend", button_ele);
//         }

//         if (menu_option_body.firstChild.value === submenu_values.option2) {
//             if (li_out.zona1) {
//                 li_out.zona1.remove();
//             }
//             if (li_out.zona3) {
//                 li_out.zona3.remove();
//             }

//             form_body.insertAdjacentElement("beforeend", li_out.zona2);
//             form_body.insertAdjacentElement("beforeend", button_ele);
//         }
        
//         if (menu_option_body.firstChild.value === submenu_values.option3) {
//             if (li_out.zona1) {
//                 li_out.zona1.remove();
//             }
//             if (li_out.zona2) {
//                 li_out.zona2.remove();
//             }
//             form_body.insertAdjacentElement("beforeend", li_out.zona3);
//             form_body.insertAdjacentElement("beforeend", button_ele);
//         }
//         if (menu_option_body.firstChild.value === submenu_values.option4) {
//             li_out.zona1.remove();
//             li_out.zona2.remove();
//             // li_out.zona2.remove();
//             // li_out.zona3.remove();
//             // if (li_out.zona1) {
//             // }
//             // if (li_out.zona2) {
//             // }
//             // form_body.insertAdjacentElement("beforeend", li_out.zona3);
//             // form_body.insertAdjacentElement("beforeend", button_ele);
//         }

//     })
//     return li_out
// }

// parent_menu_zonas, parent_menu_lotes, child_menu_lineas, nesting_level
// let zonas = {}
// let lotes = {
//     zona1 : ["lote1", "lote2", "lote3"],
// }


// console.log(busqueda.lotes.zona1);
    
// submenu_child = busqueda.lotes.zona1
function submenuInformation() {
    let busqueda = {
        zonas: createZonaBody(),
        lotes : {
            zona1 : createLoteBody(),
            zona2 : createLoteBody("zona2"),
            zona3 : createLoteBody("zona3"),
        },
        lineas : {
            lote1 : createLineasBody(),
            lote2 : createLineasBody("lote2"),
            lote3 : createLineasBody("lote3"),
            lote4 : createLineasBody("lote4"),
            lote5 : createLineasBody("lote5"),
            lote6 : createLineasBody("lote6"),
        }
    };
    return busqueda    
}

let submenu_info = submenuInformation();

console.log(submenu_info.zonas);

let zonas_obj = {zonas:[]};
function crearSubmenuLineas(main_form, button, info_menu) {
    info_menu.zonas.firstChild.childNodes.forEach((zona) => {
        zonas_obj.zonas.push(zona);
        // console.log(zona.value);
        selectLote(main_form, button, info_menu, zona);
    });
}
// let lotes = {};
// let lineas = {}
console.log(zonas_obj);
function selectLote(main_form, button, info_menu, zona_ele) {
    let lotes_zona1;
    let lotes_zona2;
    let lotes_zona3;
    let lineas_lote1;
    let lineas_lote2;
    let lineas_lote3;
    let lineas_lote4;
    let lineas_lote5;
    let lineas_lote6;
    let lineas_7;
    let lineas_8;
    let lineas_9;
    // if (zona_ele) {
    //     zona_ele.remove();
    // }
    
    switch (zona_ele.value) {
        case "zona1":
            
            if (lotes_zona1 != undefined) {
                lotes_zona1.remove();
            }
            if (lotes_zona2 != undefined) {
                lotes_zona2.remove();
            }
            if (lotes_zona3 != undefined) {
                lotes_zona3.remove();
            }
            if (lineas_lote1 != undefined) {
                lineas_lote1.remove();
            }
            if (lineas_lote2 != undefined) {
                lineas_lote2.remove();
            }
            if (lineas_lote3 != undefined) {
                lineas_lote3.remove();
            }
            if (lineas_lote4 != undefined) {
                lineas_lote4.remove();
            }
            if (lineas_lote5 != undefined) {
                lineas_lote5.remove();
            }
            if (lineas_lote6 != undefined) {
                lineas_lote6.remove();
            }
            
            // lotes_zona1 = info_menu.lotes.zona1;
            info_menu.zonas.addEventListener("change", (e) => {
                if (e.target.value === "zona1") {
                    if (lotes_zona2) {
                        lotes_zona2.remove();
                    }
                    if (lotes_zona3) {
                        lotes_zona3.remove();
                    }
                    info_menu.lotes.zona2.remove();
                    // main_form.insertAdjacentElement("beforeend", info_menu.zonas);
                    main_form.insertAdjacentElement("beforeend", info_menu.lotes.zona1);
                    main_form.insertAdjacentElement("beforeend", button);
                    
                    // lotes.lotes_zona1 = info_menu.lotes.zona1;
                    info_menu.lotes.zona1.addEventListener("change", (e) => {
                        if (e.target.value === "lote1") {
                            if (lineas_lote1 != undefined) {
                                lineas_lote1.remove();
                            }
                            if (lineas_lote2 != undefined) {
                                lineas_lote2.remove();
                            }
                            if (lineas_lote3 != undefined) {
                                lineas_lote3.remove();
                            }
                            if (lineas_lote4 != undefined) {
                                lineas_lote4.remove();
                            }
                            if (lineas_lote5 != undefined) {
                                lineas_lote5.remove();
                            }
                            if (lineas_lote6 != undefined) {
                                lineas_lote6.remove();
                            }
                            lineas_lote1 = info_menu.lineas.lote1
                            main_form.insertAdjacentElement("beforeend", lineas_lote1);
                            main_form.insertAdjacentElement("beforeend", button);
                        }
                        lineas_lote2 = info_menu.lineas.lote2
                        if (e.target.value === "lote2") {
                            if (lineas_lote1 != undefined) {
                                lineas_lote1.remove();
                            }
                            if (lineas_lote2 != undefined) {
                                lineas_lote2.remove();
                            }
                            if (lineas_lote3 != undefined) {
                                lineas_lote3.remove();
                            }
                            if (lineas_lote4 != undefined) {
                                lineas_lote4.remove();
                            }
                            if (lineas_lote5 != undefined) {
                                lineas_lote5.remove();
                            }
                            if (lineas_lote6 != undefined) {
                                lineas_lote6.remove();
                            }
                            
                            main_form.insertAdjacentElement("beforeend", lineas_lote2);
                            main_form.insertAdjacentElement("beforeend", button);
                        }
                        if (e.target.value === "lote3") {
                            if (lineas_lote1 != undefined) {
                                lineas_lote1.remove();
                            }
                            if (lineas_lote2 != undefined) {
                                lineas_lote2.remove();
                            }
                            if (lineas_lote3 != undefined) {
                                lineas_lote3.remove();
                            }
                            if (lineas_lote4 != undefined) {
                                lineas_lote4.remove();
                            }
                            if (lineas_lote5 != undefined) {
                                lineas_lote5.remove();
                            }
                            if (lineas_lote6 != undefined) {
                                lineas_lote6.remove();
                            }
                            lineas_lote3 = info_menu.lineas.lote3
                            main_form.insertAdjacentElement("beforeend", lineas_lote3);
                            main_form.insertAdjacentElement("beforeend", button);
                        }
                    })
                }
            })
            
            console.log("LOTES ZONA1: ", info_menu.lotes.zona1);
            console.log("LOTES ZONA2: ", info_menu.lotes.zona2);
            break;
        case "zona2":
            info_menu.lotes.zona1.remove();
            if (lotes.lotes_zona1 != undefined) {
                console.log("LOTES ZONA1 VISTO EN ZONA2: ", lotes.lotes_zona1);
                lotes.lotes_zona1.remove();
            }
            if (lotes_zona1 != undefined) {
                lotes_zona1.remove();
            }
            if (lotes_zona2 != undefined) {
                lotes_zona2.remove();
            }
            if (lotes_zona3 != undefined) {
                lotes_zona3.remove();
            }
            if (lineas_lote1 != undefined) {
                lineas_lote1.remove();
            }
            if (lineas_lote2 != undefined) {
                lineas_lote2.remove();
            }
            if (lineas_lote3 != undefined) {
                lineas_lote3.remove();
            }
            if (lineas_lote4 != undefined) {
                lineas_lote4.remove();
            }
            if (lineas_lote5 != undefined) {
                lineas_lote5.remove();
            }
            if (lineas_lote6 != undefined) {
                lineas_lote6.remove();
            }

            lotes_zona2 = info_menu.lotes.zona2;
            lineas_lote4 = info_menu.lineas.lote4;
            lineas_lote5 = info_menu.lineas.lote5;
            lineas_lote6 = info_menu.lineas.lote6;
            lotes_zona2.addEventListener("change", (e) => {
                if (e.target.value === "lote4") {
                    if (lineas_lote1 != undefined) {
                        lineas_lote1.remove();
                    }
                    if (lineas_lote2 != undefined) {
                        lineas_lote2.remove();
                    }
                    if (lineas_lote3 != undefined) {
                        lineas_lote3.remove();
                    }
                    if (lineas_lote4 != undefined) {
                        lineas_lote4.remove();
                    }
                    if (lineas_lote5 != undefined) {
                        lineas_lote5.remove();
                    }
                    if (lineas_lote6 != undefined) {
                        lineas_lote6.remove();
                    }
                    
                    main_form.insertAdjacentElement("beforeend", lineas_lote4);
                    main_form.insertAdjacentElement("beforeend", button);
                }
                if (e.target.value === "lote5") {
                    if (lineas_lote1 != undefined) {
                        lineas_lote1.remove();
                    }
                    if (lineas_lote2 != undefined) {
                        lineas_lote2.remove();
                    }
                    if (lineas_lote3 != undefined) {
                        lineas_lote3.remove();
                    }
                    if (lineas_lote4 != undefined) {
                        lineas_lote4.remove();
                    }
                    if (lineas_lote5 != undefined) {
                        lineas_lote5.remove();
                    }
                    if (lineas_lote6 != undefined) {
                        lineas_lote6.remove();
                    }
                    
                    main_form.insertAdjacentElement("beforeend", lineas_lote5);
                    main_form.insertAdjacentElement("beforeend", button);
                }
                if (e.target.value === "lote6") {
                    if (lineas_lote1 != undefined) {
                        lineas_lote1.remove();
                    }
                    if (lineas_lote2 != undefined) {
                        lineas_lote2.remove();
                    }
                    if (lineas_lote3 != undefined) {
                        lineas_lote3.remove();
                    }
                    if (lineas_lote4 != undefined) {
                        lineas_lote4.remove();
                    }
                    if (lineas_lote5 != undefined) {
                        lineas_lote5.remove();
                    }
                    if (lineas_lote6 != undefined) {
                        lineas_lote6.remove();
                    }
                    
                    main_form.insertAdjacentElement("beforeend", lineas_lote6);
                    main_form.insertAdjacentElement("beforeend", button);
                }
            })
            info_menu.zonas.addEventListener("change", (e) => {
                if (e.target.value === "zona2") {
                    if (lineas_lote1 != undefined) {
                        lineas_lote1.remove();
                    }
                    if (lineas_lote2 != undefined) {
                        lineas_lote2.remove();
                    }
                    if (lineas_lote3 != undefined) {
                        lineas_lote3.remove();
                    }
                    if (lineas_lote4 != undefined) {
                        lineas_lote4.remove();
                    }
                    if (lineas_lote5 != undefined) {
                        lineas_lote5.remove();
                    }
                    if (lineas_lote6 != undefined) {
                        lineas_lote6.remove();
                    }
                    // main_form.insertAdjacentElement("beforeend", info_menu.zonas);
                    main_form.insertAdjacentElement("beforeend", lotes_zona2);
                    main_form.insertAdjacentElement("beforeend", button);
                }
            })
            console.log("LOTES ZONA2: ", lotes_zona2);
            break;
        case "zona3":
            if (lotes_zona1 != undefined) {
                lotes_zona1.remove();
            }
            if (lotes_zona2 != undefined) {
                lotes_zona2.remove();
            }
            if (lotes_zona3 != undefined) {
                lotes_zona3.remove();
            }
            if (lineas_lote1 != undefined) {
                lineas_lote1.remove();
            }
            if (lineas_lote2 != undefined) {
                lineas_lote2.remove();
            }
            if (lineas_lote3 != undefined) {
                lineas_lote3.remove();
            }
            if (lineas_lote4 != undefined) {
                lineas_lote4.remove();
            }
            if (lineas_lote5 != undefined) {
                lineas_lote5.remove();
            }
            if (lineas_lote6 != undefined) {
                lineas_lote6.remove();
            }
            lotes_zona3 = info_menu.lotes.zona3;
            main_form.insertAdjacentElement("beforeend", info_menu.zonas);
            info_menu.zonas.addEventListener("change", (e) => {
                if (e.target.value === "zona3") {
                    info_menu.lotes.zona2.remove();
                    info_menu.lotes.zona1.remove();
                    main_form.insertAdjacentElement("beforeend", lotes_zona3);
                    main_form.insertAdjacentElement("beforeend", button);
                    lotes_zona3.addEventListener("change", (e) => {
                        let select = e.target;
                        console.log(select.value);
                    })
                }
            })
            console.log("LOTES ZONA3: ", lotes_zona3);
            break;    
        default:
            break;
    }
}

function selectLinea(info_menu, lote_ele) {
    let linea_num;
    switch (lote_ele.value) {
        case "lote1":
            linea_num = info_menu.lineas.lote1;
            console.log("LINEAS LOTE1: ", linea_num);
            break;
        case "zona2":
            lote_num = info_menu.lineas.lote2;
            console.log("LOTES ZONA2: ", linea_num);
            break;
        case "zona3":
            lote_num = info_menu.lineas.lote3;
            console.log("LOTES ZONA3: ", linea_num);
            break;    
        default:
            break;
    }
    return linea_num
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

const lineas_por_lote = (lote_element) => {
    lote_element.addEventListener("change", (e) => {
        console.log(e.target);
    })
}

const select_lote = (main_form, zona_body, button, busqueda_obj) => {
    main_form.insertAdjacentElement("beforeend", zona_body);
    main_form.insertAdjacentElement("beforeend", button);
    zona_body.addEventListener("change", (e) => {
        // REMOVER FORMULARIOS
        eliminar_lotes(busqueda_obj.zonas_lotes)
        busqueda_obj.zonas_lotes.zona1 = createLoteBody();
        busqueda_obj.zonas_lotes.zona2 = createLoteBody("zona2");
        busqueda_obj.zonas_lotes.zona3 = createLoteBody("zona3");
        
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
        console.log(e.currentTarget);
    })
};

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
            lote1 : {
                linea1 : undefined,
                linea2 : undefined,
                linea3 : undefined
            },
            lote2 : {
                linea4 : undefined,
                linea5 : undefined,
                linea6 : undefined
            },
            lote3 : {
                linea7 : undefined,
                linea8 : undefined,
                linea9 : undefined
            }
        },
        zona2 : {
            lote4 : {
                linea10 : undefined,
                linea11 : undefined,
                linea12 : undefined
            },
            lote5 : {
                linea13 : undefined,
                linea14 : undefined,
                linea15 : undefined
            },
            lote6 : {
                linea16 : undefined,
                linea17 : undefined,
                linea18 : undefined
            }
        },
    },
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

    let linea_body;
    let linea_lotes_body;

    let lotes_body = { };
    let lineas_body = { };


    busqueda_menu.addEventListener("change", () => {
        switch (busqueda_menu.value) {
            case "palma":
                // REMOVER FORMULARIOS
                eliminar_lotes(busqueda.zonas_lotes)

                if (busqueda.lote_body != undefined) {
                    busqueda.lote_body.remove();
                }
                if (busqueda.zona_body != undefined) {
                    busqueda.zona_body.remove();
                }

                form_palma.insertAdjacentElement("beforeend", palma_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
            case "zona":
                // REMOVER FORMULARIOS
                eliminar_lotes(busqueda.zonas_lotes);
                if (busqueda.lote_body != undefined) {
                    busqueda.lote_body.remove();
                }
                palma_body.remove();
                busqueda.zona_body = createZonaBody();
                
                form_palma.insertAdjacentElement("beforeend", busqueda.zona_body);
                form_palma.insertAdjacentElement("beforeend", search_button);
                break;
                case "lote":
                    console.log("Lote");
                    eliminar_lotes(busqueda.zonas_lotes)
                    palma_body.remove();
                    if (busqueda.zona_body != undefined) {
                        busqueda.zona_body.remove();
                    }
                    
                    if (linea_body != undefined) {
                        linea_body.remove();    
                    }
                    if (linea_lotes_body != undefined) {
                        linea_lotes_body.remove();    
                    }
                    if (linea_body != undefined) {
                        lineas_body.remove();
                    }
                    
                    busqueda.lote_body = createZonaBody();
                    // lineas_body.lote1 = createLoteBody();
                    // lineas_body.lote2 = createLoteBody("lote2");
                    // lineas_body.lote3 = createLoteBody("lote3");

                    
                    select_lote(form_palma, busqueda.lote_body, search_button, busqueda);
                    console.log("LOTES Z1: ", busqueda.zonas_lotes.zona1);
                    // CREA EL MENU DE SELECCION DE LOTES POR ZONA SELECCIONADA
                    // createSelectSubmenu(form_palma, busqueda.zonas, busqueda., lotes_option_value, search_button);
                    break;
                    case "linea":
                console.log("LINEA");
                // REMOVER FORMULARIOS
                eliminar_lotes(busqueda.zonas_lotes); // Elimina el menú de Lotes por zonas

                if (linea_body != undefined) {
                    linea_body.remove();    
                }
                if (linea_lotes_body != undefined) {
                    linea_lotes_body.remove();    
                }
                if (linea_body != undefined) {
                    lineas_body.remove();
                }

                palma_body.remove();

                // crearSubmenuLineas(form_palma, search_button, submenu_info);
                linea_body = createZonaBody();
                linea_lotes_body = createLoteBody();
                lineas_body = createLineasBody();

                form_palma.insertAdjacentElement("beforeend", linea_body);
                form_palma.insertAdjacentElement("beforeend", linea_lotes_body);
                form_palma.insertAdjacentElement("beforeend", lineas_body);
                form_palma.insertAdjacentElement("beforeend", search_button);

                // createSelectSubmenu(form_palma, linea_body, lotes_body, lineas_option_value, search_button);
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

