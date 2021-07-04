const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', () => {
    //mudar tema
    document.body.classList.toggle('dark')
})

function aplicar(){
    const aplique = document.getElementById('aplicar')
    var link = document.getElementById("linkWallpaper").value
    aplique.addEventListener("click", () => {
        if(link.length == 0){
            document.body.style.background = null
        }else{
            document.body.style.background = "url("+link+") no-repeat"
            document.body.style.backgroundSize = "100%"
        }
    })
}

function limpar(){
    const limpe = document.getElementById('limpar')
    limpe.addEventListener('click', () => {
        document.body.style.background = null
    })
}