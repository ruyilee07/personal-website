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
        readyRender.value = true;
    })
}
</script>

<template>
    <div v-if="readyRender" class="container">
        <div class="container__inner">
            <n-breadcrumb>
                <n-breadcrumb-item @click="router.push({ name: 'essays' })">
                    <div class="breadcrumbItem">Essays</div>
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                    <div class="breadcrumbItem">
                        <b>{{ parts.find(part => part.type === currentEssay.type).name }}</b>
                    </div>
                </n-breadcrumb-item>
            </n-breadcrumb>
            <div style="width: 1200px; margin: 24px auto;">
                <n-divider style="margin-top: 48px" dashed>Essay</n-divider>
                <div style="margin-top: 48px;">
                    <n-grid style="align-items: center;" :x-gap="48">
                        <n-gi :span="12" style="text-align: center;" class="image">
                            <img :src="currentEssay.coverURL" />
                        </n-gi>
                        <n-gi :span="12">
                            <n-flex vertical :size="24">
                                <div class="progress"><b>{{ currentEssay.progress }}</b></div>
                                <div class="title"><b>{{ currentEssay.title }}</b></div>
                                <div class="intro">{{ currentEssay.intro }}</div>
                                <n-flex :justify="'end'" :size="0">
                                    <n-flex vertical :size="0">
                                        <div class="spName">Ruyi Li</div>
                                        <div class="date">{{ currentEssay.date }}</div>
                                    </n-flex>
                                </n-flex>
                            </n-flex>
                        </n-gi>
                    </n-grid>
                </div>
                <n-divider style="margin-top: 48px" dashed>CONTENT</n-divider>
                <div class="essayContent">
                    <div v-html="decode(currentEssay.content)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.container {
    .container__inner {
        width: 1200px;
        margin: 0 auto;
        padding: 24px 0;
    }

    .breadcrumbItem {
        font-size: 24px;
    }

    .progress {
        font-size: 18px
    }

    .title {
        font-size: 24px;
        line-height: 1.2
    }

    .image {
        img {
            aspect-ratio: 4/3;
            width: 100%;
            object-fit: cover;
        }
    }

    .essayContent {
        font-size: 16px;
        padding: 48px;
        font-family: 'Times New Roman', Times, serif;
    }

    .spName {
        font-family: "Rock Salt", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 36px;
    }

    .n-divider {
        font-size: 16px;
        margin: 0;

        :deep(.n-divider__line) {
            border-color: #3e3e3e;
        }
    }
}
</style>