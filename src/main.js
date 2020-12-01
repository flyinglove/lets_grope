import "./style/main.scss"

import Img from './assets/timg.jpeg'

import { log } from './components'
console.log(55)

const foo = () => {
    console.log(333)
}
foo()
log('test')
log('233')
let img = new Image()
img.src = Img
document.body.appendChild(img)
