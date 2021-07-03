function lista(){
    const input = document.getElementById('input')
    const valorInput = input.value 
    input.value = ""

    const artigo = document.getElementById('tarefas')


    const div = document.createElement('div')
    artigo.appendChild(div)

    const p = document.createElement('p')
    p.innerHTML = valorInput
    div.appendChild(p)

    //DELETE
    const span = document.createElement('img')
    span.setAttribute('src', 'img/delete.png')
    div.appendChild(span)

    span.addEventListener("click", () => { //apagar div
        div.remove()
    })

}