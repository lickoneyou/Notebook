const btn = document.querySelector('.btn')
const macroInput = document.querySelector('.macroInput')
const macroContainer = document.querySelector('.macroContainer')

const addMacro = () => {
  const div = document.createElement('div')
  div.classList.add('macro')
  macroContainer.appendChild(div)
  const p = document.createElement('p')
  p.classList.add('macroText')
  div.appendChild(p)
  p.textContent = macroInput.value
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('deleteBtn')
  deleteBtn.textContent = 'X'
  deleteBtn.addEventListener('click', () => div.remove())
  div.appendChild(deleteBtn)
}

btn.addEventListener('click', addMacro)
