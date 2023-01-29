var builtUpArea = document.getElementById('builtUpArea');
var approxCost = document.getElementById('approxCost');
var calculateCostBtn = document.getElementById('calculateCostBtn');
var output = document.getElementById('outputt');

var totalcost = 0;
// builtUpArea=area;
var area = 0;
var cost = 0;


function constructionCostEstimator() {

    area = Number(builtUpArea.value);
    cost = Number(approxCost.value);

    totalcost = area * cost;
    console.log(totalcost);
    output.innerHTML = `
  <h1> Total cost </h1>
  <h3> ${totalcost} Rs. </h3>`;
}

calculateCostBtn.addEventListener('click', constructionCostEstimator);



//Amount of Cement Required bags
var output2 = document.getElementById('output2');

// var builtUpArea=document.getElementById('builtUpArea'); 
var amountcement = 0;

function amountOfCement() {
    amountcement = Number(area * 0.4);
    console.log(amountcement);

    output2.innerHTML = `
    <h1>Amount of Cement rqquired </h1>
    <h3> ${amountcement} Bags. </h3>`;
}
calculateCostBtn.addEventListener('click', amountOfCement);

//amount rs
var output3 = document.getElementById('output3');
totalamount = 0;

function cementAmount() {
    totalamount = totalcost * 0.164;
    output3.innerHTML = `
<h1>Cement amount </h1>
<h3> ${totalamount} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', cementAmount);


//amount of sand required ton
var output4 = document.getElementById('output4');
var sandAmount = 0;

function amountOfsand() {
    sandAmount = area * 0.186;
    output4.innerHTML = `
<h1>Amount of Sand Required</h1>
<h3> ${sandAmount} Ton.</h3>`;
}
calculateCostBtn.addEventListener('click', amountOfsand);


//Sand Amount rs
var output5 = document.getElementById('output5');
var amountOfSand = 0;

function amountSand() {
    amountOfSand = 0.123 * totalcost;
    output5.innerHTML = `
    <h1>Sand Amount</h1>
    <h3> ${amountOfSand} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', amountSand);


//Amount of Aggregate Required ton
var output6 = document.getElementById('output6');
var amountAggregate = 0;

function aggregrate() {
    amountAggregate = area * 0.608;
    output6.innerHTML = `
    <h1>Amount of Aggregate Required</h1>
    <h3> ${amountAggregate} Ton.</h3>`;

}
calculateCostBtn.addEventListener('click', aggregrate);


//Amount of Aggregate Required rs
var output7 = document.getElementById('output7');
var aggregratamount = 0;

function aggregateRs() {
    aggregratamount = 0.074 * totalcost;
    output7.innerHTML = `
    <h1>Aggregate Amount</h1>
    <h3> ${aggregratamount} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', aggregateRs);


// quntity of steel
var output8 = document.getElementById('output8');
var quntitySteel = 0;

function steelamount() {
    quntitySteel = area * 4;
    output8.innerHTML = `
    <h1>Amount of Steel Required</h1>
    <h3> ${quntitySteel} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', steelamount);


// rs of steel
var output9 = document.getElementById('output9');
var rsofSteel = 0;

function steelRs() {
    rsofSteel = 0.246 * totalcost;
    output9.innerHTML = `
    <h1>Steel Amount</h1>
    <h3> ${rsofSteel} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', steelRs);


//amount of paint required
var output10 = document.getElementById('output10');
var paint = 0;

function amountPaint() {
    paint = area * 0.18;
    output10.innerHTML = `
    <h1>Amount of Paint Required</h1>
    <h3> ${paint} Lt.</h3>`;
}
calculateCostBtn.addEventListener('click', amountPaint);


// amount of bricks
var output11 = document.getElementById('output11');
var bricks = 0;

function amountBricks() {
    bricks = area * 8;
    output11.innerHTML = `
    <h1> Amount of Bricks Required</h1>
    <h3> ${bricks} Pcs.</h3>`;
}
calculateCostBtn.addEventListener('click', amountBricks);


//flooring amount
var output12 = document.getElementById('output12');
var flroing = 0;

function amountfloring() {
    flroing = area * 1.3;
    output12.innerHTML = `
    <h1> Flooring</h1>
    <h3> ${flroing} Sq.Ft.</h3>`;
}
calculateCostBtn.addEventListener('click', amountfloring);


//finisher amount
var output13 = document.getElementById('output13');
var finisher = 0;

function finsiheramount() {
    finisher = 0.165 * totalcost;
    output13.innerHTML = `
    <h1> Finishers </h1>
    <h3> ${finisher} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', finsiheramount);


// fitings amount
var output14 = document.getElementById('output14');
var fitting = 0;

function fitamount() {
    fitting = 0.228 * totalcost;
    output14.innerHTML = `
    <h1> Fittings </h1>
    <h3> ${fitting} Rs.</h3>`;
}
calculateCostBtn.addEventListener('click', fitamount);