navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        console.log("Accuracy: " + position.coords.accuracy);
        document.getElementById("location").innerHTML = "<img src='img/mapas-e-bandeiras.png' alt='Mapa e Bandeiras' width='400' height='400'>";
    },
    function(error) {
        console.error("Error Code: " + error.code + " - " + error.message);
        document.getElementById("location").innerHTML = "<img src='img/sem-localizacao.png' alt='Sem Localização' width='400' height='400'>";
    }
);
