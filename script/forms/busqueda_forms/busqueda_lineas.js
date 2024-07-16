export function createLineasBody(codigo_lote = "lote1") {
    let li_lineas = document.createElement("li");

    let form_select_lineas = document.createElement("select");
    let select_option = document.createElement("option");
    let texto_seleccion = "Seleccione una linea .."
    select_option.setAttribute("value", "mensaje");
    select_option.innerHTML = texto_seleccion;
    form_select_lineas.insertAdjacentElement("beforeend", select_option);

    // SELECT ZONAS OPTIONS ATTRIBUTES
    let lote1_lineas_options = ["linea1", "linea2", "linea3"];
    let lote2_lineas_options = ["linea4", "linea5", "linea6"];
    let lote3_lineas_options = ["linea7", "linea8", "linea9"];

    let lote1_lineas_option;
    let lote2_lineas_option;
    let lote3_lineas_option;

    //SELECCIONAR LOTES SEGUN ZONA
    if (codigo_lote === "lote1") {
        if (lote2_lineas_option != undefined && lote3_lineas_option != undefined) {
            lote2_lineas_option.remove();
            lote3_lineas_option.remove();
        }

        lote1_lineas_options.forEach((option_value) => {
            lote1_lineas_option = document.createElement("option");
            lote1_lineas_option.setAttribute("value", option_value);
            lote1_lineas_option.innerHTML = option_value.toUpperCase();
            form_select_lineas.insertAdjacentElement("beforeend", lote1_lineas_option);
        })      
    }
    if (codigo_lote === "lote2") {
        if (lote1_lineas_option != undefined && lote3_lineas_option != undefined) {
            lote1_lineas_option.remove();
            lote3_lineas_option.remove();
        }
        lote2_lineas_options.forEach((option_value) => {

            lote2_lineas_option = document.createElement("option");
            lote2_lineas_option.setAttribute("value", option_value);
            lote2_lineas_option.innerHTML = option_value.toUpperCase();
            form_select_lineas.insertAdjacentElement("beforeend", lote2_lineas_option);
        })      
    }

    if (codigo_lote === "lote3") {
        if (lote1_lineas_option != undefined && lote2_lineas_option != undefined) {
            lote1_lineas_option.remove();
            lote2_lineas_option.remove();
        }
        lote3_lineas_options.forEach((option_value) => {

            lote3_lineas_option = document.createElement("option");
            lote3_lineas_option.setAttribute("value", option_value);
            lote3_lineas_option.innerHTML = option_value.toUpperCase();
            form_select_lineas.insertAdjacentElement("beforeend", lote3_lineas_option);
        })      
    }

    li_lineas.insertAdjacentElement("beforeend", form_select_lineas);

    return li_lineas
}