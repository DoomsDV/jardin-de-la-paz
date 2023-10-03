function initMap() {
    let coord = {lat: -25.306188, lng: -57.5782}
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
}