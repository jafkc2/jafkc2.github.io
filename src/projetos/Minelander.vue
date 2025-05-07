<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProjectHeader from '../components/ProjectHeader.vue';
import Footer from '../components/Footer.vue';
import { get_releases_url } from './util';

const title = "Minelander";
const description = "Launcher de Minecraft rápido e leve. Tem um sistema de instâncias para facilitar o gerenciamento de modpacks. Feito usando Rust e Iced.";
const github = "https://github.com/jafkc2/minelander";

const image = "/minelander.jpg"

const windows_download_url = ref(""), linux_download_url = ref(""), mac_download_url = ref("");
onMounted(async () => {
    const api_releases_url = "https://api.github.com/repos/jafkc2/minelander/releases/latest";
    const releases = await get_releases_url(api_releases_url);
    windows_download_url.value = releases[0];
    linux_download_url.value = releases[1];
    mac_download_url.value = releases[2];
});

import { useHead } from '@unhead/vue'
useHead({
  title: title,
  link: [
    { rel: 'icon', href: '/minelander.ico' },
  ],
  meta: [
    {
      name: 'description',
      content: description
    },
    {
        name: 'og:title',
        content: title
    },
    {
        name: 'og:description',
        content: description
    },
    {
        name: 'og:image',
        content: image
    },
    {
        name: 'og:url',
        content: "https://jafkc2.github.io/Minelander"
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
