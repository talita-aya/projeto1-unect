const limpe = document.getElementById('limpar')
const aplique = document.getElementById('aplicar')

limpe.addEventListener('click', 'limpar()')
aplique.addEventListener("click", 'aplicar()')

function limpar(){
    document.body.style.background = null
}

function aplicar(){
    var link = document.getElementById("linkWallpaper").value
    if(link.length == 0){
        document.body.style.background = null
    }else{
        document.body.style.background = "url("+link+") no-repeat"
        document.body.style.backgroundSize = "100%"
    }
}
