function lista(){
    const input = document.getElementById('input')
    const valorInput = input.value 
    if(valorInput.length == 0){
        window.alert("Nenhuma tarefa foi digitada, tente novamente")
    }
    else {
        input.value = ""

        const artigo = document.getElementById('tarefas')
        const artigo2 = document.getElementById('tarefas2')
        const artigo3 = document.getElementById('tarefas3')

        const div = document.createElement('div')
        artigo.appendChild(div)

        const p = document.createElement('p')
        p.innerHTML = valorInput
        div.appendChild(p)


        //DELETE
        const span = document.createElement('img')
        span.setAttribute('src', 'img/delete.png')
        div.appendChild(span)

        //NEXT
        const span2 = document.createElement('img')
        span2.setAttribute('src', 'img/next.png')
        div.appendChild(span2)

        //DONE
        const span3 = document.createElement('img')
        span3.setAttribute('src', 'img/done.png')

        //RESTORE
        const span4 = document.createElement('img')
        span4.setAttribute('src','img/restore.png')


        

        span.addEventListener("click", () => { //apagar div
            div.remove()
        })

        span2.addEventListener("click", 
            window.onclick = (evento) => {
                if(evento.target == span2){
                    div.appendChild(span3)
                    artigo2.appendChild(div)
                    span2.remove()
                }
            }
        )
        
        span3.addEventListener("click", 
            window.onclick = (evento) => {
                if(evento.target == span3){
                    div.appendChild(span4)
                    artigo3.appendChild(div)
                    span3.remove()
                }
            }
        )

        span4.addEventListener("click",
            window.onclick = (evento) => {
                if(evento.target == span4){
                    div.append(span2)
                    artigo.appendChild(div)
                    span4.remove()
                }
            }
        )



    }

}
