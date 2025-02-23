import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Projetos</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="introduction">
      Seja bem-vindo. Este é um site que eu desenvolvi para mostrar meus projetos.
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
