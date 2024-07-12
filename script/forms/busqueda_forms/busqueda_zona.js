export function createBusquedaFormBody() {
    let section_body = document.createElement("section");

    section_body.classList.add("form-body", "form-body__search");

    let form = document.createElement("form");
    let ul_form = document.createElement("ul");
    let ul_li_form_select_one = document.createElement("li");
    let ul_li_form_select_two = document.createElement("li");

    let form_select_one = document.createElement("select");
    let select_zonas = document.createElement("select");
    

    let form_submit_button = document.createElement("button");
    form_submit_button.type = "submit"
    form_submit_button.innerHTML = "Buscar";
    form_submit_button.classList.add("search-button");

    
    // OPTIONS - SELECT ONE
    let ul_li_form_select_one_option_one = document.createElement("option");
    let ul_li_form_select_one_option_two = document.createElement("option");
    let ul_li_form_select_one_option_three = document.createElement("option");
    let ul_li_form_select_one_option_four = document.createElement("option");
    
    section_body.insertAdjacentElement("afterbegin", form);
    form.insertAdjacentElement("afterbegin", ul_form);
    ul_form.insertAdjacentElement("beforeend", ul_li_form_select_one);
    ul_form.insertAdjacentElement("beforeend", select_zonas);
    ul_form.insertAdjacentElement("beforeend", form_submit_button);

    // SELECT ONE OPTIONS ATTRIBUTES
    form.setAttribute("method", "post");
    ul_li_form_select_one.setAttribute("name", "choice");
    ul_li_form_select_one_option_one.setAttribute("value", "palma");
    ul_li_form_select_one_option_one.setAttribute("selected", "");
    ul_li_form_select_one_option_one.innerHTML = "Palma";
    ul_li_form_select_one_option_two.setAttribute("value", "zona");
    ul_li_form_select_one_option_two.innerHTML = "Zona";
    ul_li_form_select_one_option_three.setAttribute("value", "Option-THREE");
    ul_li_form_select_one_option_three.innerHTML = "Lote";
    ul_li_form_select_one_option_four.setAttribute("value", "linea");
    ul_li_form_select_one_option_four.innerHTML = "Linea";

    let zonas_menu = ["zona1", "zona2", "zona3"];
    let inner_zonas = ["Zona 1", "Zona 2", "Zona 3"]
    ul_li_form_select_two.setAttribute("name", "choice");
    let ul_li_form_select_option = document.createElement("option");

    zonas_menu.map((valor, i) => {
        ul_li_form_select_option.value = valor;
        ul_li_form_select_option.innerHTML = inner_zonas[i];
    })


    ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
    form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_one);

    ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
    form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_two);

    ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
    form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_three);

    ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
    form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_four);

    return section_body
}