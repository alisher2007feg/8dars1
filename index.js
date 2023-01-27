const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input')
const elUl = document.querySelector('.ul')
const error =  document.querySelector('.error')
elForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(elInput.value === ''){
        error.classList = 'block text-red-700'
        input.classList =  'border-4 border-red-500 '
    }error.classList = 'hidden'
    const resetLI = document.createElement('li')
    resetLI.classList = ('flex justify-between w-80')
    resetLI.innerHTML = `<h3>${elInput.value}</h3>
    <div>
    <button class="border-2 border-green-600 text-white bg-blue-700 ">Completed</button>
    <button class="border-2 border-red-900 text-white bg-red-700">Delete</button>
    </div>
    `
    elForm.reset()
    elUl.appendChild(resetLI);
})

