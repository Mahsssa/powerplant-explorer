// Url Endpoints
const solarUrl = "/solar_plants/";
const hydroUrl = "/hydro_plants/";
const windUrl = "/wind_plants/";
const gasUrl = "/gas_plants/";
const coalUrl = "/coal_plants/";
const oilUrl = "/oil_plants/";
const geothermalUrl = "/geothermal_plants/";
const nuclearUrl = "/nuclear_plants/";
const otherUrl = "/other_plants/";

// Basemap urls
const osm_map = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);
const osm_humanitarian = L.tileLayer(
  "http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);
const esri_dark_gray_base = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      '&copy; <a href="http://services.arcgisonline.com/arcgis/rest/services">ESRI</a> arcgisonline',
  }
);

const world_street_map = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
  }
);
const world_imagery = L.tileLayer(
  "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
  }
);

// Initialize the map
const map = L.map("map", {
  layers: [osm_map], // Default basemap
}).setView([20.7, 10.5], 3);

// initialize the basemaps
const baseLayers = {
  "Open Street Map": osm_map,
  "OSM Humanitarian": osm_humanitarian,
  "Dark Gray Base": esri_dark_gray_base,
  "World Street Map": world_street_map,
  "World Imagery": world_imagery,
};

// Define an icon class
const MarkerIcon = L.Icon.extend({
  options: {
    shadowUrl: staticUrl + "app/leaflet/images/marker-shadow.png",
    iconSize: [33, 34],
    shadowSize: [40, 30],
    iconAnchor: [12, 41],
    shadowAnchor: [8, 38],
    popupAnchor: [1, -34],
  },
});

const yellowIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-yellow.png",
});
const blueIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-blue-darker.png",
});
const greenIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-green.png",
});
const orangeIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-orange.png",
});
const darkIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-dark.png",
});
const redIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-red.png",
});
const pinkIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-pink.png",
});
const greenDarkerIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-green-darker.png",
});
const greyIcon = new MarkerIcon({
  iconUrl: staticUrl + "app/leaflet/images/icon-grey.png",
});

/* // Check JSON data
$.getJSON(solarUrl)
  .done(function (data) {
    console.log("Success:", data);
  })
  .fail(function (jqxhr, textStatus, error) {
    const err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
  });
 */
// Create layer group
const solar_marker_layers = L.layerGroup().addTo(map);
const hydro_marker_layers = L.layerGroup().addTo(map);
const wind_marker_layers = L.layerGroup().addTo(map);
const gas_marker_layers = L.layerGroup().addTo(map);
const coal_marker_layers = L.layerGroup().addTo(map);
const oil_marker_layers = L.layerGroup().addTo(map);
const geothermal_marker_layers = L.layerGroup().addTo(map);
const nuclear_marker_layers = L.layerGroup().addTo(map);
const other_marker_layers = L.layerGroup().addTo(map);

// Get points for solar power plants
$.getJSON(solarUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: yellowIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    solar_marker_layers.addLayer(marker);
  });
});

// Get points for hydro power plants
$.getJSON(hydroUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: blueIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    hydro_marker_layers.addLayer(marker);
  });
});

// Get points for wind power plants
$.getJSON(windUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: greenIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    wind_marker_layers.addLayer(marker);
  });
});

// Get points for gas power plants
$.getJSON(gasUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: orangeIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    gas_marker_layers.addLayer(marker);
  });
});

// Get points for coal power plants
$.getJSON(coalUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: darkIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    coal_marker_layers.addLayer(marker);
  });
});

// Get points for oil power plants
$.getJSON(oilUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: redIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    oil_marker_layers.addLayer(marker);
  });
});

// Get points for geothermal power plants
$.getJSON(geothermalUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: pinkIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    geothermal_marker_layers.addLayer(marker);
  });
});

// Get points for nuclear power plants
$.getJSON(nuclearUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: greenDarkerIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    nuclear_marker_layers.addLayer(marker);
  });
});

// Get points for other power plants
$.getJSON(otherUrl, function (data) {
  // Iterate over each data object
  $.each(data, function (i, item) {
    const marker = L.marker(L.latLng(item.latitude, item.longitude), {
      icon: greyIcon,
    });
    marker.bindPopup(
      "<p>Name: " +
        item.name +
        "</p>" +
        "<p>Country: " +
        item.country +
        "</p>" +
        "<p>Capacity: " +
        item.capacity_mw +
        " MW</p>" +
        "<p>Primary Fuel: " +
        item.primary_fuel
    );
    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
    other_marker_layers.addLayer(marker);
  });
});
const overlayMaps = {
  "Coal-fired power plants": coal_marker_layers,
  "Gas-fired power plants": gas_marker_layers,
  "Geothermal power plants": geothermal_marker_layers,
  "Hydropower plants": hydro_marker_layers,
  "Nuclear power plants": nuclear_marker_layers,
  "Oil-fired power plants": oil_marker_layers,
  "Solar power plants": solar_marker_layers,
  "Wind farms": wind_marker_layers,
  "Other types": other_marker_layers,
};

// Add the layers control
const layersControl = L.control.layers(baseLayers, overlayMaps).addTo(map);

// By default, display the first marker layer and leave other layers unckecked
const overlayInputs = layersControl._overlaysList.children;
for (let i = 1; i < overlayInputs.length; i++) {
  overlayInputs[i].getElementsByTagName("input")[0].click();
}

// Add Legends
const legend = L.control({ position: "bottomleft" });

legend.onAdd = function (map) {
  const div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Primary Fuel</h4>";
  div.innerHTML += '<i style="background: #3A3A3A"></i><span>Coal</span><br>';
  div.innerHTML += '<i style="background: #D97720"></i><span>Gas</span><br>';
  div.innerHTML +=
    '<i style="background:#C33E7A "></i><span>Geothermal</span><br>';
  div.innerHTML += '<i style="background: #3366A6"></i><span>Hydro</span><br>';
  div.innerHTML +=
    '<i style="background:#2D9587 "></i><span>Nuclear</span><br>';
  div.innerHTML += '<i style="background: #D33B37"></i><span>Oil</span><br>';
  div.innerHTML += '<i style="background: #DDD927"></i><span>Solar</span><br>';
  div.innerHTML += '<i style="background: #87A452"></i><span>Wind</span><br>';
  div.innerHTML += '<i style="background:#828282 "></i><span>Other</span><br>';

  return div;
};

legend.addTo(map);
