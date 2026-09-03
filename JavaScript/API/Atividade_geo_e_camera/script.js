let RM = document.getElementById("idInput");
let Botao = document.getElementById("registerButton");
let mensagem = document.getElementById("mensagem");

Botao.addEventListener("click", function() {
    if (RM.value === "") {
        alert("Por favor, insira o RM.");
    }
    else {
        navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        console.log("Accuracy: " + position.coords.accuracy);
        document.querySelector("#location").innerHTML = "<p>Latitude: " + position.coords.latitude + "</p><p>Longitude: " + position.coords.longitude + "</p><p>Precisão: " + position.coords.accuracy + " metros</p>";

            navigator.mediaDevices.getUserMedia({ video: true, 
    audio: false
})
    .then(function(stream) {
        const video = document.querySelector('video');
        video.srcObject = stream;
})
    .catch(function(error) {
        console.error("Error accessing camera: " + error.name + " - " + error.message);
});
mensagem.style.display = "block";
mensagem.innerHTML = "<p>Aluno com o RM " + RM.value + " registrado com sucesso!</p>";
    },
    function(error) {
        console.error("Error Code: " + error.code + " - " + error.message);
        document.querySelector("#location").innerHTML = "<p>Error Code: " + error.code + "</p><p>Message: " + error.message + "</p>";
    }
);


    }


})