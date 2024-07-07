export function createGeodataFormHeader() {
    let section_header = document.createElement("section");
    section_header.classList.add("form-header", "form-header__geodata");
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
    ul_li_header_search.innerHTML = "Geodata";
    ul_li_header_icon.classList.add("form-header-search__icon");
  
    return section_header
}

export function createGeodataFormBody() {
    let section_body = document.createElement("section");
    section_body.classList.add("form-body", "form-body__geodata");

    let form = document.createElement("form");
    let ul_form = document.createElement("ul");
    let ul_li_form_checkbox_one = document.createElement("li");
    let ul_li_form_checkbox_two = document.createElement("li");
    let ul_li_form_checkbox_three = document.createElement("li");
    let ul_li_form_checkbox_four = document.createElement("li");

    // Add clases to <Li> elements
    ul_li_form_checkbox_one.classList.add("form-box__options-body__field");
    ul_li_form_checkbox_two.classList.add("form-box__options-body__field");
    ul_li_form_checkbox_three.classList.add("form-box__options-body__field");
    ul_li_form_checkbox_four.classList.add("form-box__options-body__field");

    let form_label_one = document.createElement("label");
    form_label_one.setAttribute("for", "clima");
    form_label_one.innerHTML = "Clima";
    let form_input_one = document.createElement("input");
    form_input_one.setAttribute("type", "checkbox");
    form_input_one.setAttribute("name", "clima");
    form_input_one.setAttribute("id", "field-box");

    let form_label_two = document.createElement("label");
    form_label_two.setAttribute("for", "palma");
    form_label_two.innerHTML = "Palma";
    let form_input_two = document.createElement("input");
    form_input_two.setAttribute("type", "checkbox");
    form_input_two.setAttribute("name", "palma");
    form_input_two.setAttribute("id", "field-box");

    let form_label_three = document.createElement("label");
    form_label_three.setAttribute("for", "pc");
    form_label_three.innerHTML = "PC";
    let form_input_three = document.createElement("input");
    form_input_three.setAttribute("type", "checkbox");
    form_input_three.setAttribute("name", "pc");
    form_input_three.setAttribute("id", "field-box");

    let form_label_four = document.createElement("label");
    form_label_four.setAttribute("for", "multiespectral");
    form_label_four.innerHTML = "Multiespectral";
    let form_input_four = document.createElement("input");
    form_input_four.setAttribute("type", "checkbox");
    form_input_four.setAttribute("name", "multiespectral");
    form_input_four.setAttribute("id", "field-box");

    // INSERT <li> ELEMENTS

    section_body.insertAdjacentElement("afterbegin", form);
    form.insertAdjacentElement("afterbegin", ul_form);
    ul_form.insertAdjacentElement("beforeend", ul_li_form_checkbox_one);
    ul_form.insertAdjacentElement("beforeend", ul_li_form_checkbox_two);
    ul_form.insertAdjacentElement("beforeend", ul_li_form_checkbox_three);
    ul_form.insertAdjacentElement("beforeend", ul_li_form_checkbox_four);

    ul_li_form_checkbox_one.insertAdjacentElement('beforeend', form_label_one);
    ul_li_form_checkbox_one.insertAdjacentElement('beforeend', form_input_one);

    ul_li_form_checkbox_two.insertAdjacentElement('beforeend', form_label_two);
    ul_li_form_checkbox_two.insertAdjacentElement('beforeend', form_input_two);

    ul_li_form_checkbox_three.insertAdjacentElement('beforeend', form_label_three);
    ul_li_form_checkbox_three.insertAdjacentElement('beforeend', form_input_three);

    ul_li_form_checkbox_four.insertAdjacentElement('beforeend', form_label_four);
    ul_li_form_checkbox_four.insertAdjacentElement('beforeend', form_input_four);

    return section_body
}

export function createGeodataForm() {
    let form_element = document.querySelector(".visor_modulos");
    let formGeodataElement = document.createElement("div");
    form_element.insertAdjacentElement("afterend", formGeodataElement);
    formGeodataElement.classList.add("form-box", "form-box-geodata");
  
    let section_header = createGeodataFormHeader();
    formGeodataElement.insertAdjacentElement("afterbegin", section_header);
  
    let section_body = createGeodataFormBody();
    section_header.insertAdjacentElement("afterend", section_body);
  
    return formGeodataElement
}