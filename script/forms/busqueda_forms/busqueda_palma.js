function createInputPalmaBody() {
    let label = document.createElement("label");
    label.innerHTML = "Ingrese el Numero de Palma: ";
    let ul_li_input = document.createElement("li");
    let input_palma = document.createElement("input");
    input_palma.type = "text";
    input_palma.placeholder = "Numero";

    ul_li_input.insertAdjacentElement("beforeend", label);
    ul_li_input.insertAdjacentElement("beforeend", input_palma);

    return ul_li_input
}


export function createPalmaBody() {
  let li_container = document.createElement("li");
  let input_palma = createInputPalmaBody();

  li_container.insertAdjacentElement("beforeend", input_palma);

  return li_container
}

  
function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));
  }
  
  // document.querySelector("myForm").addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   getData(e.target);
  // });