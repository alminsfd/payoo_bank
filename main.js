//section selection
let addMoneySection=document.getElementById("money-section")
let cashoutSection=document.getElementById("castout-section")
let transferMoneySection=document.getElementById("transfermoney-section")
let getBonusSection=document.getElementById("getbonus-section")
let payBillSection=document.getElementById("paybill-section")
let transectionSection=document.getElementById("transecton-section")
let footers=document.getElementsByClassName("changeable_footer")



//btn-seclection
let addMoney=document.getElementById("money-btn")
let cashoutMoney=document.getElementById("castout-btn")
let transferMoney=document.getElementById("transfermoney-btn")
let getBonus=document.getElementById("getbonus-btn")
let payBill=document.getElementById("paybill-btn")
let transectionHistory=document.getElementById("transecton-btn")
let changeable_btns=document.getElementsByClassName("changeable_btn")

//toggling function
function togglingsection(id){
    for(let footer of footers){
        footer.style.display="none"
    }
     document.getElementById(id).style.display="block"
}

addMoney.addEventListener("click",function(e){
    e.preventDefault();
    togglingsection("money-section");    
})

cashoutMoney.addEventListener("click",function(e){
    e.preventDefault();
    togglingsection("castout-section");
});

transferMoney.addEventListener("click",function(e){
    e.preventDefault();
    togglingsection("transfermoney-section");
});
getBonus.addEventListener("click",function(e){
    e.preventDefault(); 
    togglingsection("getbonus-section");   
}); 
payBill.addEventListener("click",function(e){
    e.preventDefault(); 
    togglingsection("paybill-section");   
});
transectionHistory.addEventListener("click",function(e){
    e.preventDefault(); 
    togglingsection("transecton-section");   
});


//btn color change function

function btncolorchange(id){

    for(let changeable_btn of changeable_btns){
    changeable_btn.classList.remove("chanbility")
  }
    id.classList.add("chanbility")
}

addMoney.addEventListener("click",function(e){
    e.preventDefault();
    btncolorchange(addMoney)})

cashoutMoney.addEventListener("click",function(e){
    e.preventDefault();
    btncolorchange(cashoutMoney)
});
transferMoney.addEventListener("click",function(e){
    e.preventDefault();     
    btncolorchange(transferMoney)
});

getBonus.addEventListener("click",function(e){
    e.preventDefault();
    btncolorchange(getBonus)
});
payBill.addEventListener("click",function(e){
    e.preventDefault();
    btncolorchange(payBill)
});
transectionHistory.addEventListener("click",function(e){    
    e.preventDefault();
    btncolorchange(transectionHistory)
});













// add money function       













// let addMoneybtn=document.getElementById("Mone-add")
// addMoneybtn.addEventListener("click",function(e){
//     e.preventDefault();
//     let bankNumber=document.getElementById("acount-number").value
//     let moneyAdd=parseInt(document.getElementById("money-add").value)
//     let getpinNumber=parseInt(document.getElementById("pin").value)
//     let lastMoney=parseInt(document.getElementById("span").innerText) 
//     const pinNumber=847986;
//     if(bankNumber.length!=11){
//         alert("Invalid account number")
//         return
//     }
//     if(getpinNumber!==pinNumber){
//         alert("wrong pin")
//     }
//     let totalMoney=lastMoney+moneyAdd
//     document.getElementById("span").innerText=totalMoney
//     document.getElementById("acount-number").value=""
//     document.getElementById("money-add").value=""
//     document.getElementById("pin").value=""
//     document.getElementById("bank").value ="Select A Bank"
// })











// login out
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="./index.html"
})