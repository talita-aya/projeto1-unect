// MUDANÇA DO PLANO DE FUNDO

const limpe = document.getElementById('limpar')
const aplique = document.getElementById('aplicar')

limpe.addEventListener('click', 'limpar()')
aplique.addEventListener("click", 'aplicar()')


function limpar(){
    document.body.style.background = null
    var link = document.getElementById("linkWallpaper")
    link.value = ""
}

function aplicar(){
    var link = document.getElementById("linkWallpaper").value
    if(link.length == 0){
        document.body.style.background = null
    }else{
        document.body.style.background = "url("+link+") no-repeat"
        document.body.style.backgroundSize = "cover"
    }
}


