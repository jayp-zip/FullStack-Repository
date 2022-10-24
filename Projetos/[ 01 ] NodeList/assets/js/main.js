const paragrafos = document.querySelector('.paragrafos')
const test = paragrafos.querySelectorAll('p')
const estiliBody = getComputedStyle(document.body)

const backgroundColorBody = estiliBody.backgroundColor

for (let i of test){
  i.style.backgroundColor = "#2c2c2c"
}