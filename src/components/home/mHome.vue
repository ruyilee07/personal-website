<script setup>
import { ref } from 'vue'
import router from '../../router/router';
</script>

<template>
    <div class="container">
        <div class="container__inner">
            <div class="name">RUYI LI</div>
            <n-image src="./personal-website/home/sample.jpg"></n-image>
            <div class="intro">
                <p>Welcome to my personal website! My name is Ruyi Li, and I’m currently studying at Shanghai
                    Lingke.</p>
                <p>As I prepare to apply to university, I’ve created this space to document my academic journey,
                    personal growth, and the experiences that have shaped who I am.</p>
                <p>Here, you'll find a detailed
                    record of my learning milestones and the leadership qualities I've developed along the way.</p>
                <p>I believe that true leadership is built on the foundations of continuous learning, innovation,
                    and the courage to take initiative.</p>
                <p>I invite you to explore my work and learn more about the path that has led me to pursue new
                    challenges and opportunities for the future.</p>
                <n-flex :justify="'end'">
                    <div class="spName">Ruyi Li</div>
                </n-flex>
                <n-flex :justify="'end'" style="margin-top: 48px">
                    <div><n-button text class="spButton" @click="router.push({ name: 'about' })">
                            <b><u>LEARN MORE ABOUT ME</u></b></n-button></div>
                </n-flex>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.container {
    .container__inner {

        .n-image {
            :deep(img) {
                width: 100%;
            }
        }

        .name {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 128px;
            line-height: 1;
            padding: 12px;
        }

        .intro {
            font-size: 16px;
            padding: 12px;

            .spButton {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-size: 18px;
            }

            .spName {
                font-family: "Rock Salt", cursive;
                font-weight: 400;
                font-style: normal;
                font-size: 36px;
            }
        }
    }
}
</style>