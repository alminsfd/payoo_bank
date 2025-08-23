let addMoney=document.getElementById("add-money")
let moneyPopup=document.getElementById("money-popup")
let historyPopup=document.getElementById("history")
addMoney.addEventListener("click",function(){
    moneyPopup.classList.remove("hidden")
    historyPopup.classList.add("hidden")

})