import { closeForm, showFormFromModule } from './utils.js'
import { mapaesri } from './map_view.js'

let module_search = document.querySelector(".show-form-busqueda");
let module_geodata = document.querySelector(".show-form-geodata");


let block_search_form = false;
module_search.addEventListener('click', () => {
    let search_form = document.querySelector(".form-box-busqueda");
    
    while (block_search_form === false) {
        search_form = showFormFromModule(module_search, search_form);
        block_search_form = true;
        closeForm(search_form);
        break;
    }
    
    if (search_form === null) {
        search_form = showFormFromModule(module_search, search_form);
        closeForm(search_form);
    }
})

let block_geodata_form = false;
module_geodata.addEventListener('click', () => {
    let geodata_form = document.querySelector(".form-box-geodata");
    
    while (block_geodata_form === false) {
        geodata_form = showFormFromModule(module_geodata, geodata_form);
        block_geodata_form = true;
        closeForm(geodata_form);
        break;
    }
    
    if (geodata_form === null) {
        geodata_form = showFormFromModule(module_geodata, geodata_form);
        closeForm(geodata_form);
    }
})

console.log(mapaesri());


