
function mapaesri(n){
    
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/geometry/Polygon"
], function (Map, MapView, GraphicsLayer, Graphic, Polygon) {

    var map = new Map({
        basemap: "hybrid"
    });

    var mapView = new MapView({
        container: "viewDiv",
        map: map,
        center: [-73.39, 7.76], // longitude, latitude
        zoom: 14.5
    });

    var graphicsLayer = new GraphicsLayer();

    const point = {type: "point", longitude: -73.39, latitude: 7.76};
    // const pointPicture = {type: "point", longitude: -117.298800, latitude: 34.077295};

    //const simpleMarkerSymbol = {type: "simple-marker", color: [226, 119, 40]};


    const pictureSymbol = {
        type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
        url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
        width: "64px",
        height: "64px"
    };

    var pointGraphic = new Graphic({geometry: point, symbol: simpleMarkerSymbol});
    var pointPictureGraphic = new Graphic({geometry: pointPicture, symbol: pictureSymbol});

    graphicsLayer.add(pointGraphic);
    graphicsLayer.add(pointPictureGraphic);


    map.add(graphicsLayer);

    mapView.when(function(){
        console.log("Map is ready")
    }, function(error){
        // This function will execute if the promise is rejected due to an error
    });

    mapView.watch('extent',getProjection)

    function getProjection(camera) {
        console.log("getProjection: started")
        if(camera.extent.xmin == undefined)
            return;

        const initialExtent = mapView.extent;
        
        const webMercatorUtils = require("esri/geometry/support/webMercatorUtils");
        console.log("getProjection: webMercatorUtils = "+webMercatorUtils)
        const nePoint = webMercatorUtils.xyToLngLat(initialExtent.xmin, initialExtent.ymin)
        const swPoint = webMercatorUtils.xyToLngLat(initialExtent.xmax, initialExtent.ymax)

        console.log("Map projection north east point is: "+nePoint)
        console.log("Map projection south west point is: "+swPoint)
    }
});
}

3

function cargar_pagina(){
    alert("Ya se ha cargado el sitio web .:Bit:.");
}

//-------------------------------------------------------
function jorge(){
    alert("Este es el Boton de .:Bit:.");
}

//-------------------------------------------------------
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



//------------------------ Arrastre DEL DIV --------------------------------------
//--------------------------------------------------------------------------------
// Make the DIV element draggagle:
// Hacer que el elemento DIV se arrastre:

dragElement(document.getElementById("mydiv"));
    
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    /* si está presente, el encabezado es desde donde mueves el DIV:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    /* de lo contrario, mueva el DIV desde cualquier lugar dentro del DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    // obtiene la posición del cursor del mouse al inicio:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    // llama a una función cada vez que se mueve el cursor:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
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
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
