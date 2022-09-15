const login = document.querySelector("input#login")
const passwd = document.querySelector("input#passwd")
const errorLogin = document.querySelector(".login-error-name")
const errorPasswd = document.querySelector(".login-error-passwd")

let ForbiddenSigns = [":", ";", " ", "-", "=", "+", "{", "}", "[", "]", "/", "\\", "|", "*", "@", "~"]

login.addEventListener("focusout", (e)=>{
    let userInput = login.value.toLocaleLowerCase().split("")

    try {
        if(userInput.length<=3 || userInput>=32) {
            throw 'To short input'
        }
        userInput.forEach((x)=>{
            ForbiddenSigns.forEach((sign)=>{
                if(sign==x) throw 'Forbidden sign used'
            })
        })
        login.style.borderColor = "green"
        errorLogin.style.display = "none"
    }
    catch(error) {
        login.style.borderColor = "red"
        errorLogin.innerHTML = error
        errorLogin.style.display = "inline"
    }
})

passwd.addEventListener("focusout", (e)=>{
    let userInput = login.value.toLocaleLowerCase().split("")

    try {
        if(userInput.length<=3 || userInput>=32) {
            throw 'To short input'
        }
        passwd.style.borderColor = "green"
        errorPasswd.style.display = "none"
    }
    catch(error) {
        passwd.style.borderColor = "red"
        errorPasswd.innerHTML = error
        errorPasswd.style.display = "inline"
    }
})
