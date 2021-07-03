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