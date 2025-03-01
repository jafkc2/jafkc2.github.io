import './style.css'

const html = (strings: TemplateStringsArray, ...values: unknown[]): string => {
  return String.raw({ raw: strings }, ...values);
};

const body = html`
<div>
  <header class="text-center py-10">
    <h1 class="text-4xl font-bold">Projetos de JafKC</h1>
    <p class="text-gray-400 mt-2">Seja bem-vindo. Este é um site que eu desenvolvi para mostrar os meus projetos!</p>
  </header>

  <section class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-surface p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold">Site de showcase</h2>
        <p class="text-gray-400 mt-2">Este site que você está vendo 🙂. Site estático simples feito com HTML, TailwindCSS e Typescript.</p>
        <a href="../projetos/showcase" class="text-blue-400 hover:underline mt-4 block">Ver projeto</a>
    </div>
    <div class="bg-surface p-6 rounded-xl shadow-lg">
      <h2 class="text-xl font-semibold">KC Overlay</h2>
      <p class="text-gray-400 mt-2">Ferramenta para jogadores do servidor de Minecraft MushMC conseguirem ver as estatísticas dos jogadores.</p>
      <a href="../projetos/kc-overlay" class="text-blue-400 hover:underline mt-4 block">Ver projeto</a>
    </div>
    <div class="bg-surface p-6 rounded-xl shadow-lg">
      <h2 class="text-xl font-semibold">Minelander</h2>
      <p class="text-gray-400 mt-2">Launcher de Minecraft feito em Rust. Possui diversas funcionalidades interessantes.</p>
      <a href="../projetos/minelander" class="text-blue-400 hover:underline mt-4 block">Ver projeto</a>
    </div>
  </section>

  <footer class="text-center py-10 mt-10 text-gray-500">
    <a href ="https://github.com/jafkc2" target="_black" class="text-mylightblue">
      Meu Github
    </a>
    <p>Email: jaf222006@gmail.com</p>
    <p>Discord: .jafkc</p>
  </footer>
</div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = body
