const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 8;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

//cabeça
contexto.beginPath();
contexto.arc(250,250,20,0,Math.PI*2);
contexto.stroke();
//corpo
contexto.beginPath();
contexto.moveTo(250,350);
contexto.lineTo(250,270);
contexto.stroke();
//braço 1
contexto.beginPath();
contexto.moveTo(250,270);
contexto.lineTo(210,300);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(210,300);
contexto.lineTo(260,320);
contexto.stroke();
//braço 2
contexto.beginPath();
contexto.moveTo(250,270);
contexto.lineTo(290,310);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(290,310);
contexto.lineTo(330,270);
contexto.stroke();

//perna 1

contexto.beginPath();
contexto.moveTo(250,350);
contexto.lineTo(200,390);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(200,390);
contexto.lineTo(200,460);
contexto.stroke();

//perna 2
contexto.beginPath();
contexto.moveTo(250,350);
contexto.lineTo(300,390);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(300,390);
contexto.lineTo(300,460);
contexto.stroke();

