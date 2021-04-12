//JavaScript se aplica mais a eventos, quando clica em sessões que vão criar uma nova dentro dela mesmo
//Function cria a funcionalidade do evento
//console.log = colocar na aba consol, enviar e excutar
//Node a tag e estruras html
//DOM Aprofunda javascript

document.querySelector("#add-time")
.addEventListener('click', cloneField) //Ouvir evento


function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false
    const fields = newFieldContainer.querySelectorAll('input') //Limpar os Campos
    fields.forEach(function(field) {
        console.log(field)


    })//Pega o Item de cada posição e limpa os campos
    

    document.querySelector('#schedule-items').appendChild(newFieldContainer)//pega um quadro e escolhe um elemento dele para excutar
}


