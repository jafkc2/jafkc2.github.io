<script setup lang="ts">
import { ref } from 'vue';
import ProjectHeader from '../components/ProjectHeader.vue';
import Footer from '../components/Footer.vue';
import { useHead } from '@unhead/vue';

const title = "Site de Showcase";
const description = "O site em que você está agora! Este é um site simples feito para mostrar os projetos que eu desenvolvi. Feito usando Vue e TypeScript.";
const github = "https://github.com/jafkc2/jafkc2.github.io";

const image = ""

const windows_download_url = ref(""), linux_download_url = ref(""), mac_download_url = ref("");

useHead({
    title: title,
    meta: [
        {
            name: 'og:title',
            content: title
        },
        {
            name: 'og:description',
            content: description
        },
        {
            name: 'og:url',
            content: "https://jafkc2.github.io/Showcase"
        },
        {
            name: 'og:type',
            content: "website"
        },
        {
            name: 'twitter:card',
            content: "summary_large_image"
        }
    ]
})
</script>

<template>
    <header>
        <ProjectHeader :title="title" :description="description" :github="github"
            :windows_download_url="windows_download_url" :linux_download_url="linux_download_url"
            :mac_download_url="mac_download_url" :image="image"></ProjectHeader>
    </header>

    <body>

    </body>
    <Footer></Footer>


</template>

<style scoped>
p {
    max-width: 900px;
    margin: auto;
    line-height: 35px;
    font-size: 18px;
}
</style>
