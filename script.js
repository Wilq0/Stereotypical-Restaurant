let totalPrice = 0;

function buyChicken() {
    totalPrice = totalPrice + 11;
    document.getElementById("TotalCost").innerHTML = totalPrice;
}

function buyWhiteRiceAndEggs() {
    totalPrice = totalPrice + 7.5;
    document.getElementById("TotalCost").innerHTML = totalPrice;
}

function buyOnigiri() {
    totalPrice = totalPrice + 1;
    document.getElementById("TotalCost").innerHTML = totalPrice;
}

function buySuey() {
    totalPrice = totalPrice + 10;
    document.getElementById("TotalCost").innerHTML = totalPrice;
}

function reset() {
    totalPrice = 0;
    document.getElementById("TotalCost").innerHTML = totalPrice;
}