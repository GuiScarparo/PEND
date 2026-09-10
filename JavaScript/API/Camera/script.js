const video = document.querySelector('video');
const canvas = document.querySelector('#canvas');
const botao = document.querySelector('#capture');
const foto = document.querySelector('#foto');




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

botao.addEventListener('click', function() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext('2d');
    
    contexto.drawImage(video, 0 ,0, canvas.width, canvas.height);

    foto.src = canvas.toDataURL('image/png');
});