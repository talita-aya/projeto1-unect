window.onload = carregar

const botao = document.getElementById('item')
botao.addEventListener('click', 'item()')

function aceitar(){
    let data = new Date()
    let ano = 3000
    data.setTime(data.getTime() + (ano*365*24*60*60*1000))

    document.cookie = `cookie=cookiesAtivado; expires=${data.toUTCString()}`

    carregar()
}

function carregar(){
    let cookie
    try {
        cookie = document.cookie.split('; ').find(elemento => elemento.startsWith('cookie=')).split('=')[1]
    } catch{}
    const cookieBox = document.getElementsByClassName('wrapper')[0]
    if(cookie == "cookiesAtivado"){
        cookieBox.classList.add("hide")
    }else{
        cookieBox.classList.remove("hide")
    }
}
