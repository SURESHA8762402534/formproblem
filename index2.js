
const username = document.getElementById("username");
var email   = document.getElementById("email").value;
console.log(email)
const mobile = document.getElementById("mobile");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");



function checkData() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const mobileValue = mobile.value;
    const pass1Value = pass1.value;
    const pass2Value = pass2.value;

    if (usernameValue === "" || usernameValue.length < 4) {
        return user()
   
    }
     else {
        let hold = document.getElementById('hold');
        hold.classList.add('show');
        let para = document.createElement('p');
        let node = document.createTextNode(usernameValue);
        para.appendChild(node);
        para.classList.add('para');
        // para.innerText = usernameValue;
        hold.appendChild(para);
        let container = document.querySelector('.container');
        container.classList.add('hide');
     
    }

    if (emailValue === "") {
        let mail = document.getElementById('email');
       let para = document.createElement('p');
       let node = document.createTextNode("email should not be empty");
       para.appendChild(node);
       para.classList.add('error');
       mail.appendChild(para);
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        let email = document.getElementById('email');
        let para = document.createElement('p');
        let node = document.createTextNode("Please match the pattern");
        para.appendChild(node);
        para.classList.add('error');
        email.appendChild(para);
        console.log(emailValue)
    }
    else {
        let hold = document.getElementById('hold');
        hold.classList.add('show');
        let para = document.createElement('p');
        // let node = document.createTextNode(emailValue);
        // para.appendChild(node);
        para.classList.add('para');
        para.innerHTML = emailValue;
        document.getElementById('hold').appendChild(para);
        let container = document.querySelector('.container');
        container.classList.add('hide');
     
    }

    if (mobileValue == "" ) {
        let mobile = document.getElementById('mobile');
        let para = document.createElement('p');
        let node = document.createTextNode("please enter mobile number");
        para.appendChild(node);
        para.classList.add('error');
        mobile.appendChild(para);
    }
    else {
        let hold = document.getElementById('hold');
        hold.classList.add('show');
        let para = document.createElement('p');
        let node = document.createTextNode(mobileValue);
        para.appendChild(node);
        para.classList.add('para');
        document.getElementById('hold').appendChild(para);
        let container = document.querySelector('.container');
        container.classList.add('hide');
     
    }


    if (pass1Value == "") {
        let pass1 = document.getElementById('pass1');
        let para = document.createElement('p');
        let node = document.createTextNode("password sholud not be empty");
        para.appendChild(node);
        para.classList.add('error');
        pass1.appendChild(para);
    }
    else if(pass1Value.length < 8 ){
        let pass1 = document.getElementById('pass1');
        let para = document.createElement('p');
        let node = document.createTextNode("please match the pattern");
        para.appendChild(node);
        para.classList.add('error');
        pass1.appendChild(para);
    }
     else {
        setSuccess(pass1);
    }


    if (pass2Value == "") {
        let pass2 = document.getElementById('pass2');
        let para = document.createElement('p');
        let node = document.createTextNode("you should confirm password");
        para.appendChild(node);
        para.classList.add('error');
        pass2.appendChild(para);
    }
    else if (pass1Value != pass2Value) {
        let pass2 = document.getElementById('pass2');
        let para = document.createElement('p');
        let node = document.createTextNode("password is not matching");
        para.appendChild(node);
        para.classList.add('error');
        pass2.appendChild(para);
    }
    else {
        setSuccess(pass2);
    }
}

function setSuccess(u) {
    console.log(u)
  
}


function user(){
    let un = document.getElementById('un');
    let para = document.createElement('p');
    let node = document.createTextNode("user name should not be empty");
    para.appendChild(node);
    para.classList.add('error');
    un.appendChild(para);
}

function mail(){
    let email = document.getElementById('email');
    let para = document.createElement('p');
    let node = document.createTextNode("email should not be empty");
    para.appendChild(node);
    para.classList.add('error');
    email.appendChild(para);
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    checkData();
});
