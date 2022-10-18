//Formulário//
const myForm = document.querySelector('#my-form')

//===================CAMPOS-DE-IMPUT===========================//
const numberInputOne = document.querySelector('#number-input-one')
const numberInputTwo = document.querySelector('#number-input-two')
const numberInputThree = document.querySelector('#number-input-Three')
const numberInputFour = document.querySelector('#number-input-four')

const nameInput = document.querySelector('#name-input')
const validityinput = document.querySelector('#validity-input')
const cvcInput = document.querySelector('#cvc-input')
const messageError = document.querySelector('.msg')
//button//
const buttonForm = document.querySelector('#submit-button')

//===================CAMPOS-DO-CARTÃO=================//

//--Números-impresso-no-Cartão
const numberCardOne = document.querySelector('.number-card-one')
const numberCardTwo = document.querySelector('.number-card-two')
const numberCardTrhee = document.querySelector('.number-card-three')
const numberCardFour = document.querySelector('.number-card-Four')

//--Nome-titular---//
const nameCard = document.querySelector('.name-card')

//--Validade---//
const validityCard = document.querySelector('.validity-card')

//--CVC-card--//
const cvcCard = document.querySelector('.cvc-card')

//======================Eventos===========================//

buttonForm.addEventListener('click', event => {
  alert('olá')
  event.preventDefault()

  const numberValeu = numberInput.value
  const nameValue = numberInput.value
  const validityValue = validityinput.value
  const cvcValue = cvcInput.value

  if (numberValeu === '' || nameValue === '') {
    messageError.textContent = 'Todos os campos são obrigatórios!'
    messageError.classList = 'error-mensage'
    return
  }
})
