var canvas, ctx, cnvsWidth, cnvsHeight, cnvsWMiddle, cnvsHMiddle;
var hScale = 0.866;

window.addEventListener("load", eventWindowLoaded);

function eventWindowLoaded() {
    initCanvas();
}

function initCanvas() {
    canvas = document.getElementById("mycanvas");
    if (!canvas || !isCanvasSupported) {
        alert("404 Ondersteundt geen canvas");
        return;
    }

    ctx = canvas.getContext('2d');
    resizeCanvas();
}


function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startDrawing();
}

function startDrawing() {
    cnvsWidth = canvas.width;
    cnvsHeight = canvas.height;
    cnvsWMiddle = cnvsWidth / 2;
    cnvsHMiddle = cnvsHeight / 2;
    
//    ctx.fillStyle="rgb(0,0,0)";
//    ctx.fillRect(0,0, cnvsWidth, cnvsHeight);
//    ctx.lineWidth = 1;
    
    trianglePattern();

}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}

//random getal tussen min en max afgerond naar de dichtsbijzijnde integer
function getRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function trianglePattern(){
    var triangleSide = 40;
    var halfTriSide = triangleSide / 2;
    var rowHeight = Math.floor(triangleSide * hScale);
    var colums = Math.ceil(cnvsWidth / triangleSide) + 1;
    var rows = Math.ceil(cnvsHeight / rowHeight);
    
    var col, row;
    for(row = 0; row < rows; row++){
        for (col = 0; col < colums; col++){
            var x = col * triangleSide;
            var y = row * rowHeight
            var color;
            if(row % 2 != 0){
                x -= halfTriSide;
            }
            // HSL = Hue Saturation Lightness
            // H gaat van 0-360 (0 red, 120 green, 240 blue)
            // S 0%-100% (0% is shade grijs, 100% is de volledige kleur)
            // L 0%-100% (0% is zwart, 100% wit)
            
            //Driehoeken met punt naar boven
            color = "hsl(" + getRandom(0,20) + "," + getRandom(50,99) + "%, " + getRandom(5, 50) + "%)";
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x + halfTriSide, y + rowHeight);
            ctx.lineTo(x - halfTriSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            //Driehoeken met punt naar onder
            color = "hsl(" + getRandom(0,20) + "," + getRandom(50,99) + "%, " + getRandom(5, 50) + "%)";
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x + triangleSide, y);
            ctx.lineTo(x + halfTriSide, y + rowHeight);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        startDrawing();
    }
}