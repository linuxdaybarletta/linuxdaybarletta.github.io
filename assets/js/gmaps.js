var parkingLatLon=new google.maps.LatLng(41.312544,16.281694);
var gosLatLon=new google.maps.LatLng(41.312557,16.278122);
function initialize()
{
    var mapProp = {
        center: gosLatLon,
        zoom:14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);

    var markerParking = new google.maps.Marker({
        position: parkingLatLon,
        icon: 'assets/img/parking.png',
        title: 'Parcheggi'
    });

    var markerGOS = new google.maps.Marker({
        position: gosLatLon,
        icon: 'assets/img/gos-small.png',
        title: 'Giovani Open Space'
    });

    markerParking.setMap(map);
    markerGOS.setMap(map);

    google.maps.event.addListener(markerParking,'click',function() {
        map.setZoom(16);
        map.setCenter(markerParking.getPosition());
    });
    google.maps.event.addListener(markerGOS,'click',function() {
        map.setZoom(16);
        map.setCenter(markerGOS.getPosition());
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
