//Button
let signinButton = document.getElementById("active-button");
let registerButton = document.getElementById("non-active-button")
let submitButton = document.getElementById("submit");
let logoutButton = document.getElementById("out");

//ini buat selector job
let formSubmit = document.getElementById("select-form-custom");

//manipulasi Text
let textProp = document.getElementById("text-prop");
let textPropB = document.getElementById("text-propB");
let textP = document.getElementById("text-p");
let loginElse = document.getElementById("login-else");
let loginTeks = document.getElementById("login-teks");
let formCustom = document.getElementById("form-custom")
let sectionCustom = document.getElementById("section-custom");
let roles = document.getElementById("roles");
let nama = document.getElementById("nama");

//forminput
let inputUser = document.getElementById("floatingInput");
let inputPassword = document.getElementById("floatingPassword");
let inputRole = document.getElementById("floatingSelect");



//Fungsi Sign in - Register
function active(){
    registerButton.classList.remove("font-bold", "nav-link-active");
    signinButton.classList.remove("btn","btn-primary","rounded-pill","px-3","py-2" ,"register-button","font-bold");
    registerButton.classList.add("btn","btn-primary","rounded-pill","px-3","py-2" ,"register-button","font-bold");
    signinButton.classList.add("font-bold", "nav-link-active");

    textProp.textContent = "Sign In To";
    textPropB.textContent = "Recharge Direct";
    textP.innerHTML = "if you don't an account<br /> you can <a href='#' onclick='nonActive()'>Register here!</a>"
    submitButton.textContent = "Sign in";
    formSubmit.classList.add("d-none");
}
function nonActive(){
    signinButton.classList.remove("font-bold", "nav-link-active");
    registerButton.classList.remove("btn","btn-primary","rounded-pill","px-3","py-2" ,"register-button","font-bold");
    signinButton.classList.add("btn","btn-primary","rounded-pill","px-3","py-2" ,"register-button","font-bold");
    registerButton.classList.add("font-bold", "nav-link-active");

    textProp.textContent = "Register To";
    textPropB.textContent = "Join With Us";
    textP.innerHTML = "We provide various IT needs<br/>especially for <span style='color: #4461F2;'>Task Jockeys</span>"
    submitButton.textContent = "Register";
    formSubmit.classList.remove("d-none");
    loginElse.innerHTML = "";
}

function klik(){
    if (submitButton.textContent == "Register"){
        
        if(inputUser.value == "" || inputRole.value == "" || inputRole == ""){
            alert("The data is not complete, please complete it first");
        }else{
            localStorage.setItem("User", inputUser.value);
            localStorage.setItem("Password", inputPassword.value);
            localStorage.setItem("Role", inputRole.value);
            alert("Successful registration!")
            inputUser.value = "";
            inputPassword.value = "";
            inputRole.value = "Register as";
        }
    }else if(submitButton.textContent == "Sign in" || submitButton){
        if(inputUser.value == "admin" && inputPassword.value == "admin"){
            localStorage.setItem("Validasi",  Date.now());
            localStorage.setItem("User", "Lord");
            localStorage.setItem("Password", "admin");
            localStorage.setItem("Role", "Admin")
            loginElse.innerHTML = "";
            formCustom.classList.add("d-none");
            sectionCustom.classList.add("d-none");

            registerButton.classList.add("d-none")
            signinButton.classList.add("d-none")

            nama.innerText = localStorage.getItem("User")+"!";
            roles.innerText = localStorage.getItem("Role");
            logoutButton.classList.remove("d-none");
            loginTeks.classList.remove("d-none");

        }else if(inputUser.value == localStorage.getItem("User") && inputPassword.value == localStorage.getItem("Password") && localStorage.getItem("Role")){
            localStorage.setItem("Validasi",  Date.now());
            loginElse.innerHTML = "";
            formCustom.classList.add("d-none");
            sectionCustom.classList.add("d-none");

            registerButton.classList.add("d-none")
            signinButton.classList.add("d-none")

            nama.innerText = localStorage.getItem("User")+"!";
            roles.innerText = localStorage.getItem("Role");
            logoutButton.classList.remove("d-none");
            loginTeks.classList.remove("d-none");
        }else{
            loginElse.innerHTML = "Data does not match";
        }
    }
}

function logout(){
    localStorage.clear();
    location.reload();
}

if(localStorage.getItem("Validasi")){
    loginElse.innerHTML = "";
    formCustom.classList.add("d-none");
    sectionCustom.classList.add("d-none");

    registerButton.classList.add("d-none")
    signinButton.classList.add("d-none")

    nama.innerText = localStorage.getItem("User")+"!";
    roles.innerText = localStorage.getItem("Role");
    logoutButton.classList.remove("d-none");
    loginTeks.classList.remove("d-none");
}