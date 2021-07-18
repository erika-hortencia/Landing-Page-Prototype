const input = document.querySelector('input')
const form = document.querySelector('form')
const timeMinutes = document.getElementById('minutes')
const timeSeconds = document.getElementById('seconds')
const subscribed = document.querySelector('.subscribed')

function newSubscribe(){
    if(input.value !== null || input.value !== ''){
        localStorage.setItem('maratona_dev:new-subscribe', 
        JSON.stringify(input.value))
        if(localStorage.getItem('maratona_dev:new-subscribe')){
            subscribed.innerText = 'Sua inscrição foi realizada com sucesso!'
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    newSubscribe()
})
