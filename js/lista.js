// LISTA DE TAREFAS
/* 
eu não consegui salvar a lista,
tentei tanto com cookies como com o local storage
e não tava indo. 
várias vezes chegava perto de funcioinar, 
mas no final sempre dava algum errinho, 
então eu optei por não colocar do que colocar 
algo que não funcionaria direito
*/


const adicionar = document.getElementById('button')
adicionar.addEventListener('click', 'lista()')

function lista(){
    const input = document.getElementById('input')
    const valorInput = input.value 
    input.value = ""

    // CASO A PESSOA NÃO DIGITE NADA E SOMENTE APERTE O BOTÃO DE ADICIONAR
    if(valorInput.length == 0){
        window.alert("Nenhuma tarefa foi digitada, tente novamente")
    }else {
        const artigo = document.getElementById('tarefas')
        const artigo2 = document.getElementById('tarefas2')
        const artigo3 = document.getElementById('tarefas3')

        // CRIAÇÃO:
        /*
            artigo
                div
                    p
                    span
        */
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

        // SE A PESSOA CLICAR NO DELETE
        span.addEventListener("click", () => { //apagar div
            div.remove()
        })

        // SE CLICAR NA SETINHA PARA MOVER A TAREFA PARA DOING
        span2.addEventListener("click", 
            window.onclick = (evento) => {
                if(evento.target == span2){
                    div.appendChild(span3)
                    artigo2.appendChild(div)
                    span2.remove()
                }
            }
        )
        
        // SE CLICAR PARA MOVER A TAREFA PARA DONE
        span3.addEventListener("click", 
            window.onclick = (evento) => {
                if(evento.target == span3){
                    div.appendChild(span4)
                    artigo3.appendChild(div)
                    span3.remove()
                }
            }
        )

        // SE CLICAR PARA RESTAURAR A TAREFA QUE ESTAVA DADA COMO PRONTA
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
