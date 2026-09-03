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