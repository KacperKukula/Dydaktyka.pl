const login = document.querySelector("input#login")
const passwd = document.querySelector("input#passwd")

login.addEventListener("focusout", ValidateInput())

function ValidateInput() {
    login.value.split("")
    
}