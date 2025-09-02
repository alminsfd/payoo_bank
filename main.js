//fix data
const bonuscopens= ["Payo50","Payo100","Payo150","Payo200"]
const bonusAmount=[50,100,150,200]
let transhistry=[]
const pinNumber=847986;


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


//btn of section color change function

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
    btncolorchange(transectionHistory);
    histary=document.getElementById("money-histry")
    histary.innerHTML=""
    
    for(let transobj of transhistry){
        let div=document.createElement("div")
        div.innerHTML=`
        <div  class="flex justify-between items-center mx-5 my-4 border-[#ddd] border-1 p-3 rounded-2xl">
                <div class="flex justify-baseline items-center">
                    <img src="./assets/wallet1.png" class="mx-2 bg-[#0808080d] rounded-full p-2" alt="">
                    <div>
                        <h4 class="text-[#080808b3] text-lg font-semibold">${transobj.type}</h4>
                        <p class="text-[12px] text-[#080808b3]">amount money: ${transobj. amount}</p>
                        <p class="text-[12px] text-[#080808b3]">${transobj.date}</p>
                    </div>
                </div>
                <span><i class="fa-solid fa-ellipsis-vertical text-[#080808b3]"></i></span>
            </div>
           `
       histary.appendChild(div)

    }
    

});

// btn section in form      

let addMoneybtn=document.getElementById("Money-add")
let castoutbtn=document.getElementById("castout-formbtn")
let transferbtn=document.getElementById("transfer-add") 
let getbonusbtn=document.getElementById("getbonus-formbtn")
let paybillbtn=document.getElementById("paybill-add")

//get input value function
function getinputvalue(id){
    return parseInt(document.getElementById(id).value)
}
//last money function
function lastmoney(){
    return parseInt(document.getElementById("span").innerText)
}
//set money function
function setmoney(value){
    return document.getElementById("span").innerText=value
}
// add money function
addMoneybtn.addEventListener("click",function(e){
    e.preventDefault();
    let bank=document.getElementById("bank").value
    if(!bank){
        alert("Selec a bank first")
        return
    }
    invalidValue("money-add")
    if(getinputvalue("pin")!==pinNumber){
        alert("Wrong Pin Number")
        return
    }
    else if(document.getElementById("acount-number").value.length!=11){
        alert("Invalid Account Number") 
        return
    }
     const totalmoney=lastmoney()+getinputvalue("money-add")
     setmoney(totalmoney)
     let data={
        type:"Add Money",
        amount:getinputvalue("money-add"),
        date:new Date().toLocaleString()
    }
     transhistry.push(data)
     


})
//substruct money function
function pinvalidation(id){
if(getinputvalue(id)!==pinNumber){
        alert("Wrong Pin Number")
        return true
    }
    return false
} 

function digitvalidation(id){
    let validationvalue=document.getElementById(id).value
    if(validationvalue.length!=11){
        alert("Invalid Account Number") 
        return true
    }

    return false
}

function moneylost(totalmoney){
    if(totalmoney<0){
        alert("Insufficient Balance")
        return true
    }
    return false
}

function invalidValue(id){
  let  valuer= parseInt(document.getElementById(id).value)
  if(valuer<=0){
    alert("Invalid Amount.")
    return true
  }

  return false
}


// cashout money function

castoutbtn.addEventListener("click",function(e){
    e.preventDefault();
    
    if(invalidValue("money-out")){
        return
    }
    if(pinvalidation("cash-pin")){
        return
    }
    if(digitvalidation("money-chori")){
        return
    }
    const totalmoney=lastmoney()-getinputvalue("money-out")
    if(moneylost(totalmoney)){
        return
    }
    setmoney(totalmoney)
    let data={
        type:"Cash Out",
        amount:getinputvalue("money-out"),
        date:new Date().toLocaleString()
    }
     transhistry.push(data)
})

// transfer money function
transferbtn.addEventListener("click",function(e){   
    e.preventDefault();
    if(invalidValue("money-transfer")){
        return
    }
    if(pinvalidation("trans-pin")){
        return
    }
    if(digitvalidation("money-go")){
        return
    }
    const totalmoney=lastmoney()-getinputvalue("money-transfer")
    if(moneylost(totalmoney)){
        return
    }
    setmoney(totalmoney)
    let data={
        type:"Transfer Money",
        amount:getinputvalue("money-transfer"),
        date:new Date().toLocaleString()
    }
     transhistry.push(data)
})
//get bonus function
getbonusbtn.addEventListener("click",function(e){
    e.preventDefault();
    pinvalidation("pay-pin");
    digitvalidation("bill-give");
    const getcoupon=document.getElementById("get-bonus").value
    const couponindex=bonuscopens.indexOf(getcoupon)
    if(couponindex!==-1){
        const totalmoney=lastmoney()+bonusAmount[couponindex]
        setmoney(totalmoney)
    }
    else{
        alert("Invalid Coupon")
    }
    let data={
        type:"Get Bonus",
        amount:couponindex!==-1?bonusAmount[couponindex]:0,
        date:new Date().toLocaleString()
    }
    transhistry.push(data)
    
})
//pay bill function
paybillbtn.addEventListener("click",function(e){
    e.preventDefault();
    let select=document.getElementById("select").value
    if(!select){
        alert("Please select the Bill type")
        return
    }
     if(invalidValue("money-pay")){
        return
    }
    if(pinvalidation("pay-pin")){
        return
    }
    if(digitvalidation("bill-give")){
        return
    }
    const totalmoney=lastmoney()-getinputvalue("money-pay")
    if(moneylost(totalmoney)){
        return
    }
    setmoney(totalmoney)
    let data={
        type:"Pay Bill",
        amount:getinputvalue("money-pay"),
        date:new Date().toLocaleString()
    }
    transhistry.push(data)
})

// login out
document.getElementById("log-out").addEventListener("click",function(){
    window.location.href="./index.html"
})