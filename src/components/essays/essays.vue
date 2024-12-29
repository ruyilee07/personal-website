<script setup>
import { ref } from 'vue';
import { readJSON } from '../../api/handleJson';
import router from '../../router/router';

const parts = ref([
    {
        name: "JOHN LOCKE INSTITUTE ESSAY COMPETITION",
        type: 0,
    },
    {
        name: "NEWSPAPER SUBMISSIONS",
        type: 1,
    },
    {
        name: "THOUGHTS",
        type: 2,
    },
    {
        name: "POETRY",
        type: 3,
    }
])

initial();

function initial() {
    readJSON("essays").then(res => {
        parts.value.map(part => {
            part.essays = res.data.filter(essay => essay.type === part.type)
            return part
        })
    })
}
</script>

<template>
    <div class="container">
        <n-breadcrumb>
            <n-breadcrumb-item @click="router.push({ name: 'home'})">
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
                    <n-gi v-for="essay in part.essays">
                        <n-flex vertical :size="8">
                            <div><img style="width: 100%" :src="essay.coverURL" /></div>
                            <div style="color: red">{{ essay.progress }}</div>
                            <div style="height: 50px; font-size: 22px; line-height: 1.1;">
                                <n-ellipsis :line-clamp="2"><b>{{ essay.title }}</b></n-ellipsis>
                            </div>
                            <div>
                                <n-text :depth="3">
                                    <n-ellipsis :tooltip="false" :line-clamp="3">
                                        {{ essay.intro }}
                                    </n-ellipsis>
                                </n-text>
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
}
</style>