const builtUpArea = document.getElementById('builtUpArea');
const approxCost = document.getElementById('approxCost');
const calculateCostBtn = document.getElementById('calculateCostBtn');
const output = document.getElementById('outputt');

function constructionCostEstimator() {
    let area = builtUpArea.value;
    let cost = approxCost.value;
    let totalcost = area * cost;

    output.innerHTML = totalcost;
}

calculateCostBtn.addEventListener('click', constructionCostEstimator);

//Amount of Cement Required bags
let amountcement = builtUpArea * 0.4

function amountOfCement() {
    const builtUpArea = document.getElementById('builtUpArea');
    output2.innerHTML = amountcement;
}

//amount rs
let totalamount = totalcost * 0.164;

function cementAmount() {
    output3.innerHTML = totalamount;
}

//amount of sand required ton
let sandAmount = builtUpArea * 0.186;

function amountOfsand() {
    output4.innerHTML = sandAmount;
}

//Sand Amount rs
let amountOfSand = 0.123 * totalcost;

function amountSand() {
    output5.innerHTML = amountOfSand;
}

//Amount of Aggregate Required ton

let amountAggregate = builtUpArea * 0.608;

function aggregrate() {
    output5.innerHTML = amountAggregate;
}