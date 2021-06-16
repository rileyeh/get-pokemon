const form = document.querySelector('form')
const input = document.querySelector('input')
const section = document.querySelector('section')

function submitHandler(e) {
    e.preventDefault()
    if (input.value < 1 || input.value > 898) {
        alert('number must be 1-898')
        input.value = ''
        return
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${input.value}/`) 
        .then(res => {
            const {name, base_experience: xp, sprites} = res.data
            const card = document.createElement('div')
            card.innerHTML = `<img src="${sprites.front_default}" alt=${name}/>
            <h4>${name}</h4>
            <p>XP: ${xp}</p>`
            section.appendChild(card)
            input.value = ''
        })
}

form.addEventListener('submit', submitHandler)