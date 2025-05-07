<template>
    <div class="titlebar">
        <router-link to="/">
            <button class="flex_button">
                <div>
                    <img src="/back.svg" />
                    <span>Início</span>
                </div>
            </button>
        </router-link>
    </div>
</template>

<style scoped>
.titlebar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

button {
    padding: 6px;
    margin-right: 10px;
    padding-left: 4px;
    padding-right: 4px;
    vertical-align: middle;
    font-size: 18px;
}

.flex_button {
    display: flex;
}

img {
    margin-right: 10px;
    width: 18px;
    vertical-align: middle;
}
</style>