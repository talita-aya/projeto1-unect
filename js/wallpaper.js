// MUDANÇA DO PLANO DE FUNDO

window.onload = function(){
    url = document.cookie.split('; ').find(elemento => elemento.startsWith('link='))
    if(url == 'link='){
        refresh2()
    }else{
        refresh()
    }
}

const limpe = document.getElementById('limpar')
const aplique = document.getElementById('aplicar')

limpe.addEventListener('click', 'limpar()')
aplique.addEventListener("click", 'aplicar()')

function limpar(){
    var fundo = document.body.style.background
    document.body.style.background = null

    let data = new Date()
    let minutos = 1
    data.setTime(data.getTime() + (minutos*1000*60))

    document.cookie = `fundo=${document.body.style.background}; expires=${data.toUTCString()}`
    alert('Pressione "Aplicar" se realmente deseja retirar o plano de fundo')
    refresh2()
}

function refresh2(){
    let wallp
    try {
        wallp = document.cookie.split('; ').find(elemento => elemento.startsWith('fundo=')).split('=')[1]
    } catch{}
    if(wallp){
        document.body.style.background = "url("+`${wallp}`+") no-repeat"
    }
    var link = document.getElementById("linkWallpaper")
    link.value = ""
}


function aplicar(){
    var link = document.getElementById("linkWallpaper").value

    let data = new Date()
    let minutos = 1
    data.setTime(data.getTime() + (minutos*1000*60))

    document.cookie = `link=${link}; expires=${data.toUTCString()}`

    refresh()
}

function refresh(){
    let url
    try {
        url = document.cookie.split('; ').find(elemento => elemento.startsWith('link=')).split('=')[1]
    } catch{}
    
    if(url.length == 0){
        document.body.style.background = null
    }else{
        document.body.style.background = "url("+`${url}`+") no-repeat"
        document.body.style.backgroundSize = "cover"
    }  
}
