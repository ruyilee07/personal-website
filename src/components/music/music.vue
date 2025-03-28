<script setup>
import { ref, watch } from 'vue';
import { readJSON } from '../../api/handleJson';
import VideoPlayer from './videoPlayer.vue'

const musicList = ref([]);

const currentMusic = ref(null);

const readyRender = ref(false);

initial();

watch(currentMusic, newVal => {
    readyRender.value = false;
    setTimeout(() => {
        readyRender.value = true;
    }, 50);
})

async function initial() {
    readJSON("music").then(res => {
        musicList.value = res.data
        currentMusic.value = musicList.value[0]
        readyRender.value = true;
    })
}

function handlePrevNext(action) {
    if (action) {
        if (currentMusic.value.id === musicList.value.length) {
            currentMusic.value = musicList.value[0]
        } else {
            currentMusic.value = musicList.value[currentMusic.value.id]
        }
    } else {
        if (currentMusic.value.id === 1) {
            currentMusic.value = musicList.value[musicList.value.length - 1]
        } else {
            currentMusic.value = musicList.value[currentMusic.value.id - 2]
        }
    }
}
</script>

<template>
    <div v-if="readyRender" class="container">
        <div class="container__inner">
            <n-grid :x-gap="24" style="align-items: center;">
                <n-gi :span="5">
                    <n-button text @click="handlePrevNext(0)">
                        <template #icon>
                            <n-icon :size="48">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                    enable-background="new 0 0 512 512" xml:space="preserve">
                                    <path d="M217.9,256L345,129c9.4-9.4,9.4-24.6,0-33.9c-9.4-9.4-24.6-9.3-34,0L167,239c-9.1,9.1-9.3,23.7-0.7,33.1L310.9,417
                                c4.7,4.7,10.9,7,17,7c6.1,0,12.3-2.3,17-7c9.4-9.4,9.4-24.6,0-33.9L217.9,256z"></path>
                                </svg>
                            </n-icon>
                        </template>
                    </n-button>
                </n-gi>
                <n-gi :span="14">
                    <n-flex vertical :size="24">
                        <div class="title">{{ currentMusic.title }}</div>
                        <n-text :depth="3" style="font-size: 24px">{{ currentMusic.date }}</n-text>
                        <n-grid :x-gap="24">
                            <n-gi :span="9">
                                <n-image :src="currentMusic.coverUrl"></n-image>
                            </n-gi>
                            <n-gi :span="15">
                                <video-player :width="currentMusic.width"
                                    :videoUrl="currentMusic.videoUrl"></video-player>
                            </n-gi>
                        </n-grid>
                    </n-flex>
                </n-gi>
                <n-gi :span="5">
                    <n-flex :justify="'end'">
                        <n-button text @click="handlePrevNext(1)">
                            <template #icon>
                                <n-icon :size="48">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        enable-background="new 0 0 512 512" xml:space="preserve">
                                        <path d="M294.1,256L167,129c-9.4-9.4-9.4-24.6,0-33.9s24.6-9.3,34,0L345,239c9.1,9.1,9.3,23.7,0.7,33.1L201.1,417
                                c-4.7,4.7-10.9,7-17,7c-6.1,0-12.3-2.3-17-7c-9.4-9.4-9.4-24.6,0-33.9L294.1,256z"></path>
                                    </svg>
                                </n-icon>
                            </template>
                        </n-button>
                    </n-flex>
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    .container__inner {
        padding: 24px 24px 128px 24px;

        .n-divider {
            font-size: 20px;

            :deep(.n-divider__line) {
                border-color: #3e3e3e;
            }
        }

        .title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 96px;
            line-height: 1;
        }

        .n-image {
            :deep(img) {
                width: 100%;
            }
        }
    }
}
</style>