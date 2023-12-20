const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate-button");
const outputBox = document.querySelector("#output-box");
const angryTheme = document.querySelector(".container");

calculateButton.addEventListener("click", calculateStockProfitAndLoss);

function calculateStockProfitAndLoss(){
    let profitLossPrice = currentPrice.value - initialPrice.value;
    let profitOrLoss = profitLossPrice * quantityOfStocks.value;
    let initialtotal = initialPrice.value * quantityOfStocks.value;
    let percentageProfitLoss = Math.trunc((profitOrLoss / initialtotal) * 100);


    if (percentageProfitLoss <= -50) {
        angryTheme.style.animation = "blinkingBackground 2s infinite";
        outputBox.innerText ="Hey! 😡 , the loss is " + profitOrLoss + " and the loss percentage is " + (percentageProfitLoss * -1) + " %.";
    }
    else {
        if (profitLossPrice > 0){
        outputBox.innerText ="Hey! 🥳 , the profit is " + profitOrLoss + " and the profit percentage is " + percentageProfitLoss + " %."; 
        } else {
        outputBox.innerText ="Hey! 😡 , the loss is " + profitOrLoss + " and the loss percentage is " + (percentageProfitLoss * -1) + " %.";
        }  
    }

}