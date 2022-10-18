//Formulário//
const myForm = document.querySelector('#my-form')

//===================CAMPOS-DE-IMPUT===========================//
const numberInputOne = document.querySelector('#number-input-one')
const numberInputTwo = document.querySelector('#number-input-two')
const numberInputThree = document.querySelector('#number-input-three')
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
const numberCardThree = document.querySelector('.number-card-three')
const numberCardFour = document.querySelector('.number-card-four')

//--Nome-titular---//
const nameCard = document.querySelector('.name-card')

//--Validade---//
const validityCard = document.querySelector('.validity-card')

//--CVC-card--//
const cvcCard = document.querySelector('.cvc-card')

//======================Eventos===========================//

buttonForm.addEventListener('click', event => {
  event.preventDefault()

  const nameValue = nameInput.value
  const numberValue = numberInputTwo.valeu

  if (nameValue === '' || numberValue === '') {
    messageError.textContent = 'Todos os campos tem que ser preenchidos'
    messageError.classList = 'error-mensage'
  }

  addContent()
  clearAll()
})

//=======FUNÇÕES=======//
const addContent = () => {
  numberCardOne.textContent = numberInputOne.value
  numberCardTwo.textContent = numberInputTwo.value
  numberCardThree.textContent = numberInputThree.valeu
  numberCardFour.textContent = numberInputFour.value

  //--Nome-titular---//
  nameCard.textContent = nameInput.value

  //--Validade---//
  validityCard.textContent = validityinput.value

  //--CVC-card--//
  cvcCard.textContent = cvcInput.value
}

const clearAll = () => {
  numberInputOne.value = ''
  numberInputTwo.value = ''
  numberInputThree.valeu = ''
  numberInputFour.value = ''

  //--Nome-titular---//
  nameInput.value = ''

  //--Validade---//
  validityinput.value = ''

  //--CVC-card--//
  cvcInput.value = ''
}
