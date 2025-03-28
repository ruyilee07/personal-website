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
                        <b>{{parts.find(part => part.type === currentEssay.type).name}}</b>
                    </div>
                </n-breadcrumb-item>
            </n-breadcrumb>
            <div>
                <n-divider dashed>Essay</n-divider>
                <div>
                    <div style="text-align: center;" class="image">
                        <n-image :src="currentEssay.coverURL" />
                    </div>
                    <div>
                        <n-flex vertical :size="24">
                            <n-divider dashed>{{ currentEssay.progress }}</n-divider>
                            <div class="title"><b>{{ currentEssay.title }}</b></div>
                            <div class="intro">{{ currentEssay.intro }}</div>
                            <n-flex :justify="'end'" :size="0">
                                <n-flex vertical :size="0">
                                    <div class="spName">Ruyi Li</div>
                                    <div class="date">{{ currentEssay.date }}</div>
                                </n-flex>
                            </n-flex>
                        </n-flex>
                    </div>
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
        padding: 24px 12px;

        .n-image {
            :deep(img) {
                width: 100%;
            }
        }
    }

    .breadcrumbItem {
        font-size: 12px;
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
        font-family: 'Times New Roman', Times, serif;
    }

    .spName {
        font-family: "Rock Salt", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 36px;
    }

    .date {
        text-align: right;
        margin-top: 8px;
    }

    .n-divider {
        font-size: 16px;

        :deep(.n-divider__line) {
            border-color: #3e3e3e;
        }
    }
}
</style>