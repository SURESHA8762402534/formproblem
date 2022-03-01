
const username = document.getElementById("username");
const email   = document.querySelector("#email");

const mobile = document.getElementById("mobile");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");



function checkData() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const mobileValue = mobile.value;
    const pass1Value = pass1.value;
    const pass2Value = pass2.value;

    if(usernameValue === ""){
        alert("enter user name")
    }else{
        console.log(usernameValue)
    }

    if(emailValue === "") {
        alert("enter email")
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        alert("email pattern is not matching")
    }else{
        console.log(emailValue)
    }

    if(mobileValue === ""){
        alert("enter mobile number")
    }else{
        console.log(mobileValue)
    }

    if(pass1Value === ""){
        alert("enetr pass word")
    }else{
        console.log('pass1')
    }

    if(pass1Value != pass2Value){
        alert('password not matching')
    }else{
        console.log(pass2)
    }
}

document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();
    checkData();
});
