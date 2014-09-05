var parkingLatLon=new google.maps.LatLng(41.312544,16.281694);
var gosLatLon=new google.maps.LatLng(41.312557,16.278122);
function initialize()
{
    var mapTypeIds = [];
    for(var type in google.maps.MapTypeId) {
        mapTypeIds.push(google.maps.MapTypeId[type]);
    }
    mapTypeIds.push("OSM");

    var mapProp = {
        center: gosLatLon,
        zoom: 15,
        // mapTypeId: google.maps.MapTypeId.ROADMAP
        mapTypeId: "OSM",
        mapTypeControlOptions: {
            mapTypeIds: mapTypeIds
        }
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
        map.setZoom(17);
        map.setCenter(markerParking.getPosition());
    });
    google.maps.event.addListener(markerGOS,'click',function() {
        map.setZoom(17);
        map.setCenter(markerGOS.getPosition());
    });
    map.mapTypes.set("OSM", new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18
    }));
}
google.maps.event.addDomListener(window, 'load', initialize);
