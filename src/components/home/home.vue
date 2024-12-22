<script setup>
import { ref } from 'vue'
import {
    NButton,
    NImage
} from 'naive-ui';
import router from "../../router/router";

const count = ref(0)
</script>

<template>
    <div class="content">
        <n-flex class="header" :justify="'center'" :align="'center'">
            <div>
                <n-avatar :size="128" src="./personal-website/avatar.png"></n-avatar>
                <div class="title">Ruyi "Ben" Li's Works & Projects</div>
                <div class="slogan">Driven but Down-to-Earth</div>
            </div>
        </n-flex>
        <div class="navbar">
            <n-grid :x-gap="24" style="height: 100%">
                <n-gi class="navItem" @click="router.push({ name: 'essays' })" :span="8">
                    <n-flex :justify="'center'" :align="'center'" style="height: 100%">
                        <div>
                            <div class="title">Essays</div>
                            <div class="explanation">Essays are a mix of my overthinking and underthinking.</div>
                        </div>
                    </n-flex>
                </n-gi>
                <n-gi class="navItem" @click="router.push({ name: 'music' })" :span="8">
                    <n-flex :justify="'center'" :align="'center'" style="height: 100%">
                        <div>
                            <div class="title">Music</div>
                            <div class="explanation">Music is cheaper than a shrink and way more therapeutic.</div>
                        </div>
                    </n-flex>
                </n-gi>
                <n-gi class="navItem" @click="router.push({ name: 'community' })" :span="8">
                    <n-flex :justify="'center'" :align="'center'" style="height: 100%">
                        <div>
                            <div class="title">Commuity</div>
                            <div class="explanation">Community is where my leadership gets a workout.</div>
                        </div>
                    </n-flex>
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    min-height: 100vh;

    .header {
        // border: 1px solid #000;
        // padding: 24px;
        height: 40vh;
        text-align: center;

        .title {
            font-size: 56px;
            font-weight: bold;
        }

        .slogan {
            font-size: 22px;
            border-radius: 50%;
        }
    }

    .navbar {
        height: 60vh;
        text-align: center;

        .navItem {
            background: #9e9e9e;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                opacity: 0.6;
            }

            .title {
                font-size: 32px;
                font-weight: bold;
                background: #FFFFFF;
                margin-bottom: 24px;
                padding: 4px;
            }

            .explanation {
                font-size: 18px;
                background: #ffffff7d;
                padding: 4px 12px;
            }
        }
    }
}
</style>