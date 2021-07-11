const cookieContainer = document.querySelector(".cookie-container")
const cookieButton = document.getElementById("aceitar")

cookieButton.addEventListener('click', () => {
    cookieContainer.classList.remove("active")
    localStorage.setItem("cookiesAccepted", "true")
})

setTimeout( () => {
    if(!localStorage.getItem("cookiesAccepted")){
        cookieContainer.classList.add("active")
    }
}, 1)

