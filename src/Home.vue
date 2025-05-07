<script setup lang="ts">
    import Footer from './components/Footer.vue';
</script>

<template>
    <header>
        <h1>Olá, eu sou o JafKC!</h1>
        <h3>Seja bem-vindo. Este é um site que eu criei para mostrar alguns projetos desenvolvidos por mim.</h3>
    </header>


    <h1>Meus projetos</h1>
    <section>
        <div class="card">
            <h2>Este site</h2>
            <p>O site em que você está nesse momento 🙂. Um site estático simples feito usando Vue e Typescript.</p>
            <router-link to="/Showcase">
                <button>
                    <span>Ver projeto</span>
                </button>
            </router-link>
        </div>
        <div class="card">
            <h2>KC Overlay</h2>
            <p>Ferramenta para jogadores do servidor de Minecraft MushMC conseguirem ver as estatísticas dos jogadores.</p>
            <router-link to="/KC-Overlay">
                <button>
                    <span>Ver projeto</span>
                </button>
            </router-link>

        </div>
        <div class="card">
            <h2>Minelander</h2>
            <p>Launcher de Minecraft completo e simples feito em Rust com diversas funcionalidades interessantes.</p>
            <router-link to="/Minelander">
                <button>
                    <span>Ver projeto</span>
                </button>
            </router-link>
        </div>
    </section>

    <Footer></Footer>
</template>

<style scoped>
    button{
        margin-top: 20px;
        background-color: #45475a;
    }
    section{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        gap: 20px;
    }

    .card{
        width: 400px;
        height: 247px;
        background: #313244;
        padding: 15px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        text-align: center;
    }

</style>