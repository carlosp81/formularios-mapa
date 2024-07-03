// import createForm from "./formulario_busqueda";
"use strict"
// // CREA FORMULARIO DE BUSQUEDA -----------------------------------------------
function createBusquedaFormHeader() {
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
  
  ul_li_header_close_form_input.addEventListener("click", () => {
    closeForm('.form-box-busqueda');
  })
  
  ul_li_header_close_form.classList.add("form-header__close_form");
  ul_li_header_search.classList.add("form-header__search");
  ul_li_header_search.innerHTML = "Busqueda";
  ul_li_header_icon.classList.add("form-header-search__icon");

  return section_header
}

function createBusquedaFormBody() {
  let section_body = document.createElement("section");
  
  section_body.classList.add("form-body", "form-body__search");
  
  let form = document.createElement("form");
  let ul_form = document.createElement("ul");
  let ul_li_form_select_one = document.createElement("li");
  let ul_li_form_select_two = document.createElement("li");
  let ul_li_form_select_three = document.createElement("li");
  
  let form_select_one = document.createElement("select");
  let form_select_two = document.createElement("select");
  let form_select_three = document.createElement("select");
  
  // OPTIONS - SELECT ONE
  let ul_li_form_select_one_option_one = document.createElement("option");
  let ul_li_form_select_one_option_two = document.createElement("option");
  let ul_li_form_select_one_option_three = document.createElement("option");
  
  // OPTIONS - SELECT FIELD TWO
  let ul_li_form_select_two_option_one = document.createElement("option");
  let ul_li_form_select_two_option_two = document.createElement("option");
  let ul_li_form_select_two_option_three = document.createElement("option");
  
  // OPTIONS - SELECT FIELD THREE
  let ul_li_form_select_three_option_one = document.createElement("option");
  let ul_li_form_select_three_option_two = document.createElement("option");
  let ul_li_form_select_three_option_three = document.createElement("option");
  
  section_body.insertAdjacentElement("afterbegin", form);
  form.insertAdjacentElement("afterbegin", ul_form);
  ul_form.insertAdjacentElement("beforeend", ul_li_form_select_one);
  ul_form.insertAdjacentElement("beforeend", ul_li_form_select_two);
  ul_form.insertAdjacentElement("beforeend", ul_li_form_select_three);
  
  // SELECT ONE OPTIONS ATTRIBUTES
  ul_li_form_select_one.setAttribute("name", "choice");
  ul_li_form_select_one_option_one.setAttribute("value", "lote");
  ul_li_form_select_one_option_one.innerHTML = "Lote";
  ul_li_form_select_one_option_two.setAttribute("value", "Option-TWO");
  ul_li_form_select_one_option_two.setAttribute("selected", "");
  ul_li_form_select_one_option_two.innerHTML = "Option TWO";
  ul_li_form_select_one_option_three.setAttribute("value", "Option-THREE");
  ul_li_form_select_one_option_three.innerHTML = "Option THREE";
  
  // SELECT TWO OPTIONS ATTRIBUTES
  ul_li_form_select_two.setAttribute("name", "choice");
  ul_li_form_select_two_option_one.setAttribute("value", "finca");
  ul_li_form_select_two_option_one.innerHTML = "Finca";
  ul_li_form_select_two_option_two.setAttribute("value", "Option-TWO");
  ul_li_form_select_two_option_two.innerHTML = "Option TWO";
  ul_li_form_select_two_option_three.setAttribute("value", "Option-THREE");
  ul_li_form_select_two_option_three.innerHTML = "Option THREE";
  
  // SELECT THREE OPTIONS ATTRIBUTES
  ul_li_form_select_three.setAttribute("name", "choice");
  ul_li_form_select_three_option_one.setAttribute("value", "numero-lote");
  ul_li_form_select_three_option_one.innerHTML = "Numero de Lote";
  ul_li_form_select_three_option_two.setAttribute("value", "Option-TWO");
  ul_li_form_select_three_option_two.innerHTML = "Option TWO";
  ul_li_form_select_three_option_three.setAttribute("value", "Option-THREE");
  ul_li_form_select_three_option_three.innerHTML = "Option THREE";
  
  
  ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
  form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_one);
  
  ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
  form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_two);
  
  ul_li_form_select_one.insertAdjacentElement("beforeend", form_select_one);
  form_select_one.insertAdjacentElement("beforeend", ul_li_form_select_one_option_three);
  
  // SELECT FIELD TWO
  ul_li_form_select_two.insertAdjacentElement("afterbegin", form_select_two);
  form_select_two.insertAdjacentElement("beforeend", ul_li_form_select_two_option_one);
  
  ul_li_form_select_two.insertAdjacentElement("beforeend", form_select_two);
  form_select_two.insertAdjacentElement("beforeend", ul_li_form_select_two_option_two);
  
  ul_li_form_select_two.insertAdjacentElement("beforeend", form_select_two);
  form_select_two.insertAdjacentElement("beforeend", ul_li_form_select_two_option_three);
  
  
  // SELECT FIELD THREE
  ul_li_form_select_three.insertAdjacentElement("beforeend", form_select_three);
  form_select_three.insertAdjacentElement("beforeend", ul_li_form_select_three_option_one);
  
  ul_li_form_select_three.insertAdjacentElement("beforeend", form_select_three);
  form_select_three.insertAdjacentElement("beforeend", ul_li_form_select_three_option_two);
  
  ul_li_form_select_three.insertAdjacentElement("beforeend", form_select_three);
  form_select_three.insertAdjacentElement("beforeend", ul_li_form_select_three_option_three);

  return section_body
}

function createBusquedaForm() {
  let form_element = document.querySelector(".visor_modulos");
  let formBusquedaElement = document.createElement("div");
  form_element.insertAdjacentElement("afterend", formBusquedaElement);
  formBusquedaElement.classList.add("form-box", "form-box-busqueda");

  let section_header = createBusquedaFormHeader();
  formBusquedaElement.insertAdjacentElement("afterbegin", section_header);

  let section_body = createBusquedaFormBody();
  section_header.insertAdjacentElement("afterend", section_body);

  return formBusquedaElement
}

function openForm() {
  let search_form = document.querySelector(".form-box-busqueda");

  if (search_form === null) {
    let busqueda_form = createBusquedaForm();    
    dragElement(busqueda_form);
  }
  else {
    // dragElement(search_form);
  }
  // let search_form = document.querySelector(".form-box");
  
  // dragElement(search_form);
  
  // if (search_form.className === "form-box form-box-busqueda") {
  //   // tempDiv.classList.remove("form-box", "form-box-busqueda")
  //   // search_form.classList.toggle("");
  // }
  // switch(form_element.className) {
  //   case "form-box form-box-busqueda":
  //     // form_element.style.display = "block";
  //     dragElement(search_form);
  //     search_form.classList.toggle("");
  //     break;
  //   case "form-box form-box-geodata":
  //     form_element.style.display = "block";
  //     dragElement(form_element);
  //     break;
  // }
}
    
function closeForm(formulario_clase) {
  const form_element = document.querySelector(formulario_clase)
  switch(form_element.className) {
    case "form-box form-box-busqueda":
      form_element.remove();
      break;
    case "form-box form-box-geodata":
      form_element.remove();
      break;
  }
}

//------------------------ Arrastre DEL DIV --------------------------------------
//--------------------------------------------------------------------------------
// Make the DIV element draggagle:

function dragElement(elmnt) {
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