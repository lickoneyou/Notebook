const btn = document.querySelector('.btn')
const macroInput = document.querySelector('.macroInput')
const macroContainer = document.querySelector('.macroContainer')

const draw = () => {
  macroContainer.innerHTML = ''
  if (!localStorage.getItem('macro'))
    localStorage.setItem('macro', JSON.stringify([]))
  const data = JSON.parse(localStorage.getItem('macro'))
  data.forEach((el) => {
    const div = document.createElement('div')
    macroContainer.appendChild(div)
    div.classList.add('macro')
    const p = document.createElement('p')
    p.classList.add('macroText')
    div.appendChild(p)
    p.textContent = el
    p.addEventListener('click', () => {
      const textarea = document.createElement('textarea')
      document.body.append(textarea)
      textarea.value = p.textContent
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    })
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', () => deleteFn(div, p))
    div.appendChild(deleteBtn)
  })
}

const deleteFn = (el, elText) => {
  const data = JSON.parse(localStorage.getItem('macro')).filter(
    (elem) => elem != elText.textContent,
  )
  localStorage.setItem('macro', JSON.stringify(data))
  el.remove()
}

const addMacro = () => {
  if (macroInput.value) {
    if (!localStorage.getItem('macro'))
      localStorage.setItem('macro', JSON.stringify([]))
    const data = JSON.parse(localStorage.getItem('macro'))
    data.push(macroInput.value)
    localStorage.setItem('macro', JSON.stringify(data))
    draw()
  }
  macroInput.value = ''
}

draw()

btn.addEventListener('click', addMacro)
