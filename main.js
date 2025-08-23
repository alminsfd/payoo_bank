// Add money

let addMoney=document.getElementById("add-money")
let moneyPopup=document.getElementById("money-popup")
let historyPopup=document.getElementById("history")
addMoney.addEventListener("click",function(){
    moneyPopup.classList.remove("hidden")
    historyPopup.classList.add("hidden")

})

let addMoneybtn=document.getElementById("Mone-add")
addMoneybtn.addEventListener("click",function(e){
    e.preventDefault();
    let bankNumber=document.getElementById("acount-number").value
    let moneyAdd=parseInt(document.getElementById("money-add").value)
    let getpinNumber=parseInt(document.getElementById("pin").value)
    let lastMoney=parseInt(document.getElementById("span").innerText) 
    const pinNumber=847986;
    if(bankNumber.length!=11){
        alert("Invalid account number")
        return
    }
    if(getpinNumber!==pinNumber){
        alert("wrong pin")
    }
    let totalMoney=lastMoney+moneyAdd
    document.getElementById("span").innerText=totalMoney
    document.getElementById("acount-number").value=""
    document.getElementById("money-add").value=""
    document.getElementById("pin").value=""
    document.getElementById("bank").value ="Select A Bank"
})
// login out
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="./index.html"
})