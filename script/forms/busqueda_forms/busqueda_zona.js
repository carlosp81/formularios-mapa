export function createZonaBody() {
    let li_zonas = document.createElement("li");

    let form_select_zonas = document.createElement("select");

    // SELECT ZONAS OPTIONS ATTRIBUTES
    let zonas_menu_options = ["zona1", "zona2", "zona3"];

    let ul_li_form_select_option;

    zonas_menu_options.forEach((option_value) => {
        ul_li_form_select_option = document.createElement("option");
        ul_li_form_select_option.setAttribute("value", option_value);
        ul_li_form_select_option.innerHTML = option_value.toUpperCase();
        form_select_zonas.insertAdjacentElement("beforeend", ul_li_form_select_option);
    });

    li_zonas.insertAdjacentElement("beforeend", form_select_zonas);

    return li_zonas
}