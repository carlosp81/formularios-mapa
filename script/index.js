import { closeForm, showFormFromModule } from './utils.js'

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

// INCLUDE MAP

// function mapaesri(n){
//   require([
//       "esri/Map",
//       "esri/views/MapView",
//       "esri/layers/GraphicsLayer",
//       "esri/Graphic",
//       "esri/geometry/Polygon"
//   ], function (Map, MapView, GraphicsLayer, Graphic, Polygon) {

//       var map = new Map({
//           basemap: "hybrid"
//       });

//       var mapView = new MapView({
//           container: "container",
//           map: map,
//           center: [-73.39, 7.76], // longitude, latitude
//           zoom: 14.5
//       });

//       var graphicsLayer = new GraphicsLayer();

//       const point = {type: "point", longitude: -73.39, latitude: 7.76};
//       const pointPicture = {type: "point", longitude: -117.298800, latitude: 34.077295};

//       const simpleMarkerSymbol = {type: "simple-marker", color: [226, 119, 40]};


//       const pictureSymbol = {
//           type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
//           url: "https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png",
//           width: "64px",
//           height: "64px"
//       };

//       var pointGraphic = new Graphic({geometry: point, symbol: simpleMarkerSymbol});
//       var pointPictureGraphic = new Graphic({geometry: pointPicture, symbol: pictureSymbol});

//       graphicsLayer.add(pointGraphic);
//       graphicsLayer.add(pointPictureGraphic);


//       map.add(graphicsLayer);

//       mapView.when(function(){
//           console.log("Map is ready")
//       }, function(error){
//           // This function will execute if the promise is rejected due to an error
//       });

//       mapView.watch('extent',getProjection)

//       function getProjection(camera) {
//           console.log("getProjection: started")
//           if(camera.extent.xmin == undefined)
//               return;

//           const initialExtent = mapView.extent;
          
//           const webMercatorUtils = require("esri/geometry/support/webMercatorUtils");
//           console.log("getProjection: webMercatorUtils = "+webMercatorUtils)
//           const nePoint = webMercatorUtils.xyToLngLat(initialExtent.xmin, initialExtent.ymin)
//           const swPoint = webMercatorUtils.xyToLngLat(initialExtent.xmax, initialExtent.ymax)

//           console.log("Map projection north east point is: "+nePoint)
//           console.log("Map projection south west point is: "+swPoint)
//       }
//   });
// }
