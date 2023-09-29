import './style.css'
import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome} from './scripts/functions'
import logoBatoi from '/logoBatoi.png'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logoBatoi}" class="logo" alt="Vite logo" />
    </a>
    <h1>FraseVite Nuria</h1>
    <p class="read-the-docs">
      Abra la consola con F12
    </p>
  </div>
`
let cadena = prompt("Introduce una frase")

console.log("Frase: " + cadena)
console.log(letters(cadena) + " letras y " + words(cadena) + " palabras")
console.log(upperString(cadena))
console.log(titleString(cadena))
console.log(backwardsLetters(cadena))
console.log(backwardsWords(cadena))

if(palindrome(cadena)) {
    console.log("Sí es un palíndromo")
} else {
    console.log("No es un palíndromo")
}
