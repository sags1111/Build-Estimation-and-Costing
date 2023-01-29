var lengthh = document.getElementById('length');
var width = document.getElementById('width');
var calculatepccBtn = document.getElementById('calculatepccBtn');

var length1 = 0;
var width1 = 0;
var plasterarea = 0;
var output1 = document.getElementById('output1');
var fit = 0;

function Plasterarea() {
    length1 = Number(lengthh.value);
    width1 = Number(width.value);
    plasterarea = length1 * width1;
    fit = plasterarea * 10.7625;

    output1.innerHTML = `
    <h1> Total Area of Plaster </h1>
    <h3> ${plasterarea} m<sup>2</sup>. </h3>
    <h3> ${fit} ft<sup>2</sup>. </h3> `;

}
calculatepccBtn.addEventListener('click', Plasterarea);


var output2 = document.getElementById('output2');
var output3 = document.getElementById('output3');
var output4 = document.getElementById('output4');

var volumeOfmorter = 0
var volumeOfmorter2 = 0
var dryvolume = 0
var choice = document.getElementById('choice');

function volumeofmorter() {
    if (choice.value == 18) {
        choice = 0.018;
    } else if (choice.value == 12) {
        choice = 0.012;
    } else if (choice.value == 15) {
        choice = 0.015;
    } else if (choice.value == 20) {
        choice = 0.020;
    }
    volumeOfmorter = plasterarea * choice;

    volumeOfmorter2 = volumeOfmorter + (volumeOfmorter * 0.3);

    dryvolume = volumeOfmorter2 + (volumeOfmorter2 * 0.25);

    output2.innerHTML = `
 <h1> Volume Of Mortar</h1>
 <h3> ${volumeOfmorter} m<sup>3</sup>. </h3>
 `;

    output3.innerHTML = `
 <h1> Volume Of Mortar</h1>
 <h3> ${volumeOfmorter2} m<sup>3</sup>. </h3>
 `;

    output4.innerHTML = `
 <h1> Volume Of Mortar</h1>
 <h3> ${dryvolume} m<sup>3</sup>. </h3>
 `;

}
calculatepccBtn.addEventListener('click', volumeofmorter);


// Amount of Cement Require

var reqirecement = 0;
var ratioo = document.getElementById('ratio');
var select = 0;
var output5 = document.getElementById('output5');

function Reqirecement() {
    if (ratioo.value == 'CM 1.6') {
        select = 7;
    } else if (ratioo.value == 'CM 1.5') {
        select = 6;
    } else if (ratioo.value == 'CM 1.3') {
        select = 4;
    } else if (ratioo.value == 'CM 1.2') {
        select = 3;
    }
    reqirecement = ((dryvolume * 1) / select) / 0.035;

    output5.innerHTML = `
    <h1> Amount of Cement Require </h1>
    <h3> ${reqirecement}  bags. </h3>
     `;
}
calculatepccBtn.addEventListener('click', Reqirecement);

//Quantity of Sand Require
var output6 = document.getElementById('output6');

var Sandrequrire = 0;
var ratioo = document.getElementById('ratio');
var selectt = 0;

function sandamount() {
    if (ratioo.value == 'CM 1.6') {
        selectt = 6;
        select = 7;
    } else if (ratioo.value == 'CM 1.5') {
        selectt = 5;
        select = 6;
    } else if (ratioo.value == 'CM 1.3') {
        selectt = 3;
        select = 4;
    } else if (ratioo.value == 'CM 1.2') {
        selectt = 2;
        select = 3;
    }

    Sandrequrire = ((dryvolume * selectt) / select) / 1550;

    output6.innerHTML = `
<h1> Quantity of Sand Require
</h1>
<h3> ${Sandrequrire}  kgs. </h3>
 `;
}

calculatepccBtn.addEventListener('click', sandamount);