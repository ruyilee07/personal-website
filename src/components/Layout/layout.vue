<script setup>
import { ref } from 'vue'
import router from '../../router/router';

const menuItems = [
    {
        label: "HOME",
        key: "home"
    },
    {
        label: "ABOUT ME",
        key: "about"
    },
    {
        label: "ESSAY",
        key: "essays"
    },
    {
        label: "MUSIC",
        key: "music"
    },
    {
        label: "COMMUNITY",
        key: "community"
    }
]
</script>

<template>
    <n-layout class="container">
        <n-layout-header>
            <n-flex :justify="'space-between'">
                <n-button v-for="item in menuItems" text class="menuItem" @click="router.push({ name: item.key })">
                    {{ item.label }}
                </n-button>
            </n-flex>
        </n-layout-header>
        <n-layout-content>
            <router-view />
        </n-layout-content>
    </n-layout>
</template>

<style lang='less' scoped>
.container {
    min-height: 100vh;
    background: var(--main-background);

    .n-layout-header {
        background: var(--main-background);
        padding: 24px;

        .menuItem {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 24px;
        }
    }
}
</style>