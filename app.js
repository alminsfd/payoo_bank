// login button funcbnality 
let btnLogin=document.getElementById("btn-login")
btnLogin.addEventListener("click",function(event){
    event.preventDefault()
    const mobileNumber=1863769996;
    const pinNumber=847986;
    let loginNumber=document.getElementById("number").value
    let loginPin=document.getElementById("pin").value
    let loginNumberConvert=parseInt(loginNumber)
    let loginPinConvert=parseInt(loginPin)
    if(loginNumberConvert===mobileNumber&&loginPinConvert===pinNumber){
        console.log("all matched")
    }else{
        console.log("invalid")
    }
})
