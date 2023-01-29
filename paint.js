var carpetarea = document.getElementById('carpetarea')
var doorwidth = document.getElementById('doorwidth');
var doorheight = document.getElementById('doorheight');
var nodoor = document.getElementById('nodoor');
var windowwidth = document.getElementById('windowWidth');
var windowheight = document.getElementById('windowHeight');
var nowindow = document.getElementById('nowindow');
var btn = document.getElementById('button');

//paint area
var paintarea = 0;
var carpetArea = 0;
var output1 = document.getElementById('output1');

function Paintareaa() {
    carpetArea = Number(carpetarea.value);
    paintarea = carpetArea * 3.5;

    console.log(paintarea);
    output1.innerHTML = `
    <h1> Paint Area </h1>
    <h3> ${paintarea} ft<sup>2</sup>. </h3>
    `;
}

btn.addEventListener('click', Paintareaa);


//Door & Window Area

var doorarea = 0;
var windowarea = 0;
var Doorheight = 0;
var Doorwidth = 0;

var Windowheight = 0;
var Windowwidth = 0;
var Nodoor = 0;
var Nowindow = 0;
var output2 = document.getElementById('output2');
var output3 = document.getElementById('output3');


function DoorareaAndWindow() {
    Doorheight = doorheight.value;
    Doorwidth = doorwidth.value;
    Nodoor = nodoor.value;
    doorarea = Doorheight * Doorwidth * Nodoor;
    output2.innerHTML = `
    <h1> Door Area </h1>
    <h3> ${doorarea} ft<sup>2</sup>. </h3>
    `;

    Windowheight = windowheight.value;
    Windowwidth = windowwidth.value;
    Nowindow = nowindow.value;

    windowarea = Windowheight * Windowwidth * Nowindow;
    output3.innerHTML = `
    <h1> window Area </h1>
    <h3> ${windowarea} ft<sup>2</sup>. </h3>
    `;

}
btn.addEventListener('click', DoorareaAndWindow);


//Actual Paint Area

var paintarea = 0;
var output4 = document.getElementById('output4');

function Paintarea() {
    paintarea = carpetArea - doorarea - windowarea;
    output4.innerHTML = `
    <h1> Actual Paint Area </h1>
    <h3> ${paintarea} m<sup>2</sup>. </h3>
    <h3> ${paintarea*10.76} ft<sup>2</sup>. </h3>
    `;
}
btn.addEventListener('click', DoorareaAndWindow);

//paint
var paint = 0;
var output5 = document.getElementById('output5');

function Paint() {
    paint = (paintarea * 10.76) / 100;
    output5.innerHTML = `
    <h1> Actual Paint  </h1>
    <h3> ${paint} liter. </h3>
    `;
}
btn.addEventListener('click', Paint);

//primer
var primer = 0;
var output6 = document.getElementById('output6');

function Primer() {
    primer = (paintarea * 10.76) / 100;
    output6.innerHTML = `
    <h1> Actual Paint Area primer </h1>
    <h3> ${paint} liter. </h3>
    `;
}
btn.addEventListener('click', Primer);

//putty
var putty = 0;
var output7 = document.getElementById('output7');

function Putty() {
    putty = (paintarea * 10.76) / 40;
    output7.innerHTML = `
    <h1> Actual Paint Area putty </h1>
    <h3> ${putty} Kgs. </h3>
    `;
}
btn.addEventListener('click', Putty);