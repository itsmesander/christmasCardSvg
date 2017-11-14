var canvas, ctx;
var hScale = 0.85;

window.addEventListener("load", eventWindowLoaded);

function eventWindowLoaded() {
    initCanvas();
}

function initCanvas() {
    canvas = document.getElementById("myCanvas");
    if (!theCanvas || !isCanvasSupported) {
        alert("broken");
        return;
    }

    ctx = canvas.getContext('2d');
    //Start the application
    startTheApp();
}



function startTheApp() {
    var cnvsWidth = canvas.width;
    var cnvsHeight = canvas.height;
    
    ctx.fillStyle='rgb(0,0,0)';
    ctx.fillRect(0,0, cnvsWidth, cnvsHeight);
    ctx.lineWidth = 1;
    
    var tint = rondaf(0,360);
    var zijde = 20;
    var halfZijde = zijde / 2;
    var rijHoogte = Math.floor(zijde * hScale);
    var kolomen = Math.ceil(cnvsWidth / zijde) + 1;
    var rijen = Math.ceil(cnvsHeight / rijHoogte);
    
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

//afronden
function rondaf(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}