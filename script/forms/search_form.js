// import { createBusquedaFormBody as palma_form_body } from './forms/busqueda_forms/busqueda_palma.js';

export function createBusquedaFormHeader() {
    let section_header = document.createElement("section");
    section_header.classList.add("form-header", "form-header__search");
    let ul_header = document.createElement("ul");
    section_header.insertAdjacentElement("afterbegin", ul_header);
    let ul_li_header_icon = document.createElement("li");
    let ul_li_header_search = document.createElement("li");
    let ul_li_header_close_form = document.createElement("li");
    let ul_li_header_close_form_input = document.createElement("input");
    ul_header.insertAdjacentElement("afterbegin", ul_li_header_close_form);
    ul_header.insertAdjacentElement("afterbegin", ul_li_header_search)
    ul_header.insertAdjacentElement("afterbegin", ul_li_header_icon);
    ul_li_header_close_form.insertAdjacentElement("afterbegin", ul_li_header_close_form_input);
    ul_li_header_close_form_input.setAttribute("type", "checkbox");
    
    // ul_li_header_close_form_input.addEventListener("click", () => {
    //   closeForm('.form-box-busqueda');
    // })
    
    ul_li_header_close_form.classList.add("form-header__close_form");
    ul_li_header_search.classList.add("form-header__search");
    ul_li_header_search.innerHTML = "Busqueda";
    ul_li_header_icon.classList.add("form-header-search__icon");
  
    return section_header
}
  
export function createBusquedaFormBody() {
  let section_body = document.createElement("section");

  section_body.classList.add("form-body", "form-body__search");

  let form = document.createElement("form");
  let ul_form = document.createElement("ul");
  let ul_li_form_select_one = document.createElement("li");

  let form_select_one = document.createElement("select");

  section_body.insertAdjacentElement("afterbegin", form);
  form.insertAdjacentElement("afterbegin", ul_form);
  ul_form.insertAdjacentElement("beforeend", ul_li_form_select_one);
 
  form_select_one.setAttribute("name", "choice");

  // SELECT ONE OPTIONS ATTRIBUTES
  let menu_palma_options = ["palma", "zona", "lote", "linea"];

  let ul_li_form_select_option;

  menu_palma_options.forEach((option_value) => {
    ul_li_form_select_option = document.createElement("option");
    ul_li_form_select_option.setAttribute("value", option_value);
    ul_li_form_select_option.innerHTML = option_value.toUpperCase();
    form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_option);
  });

  ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);

  return section_body
}
  
export function createBusquedaForm() {
  let form_element = document.querySelector(".visor_modulos");
  let formBusquedaElement = document.createElement("div");
  form_element.insertAdjacentElement("afterend", formBusquedaElement);
  formBusquedaElement.classList.add("form-box", "form-box-busqueda");

  let section_header = createBusquedaFormHeader();
  formBusquedaElement.insertAdjacentElement("afterbegin", section_header);

  let section_body = palma_form_body();
  section_header.insertAdjacentElement("afterend", section_body);

  return formBusquedaElement
}



