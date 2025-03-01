import './style.css'

const html = (strings: TemplateStringsArray, ...values: unknown[]): string => {
    return String.raw({ raw: strings }, ...values);
  };

const path = window.location.pathname;
const name = path.substring(path.lastIndexOf("/") + 1) || "index.html"

interface ReleaseJson{
  assets: Asset[]
}
interface Asset{
  name: string,
  browser_download_url: string,
}

let project_title! : string;
let description! : string;
let detailed_description! : string;
let github! : string;
let image_path!: string;

let windows_download_url = "";
let linux_download_url = "";

async function get_releases_url(url: string){
  const response = await fetch(url, {
    method: "GET",
    headers: {
          "Content-Type": "application/json",
          "Authorization": "Showcase Site"
    }
  });

  const last_release_data : ReleaseJson = await response.json();

  for (const asset of last_release_data.assets){
    if (asset.name.toLowerCase().includes("windows")){
      windows_download_url = asset.browser_download_url;
    } else if (asset.name.toLowerCase().includes("linux")){
      linux_download_url = asset.browser_download_url;
    }
  }
}

switch (name){
    case "minelander":
      project_title = "Minelander";
      description = "Launcher de Minecraft simples e rápido. Tem todas as funções importantes do launcher original e muito mais.";
      detailed_description = html`
        <div>
          <h2 class ="text-3xl font-bold">Descrição detalhada</h2>
          <p class="mt-2">O Minelander é um projeto que eu iniciei para aprender a linguagem de programação Rust e também para criar um launcher de Minecraft completo, simples, extremamente rápido e fácil de usar. O Minelander conta com um sistema de instâncias que facilita trocar entre modpacks e versões sem bagunçar o arquivo de configurações. Ele também tenta otimizar o jogo usando uma versão mais nova do Java e configurações otimizadas.</p>
        </div>
      `
      github = "https://github.com/jafkc2/minelander"
      image_path = "/minelander.jpg"
      await get_releases_url("https://api.github.com/repos/jafkc2/minelander/releases/latest");
      break;
    case "kc-overlay":
      project_title = "KC Overlay";
      description = "Overlay para ver os stats dos jogadores que estão na mesma partida que você no Bedwars. Também serve para identificar jogadores usando /nick, snipers e possíveis cheaters, além de outras funcionalidades legais!";

      detailed_description = html`
      <div>
        <h2 class ="text-3xl font-bold">Como usar</h2>
        <p class="mt-2">Abra o KC Overlay e digite '/jogando' no chat do Mush. É extremamente simples!</p>

        <h2 class ="text-3xl font-bold">Comunidade</h2>
        <p class="mt-2">Possui alguma dúvida, sugestão, ou simplesmente quer saber das novidades? Entre no nosso servidor do Discord</p>
        <a href ="https://github.com/jafkc2" target="_black" class="text-mylightblue">
          Clique para entrar no Discord!
        </a>

        <h2 class ="text-3xl font-bold">Dúvidas frequentes</h2>
        <h2 class ="text-1xl font-bold">É possível levar ban por usar o KC Overlay?</h2>
        <p class="mt-2">Não, o KC Overlay não modifica o jogo de nenhuma forma. Além disso, ele só mostra os stats dos jogadores, que não é proibido pelo Mush.
        </p>
        <h2 class ="text-1xl font-bold">É seguro?</h2>
        <p class="mt-2"> Sim. O KC Overlay é um programa de código aberto, o que significa que a programação dele está disponível publicamente. Nenhuma pessoa com conhecimento em programação vai conseguir encontrar algo malicioso no código do KC Overlay.
        </p>
        <h2 class ="text-1xl font-bold">Por que aparece uma tela dizendo "O Windows protegeu seu computador" quando tento executar?</h2>
        <p class="mt-2">Isso acontece porque o KC Overlay não possui um certificado para ser considerado seguro pelo Windows. Esse certificado costuma ser bem caro e como eu não ganho nada desenvolvendo a overlay, não é possível pagar por um. Para tirar essa tela, simplesmente clique em "Mais informações" e "Executar mesmo assim".
        </p>
        <h2 class ="text-1xl font-bold">Diminui o fps?</h2>
        <p class="mt-2">Não, o KC Overlay é extremamente leve e não afetará a performance nem do computador mais fraco.
        </p>
        <h2 class ="text-1xl font-bold">O que são os símbolos que aparecem do lado de alguns jogadores?</h2>
        <p class="mt-2"> ☢️: Possível cheater -- 🔨: Número de bans -- 🗡️: Possível sniper -- 🔇: Mutado
        </p>

      </div>
      
      `
      github = "https://github.com/jafkc2/KC-Overlay";
      image_path = "/kc-overlay.jpg"

      await get_releases_url("https://api.github.com/repos/jafkc2/kc-overlay/releases/latest");
      break;

    case "showcase":
      project_title = "Site de showcase";
      description = "O site em que você está agora! Este site serve para demonstrar os projetos que fiz."
      detailed_description = "Feito usando Typescript, HTML e TailwindCSS."
      github = "https://github.com/jafkc2/jafkc2.github.io";
      image_path = "/showcase.jpg"

      break;
    default:
      project_title = "Algum erro aconteceu...";
      description = "Me perdoe por esse erro, não era para acontecer."
      github = "https://github.com/jafkc2/";

      break;
};

const body = html`
<div>
  <a href="../index.html" class="absolute top-4 left-4 text-xl text-surface2 hover:text-mylightblue">
    < Ver todos os projetos de JafKC
  </a>
  <header class="text-center py-10">
    <h1 class="text-4xl font-bold">${project_title}</h1>
    <p class="text-x1"> ${description}</p>
  </header>

  <section class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="buttons">
    <a href="${windows_download_url}" class="flex items-center bg-mygreen text-white px-4 py-6 rounded-xl">
      <img src="/windows.svg" alt="Github" class="w-10 h-10 mr-2" />
      Baixar para o Windows</a>
    <a href="${linux_download_url}" class="flex items-center bg-mygreen text-white px-4 py-6 rounded-xl">
      <img src="/linux.svg" alt="Github" class="w-10 h-10 mr-2" />
      Baixar para o Linux</a>
    <a href="${github}" class="flex items-center bg-myblue text-white px-4 py-6 rounded-xl">
      <img src="/github.svg" alt="Github" class="w-10 h-10 mr-2" />
      Repositório do ${project_title}</a>
  </section>

  <img class="mx-auto mb-8 mt-8" src="${image_path}" alt="Imagem do projeto">

  <p class="text-left">${detailed_description}</p>



  <footer class="text-center py-10 mt-10 text-gray-500">
    <a href ="https://github.com/jafkc2" target="_black" class="text-mylightblue">
      Meu Github
    </a>
    <p>Email: jaf222006@gmail.com</p>
    <p>Discord: .jafkc</p>
  </footer>
</div>
`

document.querySelector<HTMLDivElement>('#project')!.innerHTML = body
