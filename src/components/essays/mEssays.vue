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
        <div class="container__inner">
            <div v-for="(part, index) in parts">
                <n-flex vertical :size="24">
                    <n-divider dashed>{{ part.name }}</n-divider>
                    <n-grid :cols="1" :x-gap="24" :y-gap="72">
                        <n-gi v-for="essay in part.essays" class="essay" @click="handleToEssayDetail(essay)">
                            <n-flex vertical :size="8">
                                <div class="image"><img :src="essay.coverURL" /></div>
                                <div style="color: red">{{ essay.progress }}</div>
                                <div style="height: 42px; font-size: 18px; line-height: 1.1;">
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
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    .container__inner {
        padding: 24px 24px 128px 24px;

        .n-divider {
            font-size: 14px;

            :deep(.n-divider__line) {
                border-color: #3e3e3e;
            }
        }
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