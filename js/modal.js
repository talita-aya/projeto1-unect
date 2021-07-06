function iniciaModal(){
    const modal = document.getElementById('modal-container')
    modal.style.display = "block"
}

function fechaModal(){
    const modal = document.getElementById('modal-container')
    window.onclick = (evento) => { //arow function vai ser chamada sempre que clicar na tela
        if(evento.target == modal){ //target = só se clicar naquela parte, no caso na parte escura do modal, background
            modal.style.display = "none"
        }
    }
}

// DARK E LIGHT MODE
var checkbox = document.getElementById('checkbox')
if(localStorage.getItem("mode") == "dark"){
    darkmode()
}else{
    nodark()
}

checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        darkmode()
    }else{
        nodark()
    }
})

function darkmode(){
    document.body.classList.toggle("dark")
    checkbox.checked = true
    localStorage.setItem("mode", "dark")
}

function nodark(){
    document.body.classList.remove("dark")
    checkbox.checked = false
    localStorage.setItem("mode", "light")
}




