var time = 0;
var score = 0;
var amountper = 1;
var upgradeCost = 35;
var autoUpgradeCost = 50;
var autoAmount = 0;

function clickCandy() {
    setScore(score + amountper);
}

function setScore(newScore) {
    score = newScore;
    document.getElementById("score").innerHTML = "Score : "+ newScore;
}

function setCost(cost) {
    upgradeCost = cost;
    document.getElementById("more").innerHTML = "Upgrade Costs : " + cost;
    document.getElementById("printamount").innerHTML = "Candy Per Click : " + amountper;
}

function buyUpgrade() {
    if (score >= upgradeCost){
        setScore(score - upgradeCost);
        amountper = amountper + 1;
        setCost(upgradeCost * 2);
    }
}

window.onload = function() {
    setCost(upgradeCost);
    setACost(autoUpgradeCost);
    setScore(score);
}

function buyAutoUpgrade() {
    if (score >= autoUpgradeCost){
        console.log("thomas is cool");
        setScore(score - autoUpgradeCost);
        upgradeAutoAmount();
        setACost(autoUpgradeCost * 2);
        window.setInterval(autoClick,1000);
         document.getElementById("autoB").innerHTML = "Upgrade Auto";
    }
}

function setACost(newCost) {
    autoUpgradeCost = newCost;
    document.getElementById("autoP").innerHTML = "Upgrade Costs : " + autoUpgradeCost;
     document.getElementById("autoAmountP").innerHTML = "Candy Per Auto : " + autoAmount;
    // Add HTML changes here!
}

function upgradeAutoAmount() {
    autoAmount = autoAmount + 0.5;
}

function autoClick() {
    setScore(score + autoAmount);
}
