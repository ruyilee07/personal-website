<script setup>
import { ref } from 'vue'
import { readJSON } from '../../api/handleJson';
import router from '../../router/router';
import { parts } from './essay.functions';
import { darkTheme, NConfigProvider } from 'naive-ui'
import { decode } from 'js-base64';

// javascript - typescript
const currentEssayId = router.currentRoute.value.params.essayId;

const currentEssay = ref(null);

const readyRender = ref(false);

initial();

async function initial() {
    readJSON("essays").then(res => {
        const essays = res.data
        currentEssay.value = essays.find(essay => essay.id === Number(currentEssayId))
        console.log(currentEssay.value)
        readyRender.value = true;
    })
}
</script>

<template>
    <div v-if="readyRender">
        <n-config-provider :theme="darkTheme">
            <div style="background: #000; color: #fff; padding: 24px">
                <div>
                    <n-breadcrumb>
                        <n-breadcrumb-item @click="router.push({ name: 'home' })">
                            <div class="breadcrumbItem">Ruyi Li</div>
                        </n-breadcrumb-item>
                        <n-breadcrumb-item @click="router.push({ name: 'essays' })">
                            <div class="breadcrumbItem">Essays</div>
                        </n-breadcrumb-item>
                        <n-breadcrumb-item>
                            <div class="breadcrumbItem">
                                <b>{{ parts.find(part => part.type === currentEssay.type).name }}</b>
                            </div>
                        </n-breadcrumb-item>
                    </n-breadcrumb>
                </div>
                <div style="margin-top: 24px;">
                    <n-grid style="align-items: center;" :x-gap="24">
                        <n-gi :span=12 style="text-align: center; width: 70%; margin: 0 auto">
                            <n-flex vertical :size="16">
                                <div class="progress"><b>{{ currentEssay.progress }}</b></div>
                                <div class="title"><b>{{ currentEssay.title }}</b></div>
                                <div class="intro">{{ currentEssay.intro }}</div>
                                <n-flex vertical :size="0">
                                    <div>By Ruyi "Ben" Li</div>
                                    <div class="date">{{ currentEssay.date }}</div>
                                </n-flex>
                            </n-flex>
                        </n-gi>
                        <n-gi :span=12 style="text-align: center;">
                            <img style="width: 70%" :src="currentEssay.coverURL" />
                        </n-gi>
                    </n-grid>
                </div>
            </div>
        </n-config-provider>
        <div style="padding: 24px">
            <div style="width: 60%; margin: 0 auto; font-size: 18px">
                <div v-html="decode(currentEssay.content)"></div>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.breadcrumbItem {
    color: #dbdbdb;
    font-size: 24px
}

.progress {
    font-size: 18px
}

.title {
    font-size: 32px;
    line-height: 1.2
}

.intro,
.date {
    color: #bfbfbf;
}
</style>