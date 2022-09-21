const login = document.querySelector("input#login")
const passwd = document.querySelector("input#passwd")
const errorLogin = document.querySelector(".login-error-name")
const errorPasswd = document.querySelector(".login-error-passwd")
const Submit = document.querySelector("input.login-submit")

let PasswdOK = false, LoginOK = false

let ForbiddenSigns = [":", ";", " ", "-", "=", "+", "{", "}", "[", "]", "/", "\\", "|", "*", "@", "~"]

login.addEventListener("focusout", (e)=>{
    let userName = login.value.toLocaleLowerCase().split("")

    try {
        if(userName.length<=3 || userName.length>=32) {
            throw 'To short input'
        }
        userName.forEach((x)=>{
            ForbiddenSigns.forEach((sign)=>{
                if(sign==x) throw 'Forbidden sign used'
            })
        })
        login.style.borderColor = "green"
        errorLogin.style.display = "none"
        LoginOK = true
    }
    catch(error) {
        login.style.borderColor = "red"
        errorLogin.innerHTML = error
        errorLogin.style.display = "inline"
        LoginOK = false
    }
    CheckAccessToSend()
})

passwd.addEventListener("focusout", (e)=>{
    let userPasswd = passwd.value.toLocaleLowerCase().split("")
    try {
        if(userPasswd.length<=3 || userPasswd.length>=32) {
            throw 'To short input'
        }
        passwd.style.borderColor = "green"
        errorPasswd.style.display = "none"
        PasswdOK = true
    }
    catch(error) {
        passwd.style.borderColor = "red"
        errorPasswd.innerHTML = error
        errorPasswd.style.display = "inline"
        PasswdOK = false
    }
    CheckAccessToSend()
})

function CheckAccessToSend() {
    alert(PasswdOK+" "+LoginOK)
    if(PasswdOK && LoginOK) {
        Submit.removeAttribute("disabled")
    }
    else {
        Submit.setAttribute('disabled', 'disabled')
        Submit.style.borderColor = "#c5c5c5"
    }
}
