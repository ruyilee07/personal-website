<script setup>
import { ref } from 'vue';
import { readJSON } from '../../api/handleJson';
import router from '../../router/router';
import { parts } from './essay.functions';

initial();

function initial() {
    readJSON("essays").then(res => {
        parts.value.map(part => {
            part.essays = res.data.filter(essay => essay.type === part.type)
            return part
        })
    })
}

function handleToEssayDetail(essay) {
    router.push({ name: "essay", params: { essayId: essay.id } })
}
</script>

<template>
    <div class="container">
        <n-breadcrumb>
            <n-breadcrumb-item @click="router.push({ name: 'home' })">
                <div class="breadcrumbItem">Ruyi Li</div>
            </n-breadcrumb-item>
            <n-breadcrumb-item>
                <div class="breadcrumbItem"><b>Essays</b></div>
            </n-breadcrumb-item>
        </n-breadcrumb>
        <n-divider />
        <div v-for="(part, index) in parts">
            <n-flex vertical :size="24">
                <div class="partName"><b>{{ part.name }}</b></div>
                <n-grid :cols="4" :x-gap="24" :y-gap="24">
                    <n-gi v-for="essay in part.essays" class="essay" @click="handleToEssayDetail(essay)">
                        <n-flex vertical :size="8">
                            <div class="image"><img :src="essay.coverURL" /></div>
                            <div style="color: red">{{ essay.progress }}</div>
                            <div style="height: 50px; font-size: 22px; line-height: 1.1;">
                                <n-ellipsis :line-clamp="2"><b>{{ essay.title }}</b></n-ellipsis>
                            </div>
                            <div>
                                <div class="intro">
                                    <n-ellipsis :tooltip="false" :line-clamp="3">
                                        {{ essay.intro }}
                                    </n-ellipsis>
                                </div>
                            </div>
                        </n-flex>
                    </n-gi>
                </n-grid>
            </n-flex>
            <n-divider v-if="index != parts.length - 1" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    padding: 24px;

    .breadcrumbItem {
        font-size: 24px
    }

    .partName {
        font-size: 20px;
        text-align: center;
    }

    .essay {
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: var(--primary-color);

            .intro {
                color: var(--primary-color);
            }
        }

        .intro {
            color: #8f8f8f;
        }

        .image {
            img {
                aspect-ratio: 4/3;
                width: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>