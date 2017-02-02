function initMap() {
    var uluru = { lat: 51.917302, lng: 4.495713 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeID: 'roadmap'
    });



    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//add an info window. look for it at
//infowindows at developers.google.com

