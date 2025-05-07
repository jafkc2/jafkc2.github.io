<template>
    <Return></Return>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <section>
        <a :href="github" target="_blank">
            <button>
                <img src="/github.svg" alt="Github">
                <span>Github</span>
            </button>
        </a>
        <a v-if="windows_download_url" :href="windows_download_url" target="_blank">
            <button>
                <img src="/windows.svg" alt="Windows">
                <span>Baixar p/ Windows</span>
            </button>
        </a>
        <a v-if="linux_download_url" :href="linux_download_url" target="_blank">
            <button>
                <img src="/linux.svg" alt="Linux">
                <span>Baixar p/ Linux</span>
            </button>
        </a>
        <a v-if="mac_download_url" :href="mac_download_url" target="_blank">
            <button>
                <img src="/apple.svg" alt="apple">
                <span>Baixar p/ Mac</span>
            </button>
        </a>
    </section>

    <img v-if="image" :src="image" :alt="title" style="max-width: 100%; height: auto; margin: 0 auto; display: block;">
</template>

<script setup lang="ts">
import Return from './Return.vue'

interface Props {
    title: string,
    description: string,
    github: string,
    windows_download_url: string,
    linux_download_url: string,
    mac_download_url: string,
    image: string
}
defineProps<Props>();

</script>

<style scoped>
button img {
    height: 25px;
    margin-right: 3px;
}
button {
    vertical-align:middle;
    display: flex;
    margin-right: 5px;
}
p {
    max-width: 900px;
    margin: auto;
    line-height: 35px;
    font-size: 18px;
}

section {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center; 
    align-items: center;
}
</style>