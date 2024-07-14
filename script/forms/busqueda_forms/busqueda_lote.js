export function createLoteBody(codigo_zona = "zona1") {
    let li_lotes = document.createElement("li");

    let form_select_lotes = document.createElement("select");
    let select_option = document.createElement("option");
    let texto_seleccion = "Seleccione un lote .."
    select_option.setAttribute("value", "mensaje");
    select_option.innerHTML = texto_seleccion;
    form_select_lotes.insertAdjacentElement("beforeend", select_option);

    // SELECT ZONAS OPTIONS ATTRIBUTES
    let zona1_lotes_options = ["lote1", "lote2", "lote3"];
    let zona2_lotes_options = ["lote4", "lote5", "lote6"];
    let zona3_lotes_options = ["lote7", "lote8", "lote9"];

    let zona1_lotes_option;
    let zona2_lotes_option;
    let zona3_lotes_option;

    //SELECCIONAR LOTES SEGUN ZONA
    if (codigo_zona === "zona1") {
        if (zona2_lotes_option != null && zona3_lotes_option != null) {
            zona2_lotes_option.remove();
            zona3_lotes_option.remove();
        }

        zona1_lotes_options.forEach((option_value) => {
            zona1_lotes_option = document.createElement("option");
            zona1_lotes_option.setAttribute("value", option_value);
            zona1_lotes_option.innerHTML = option_value.toUpperCase();
            form_select_lotes.insertAdjacentElement("beforeend", zona1_lotes_option);
        })      
    }
    if (codigo_zona === "zona2") {
        if (zona1_lotes_option != null && zona3_lotes_option != null) {
            zona1_lotes_option.remove();
            zona3_lotes_option.remove();
        }
        zona2_lotes_options.forEach((option_value) => {

            zona2_lotes_option = document.createElement("option");
            zona2_lotes_option.setAttribute("value", option_value);
            zona2_lotes_option.innerHTML = option_value.toUpperCase();
            form_select_lotes.insertAdjacentElement("beforeend", zona2_lotes_option);
        })      
    }

    if (codigo_zona === "zona3") {
        if (zona1_lotes_option != null && zona2_lotes_option != null) {
            zona1_lotes_option.remove();
            zona2_lotes_option.remove();
        }
        zona3_lotes_options.forEach((option_value) => {

            zona3_lotes_option = document.createElement("option");
            zona3_lotes_option.setAttribute("value", option_value);
            zona3_lotes_option.innerHTML = option_value.toUpperCase();
            form_select_lotes.insertAdjacentElement("beforeend", zona3_lotes_option);
        })      
    }

    li_lotes.insertAdjacentElement("beforeend", form_select_lotes);

    return li_lotes
}