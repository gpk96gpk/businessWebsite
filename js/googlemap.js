function initMap() {
    var uluru = { lat: 51.917302, lng: 4.495713 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        mapTypeID: 'roadmap'
    });

//contentstring holds the text that will be displayed in the infowindow.
    var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">CodeCoffee</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Coffee</b>, is what we do ' +
            'and we do it well! Come to code, chill or game.</p>'+
            'We have live music and special events all the time.' +
            '<p>Visit us at, <a href="https://www.codecoffee.com//</a> </p>'+
            '</div>'+
            '</div>';

//This creates the content 
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        })

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'CodeCoffee (Rotterdam)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}



