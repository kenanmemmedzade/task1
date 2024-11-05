function addToDisplay (value) {
  document.calculator.display.value += value
}

const lingmode = document.querySelector('.lingmode')

const img = document.querySelector('.img')

const megi = function () {

   
  if (lingmode.style.backgroundColor === 'black') {
    lingmode.style.backgroundColor = 'white';
    img.style.backgroundColor = 'black';
  } else {
    lingmode.style.backgroundColor = 'black';
    img.style.backgroundColor = 'white';
  }
  

}

img.addEventListener('click', megi)
