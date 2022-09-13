const html = document.querySelector("html")
console.log(html)
const login = document.querySelector(".login-input-name")
console.log(login)
const passwd = document.querySelector(".login-input-passwd")

login.addEventListener("focusout", (e)=>{
    console.log("name :c")
})