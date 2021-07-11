// ABRIR E FECHAR O MODAL
function iniciaModal(){
    const modal = document.getElementById('modal-container')
    modal.style.display = "block"
}

function fechaModal(){
    const modal = document.getElementById('modal-container')
    const botaoAplicar = document.getElementById('aplicar')
    window.onclick = (evento) => { 
        if((evento.target == modal) || (evento.target == botaoAplicar)){ 
            modal.style.display = "none"
        }
    }
}


// DARK E LIGHT MODE
/* 
eu tentei usar cookies só que não tava indo, 
ai eu fui pesquisar se tinha algum outro jeito de salvar e
encontrei o local storage...
*/ 
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




