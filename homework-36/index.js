// Map
let map;

function initMap() {
  const beetrootAcademy = { lat: 50.46394265952906, lng: 30.49980079368876 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: beetrootAcademy,
    zoom: 17,
  });

  const marker = new google.maps.Marker({
    position: beetrootAcademy,
    map: map,
  });
}

// Arrow animation
pentitle = "SCSS Arrow Animation";

// Full page
new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  keyboardScrolling: true,
});

//methods
fullpage_api.setAllowScrolling(true);