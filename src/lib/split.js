export function splitWords(element) {
  const text = element.textContent.trim()
  const words = text.split(/\s+/)
  element.textContent = ''

  return words.map((word, index) => {
    const mask = document.createElement('span')
    mask.style.display = 'inline-block'
    mask.style.overflow = 'hidden'
    mask.style.verticalAlign = 'bottom'

    const inner = document.createElement('span')
    inner.className = 'split-word'
    inner.textContent = word
    mask.appendChild(inner)
    element.appendChild(mask)

    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(' '))
    }

    return inner
  })
}

export function splitChars(element) {
  const text = element.textContent
  element.textContent = ''
  return [...text].map((char) => {
    const span = document.createElement('span')
    span.className = 'split-char'
    span.innerHTML = char === ' ' ? '&nbsp;' : char
    element.appendChild(span)
    return span
  })
}
