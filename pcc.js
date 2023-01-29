var lengthh = document.getElementById('length');
var width = document.getElementById('width');
var depth = document.getElementById('depth');
var goc = document.getElementById('goc'); //Grade of Concrete 

var calculatepccBtn = document.getElementById('calculatepccBtn');

var gradeofconcreat = document.getElementById('gradeofconcreat');

var length1 = 0;
var width1 = 0;
var depth1 = 0;
var totalvloume = 0;

var output1 = document.getElementById('output1');

function ccVolume() {
    length1 = Number(lengthh.value);
    width1 = Number(width.value);
    depth1 = Number(depth.value);

    totalvloume = length1 * width1 * depth1;
    output1.innerHTML = `
    <h1> Cement Concrete Volume </h1>
    <h3> ${totalvloume} ft<sup>3</sup>. </h3>`;
}
calculatepccBtn.addEventListener('click', ccVolume);

//Wet Volume of Mix
var output2 = document.getElementById('output2');

var wet = 0;

function wetvolumevex() {
    wet = totalvloume + (totalvloume * 0.524);
    output2.innerHTML = `
    <h1> Wet Volume of Mix </h1>
    <h3> ${wet} ft<sup>3</sup>. </h3>`;
}
calculatepccBtn.addEventListener('click', wetvolumevex);


//Amount of Cement Required   ->    loop start here

if (goc.value == 'M10') {
    var cementvolume = 0;
    var output3 = document.getElementById('output3');

    function cement() {
        cementvolume = (1 / 10) * wet;
        output3.innerHTML = `
        <h1> Cement Volume </h1>
        <h3> ${cementvolume} m<sup>3</sup>. </h3>`;
    }
    calculatepccBtn.addEventListener('click', cement);

    //No. of Cement Bags

    var totalbag = 0;
    var output4 = document.getElementById('output4');

    function cementbag() {
        totalbag = cementvolume / 0.035;
        output4.innerHTML = `
    <h1> Cement Volume </h1>
    <h3> ${totalbag} Bags </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementbag);

    //Cement in Kg
    var cementKg = 0;
    var output5 = document.getElementById('output5');

    function cementkg() {
        cementKg = totalbag * 50;
        output5.innerHTML = `
    <h1> Cement in Kg </h1>
    <h3> ${cementKg} kg </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementkg);
} else if (goc.value == 'M15') {

    var cementvolume = 0;
    var output3 = document.getElementById('output3');

    function cement() {
        cementvolume = (1 / 7) * wet;
        output3.innerHTML = `
        <h1> Cement Volume </h1>
        <h3> ${cementvolume} m<sup>3</sup>. </h3>`;
    }
    calculatepccBtn.addEventListener('click', cement);

    //No. of Cement Bags

    var totalbag = 0;
    var output4 = document.getElementById('output4');

    function cementbag() {
        totalbag = cementvolume / 0.035;
        output4.innerHTML = `
    <h1> Cement Volume </h1>
    <h3> ${totalbag} Bags </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementbag);

    //Cement in Kg
    var cementKg = 0;
    var output5 = document.getElementById('output5');

    function cementkg() {
        cementKg = totalbag * 50;
        output5.innerHTML = `
    <h1> Cement in Kg </h1>
    <h3> ${cementKg} kg </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementkg);

} else if (goc.value == 'M7.5') {
    var cementvolume = 0;
    var output3 = document.getElementById('output3');

    function cement() {
        cementvolume = (1 / 13) * wet;
        output3.innerHTML = `
        <h1> Cement Volume </h1>
        <h3> ${cementvolume} m<sup>3</sup>. </h3>`;
    }
    calculatepccBtn.addEventListener('click', cement);

    //No. of Cement Bags

    var totalbag = 0;
    var output4 = document.getElementById('output4');

    function cementbag() {
        totalbag = cementvolume / 0.035;
        output4.innerHTML = `
    <h1> Cement Volume </h1>
    <h3> ${totalbag} Bags </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementbag);

    //Cement in Kg
    var cementKg = 0;
    var output5 = document.getElementById('output5');

    function cementkg() {
        cementKg = totalbag * 50;
        output5.innerHTML = `
    <h1> Cement in Kg </h1>
    <h3> ${cementKg} kg </h3>`;
    }
    calculatepccBtn.addEventListener('click', cementkg);
}

//loop end here

// SAND REQURIED

var sandvolume = 0;
var ratio = 0
var output6 = document.getElementById('output6');

function volumesand() {
    if (goc.value == 'M7.5') {
        ratio = 4 / 13;
    } else if (goc.value == 'M10') {
        ratio = 3 / 10;
    } else if (goc.value == 'M15') {
        ratio = 2 / 7;
    }
    sandvolume = ratio * wet;
    output6.innerHTML = `
    <h1> Sand Volume </h1>
    <h3> ${sandvolume} kg </h3>`;
}
calculatepccBtn.addEventListener('click', volumesand);

// sand in kg
var sandKg = 0;
var output7 = document.getElementById('output7');

function sandkg() {
    sandKg = sandvolume * 1550;
    output7.innerHTML = `
    <h1> Sand in Kg </h1>
    <h3> ${sandKg} kg </h3>`;
}
calculatepccBtn.addEventListener('click', sandkg);

// Amount of Aggregate Required

var Aggregate = 0;
var ratio2 = 0;
var output8 = document.getElementById('output8');
// console.log("value is "+goc.value);
function aggregate() {
    if (goc.value == 'M7.5') {
        ratio2 = 8 / 13;
    } else if (goc.value == 'M10') {
        ratio2 = 6 / 10;
    } else if (goc.value == 'M15') {
        ratio2 = 4 / 7;
    }
    Aggregate = ratio2 * 426.72;
    output8.innerHTML = `
    <h1> Aggregate Volume </h1>
    <h3> ${Aggregate} kg </h3>`;
}
calculatepccBtn.addEventListener('click', aggregate);

// Aggregate wight

var AggregateKg = 0;
var output9 = document.getElementById('output9');

function aggregateKg() {
    AggregateKg = sandvolume * 1350;
    output9.innerHTML = `
    <h1> aggregateKg in Kg </h1>
    <h3> ${AggregateKg} kg </h3>`;
}
calculatepccBtn.addEventListener('click', aggregateKg);