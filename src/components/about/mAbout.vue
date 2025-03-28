<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="container">
        <div class="container__inner">
            <n-flex vertical>
                <div>
                    <n-image src="./personal-website/about/Avatar.png" />
                </div>
                <div :span="12" class="about">
                    <p>"Embrace every challenge as a chance to lead and learn, turning obstacles into stepping
                        stones of
                        growth.
                        Let passion, creativity, and resilience guide your journey, inspiring others and forging a
                        legacy of excellence."</p>
                    <n-flex :justify="'end'">
                        <div class="spName">Ruyi Li</div>
                    </n-flex>
                    <div style="margin-top: 24px">
                        <n-divider title-placement="right" dashed>
                            TED x UCS Host
                        </n-divider>
                        <n-divider title-placement="right" dashed>
                            IELTS - 8
                        </n-divider>
                        <n-divider title-placement="right" dashed>
                            SAT - 1500
                        </n-divider>
                        <n-divider title-placement="right" dashed>
                            GPA - 4.0
                        </n-divider>
                    </div>
                </div>
                <div :span="12" class="about">
                    <p>My name is Ruyi Li, and I am a well-rounded student currently studying at Shanghai Lingke.
                        With a
                        strong academic record and a passion for excellence, I have always strived to balance my
                        rigorous studies with meaningful extracurricular involvement.</p>
                    <p>I am eager to pursue an undergraduate degree in finance, driven by my curiosity about the
                        world
                        of economics and the dynamic nature of financial markets. Beyond excelling in class, I
                        actively
                        participate in and organize various events outside the classroom. These experiences have
                        honed
                        my leadership skills, teaching me the importance of initiative, teamwork, and community
                        engagement.</p>
                    <p>In addition to my academic and leadership endeavors, writing and music are two passions that
                        enrich my free time. Writing allows me to explore my thoughts and share my experiences,
                        while
                        music serves as both a creative outlet and a source of inspiration. These pursuits not only
                        provide balance in my life but also continuously fuel my desire to learn and grow.</p>
                    <p>As I step forward into new challenges and opportunities, I remain committed to personal
                        development and making a positive impact wherever I go.</p>
                </div>
                <div :span="12" class="about">
                    <p>By the way, I am also captivated by the world of computer science. My journey began with
                        basic website programming, and over the past few months, I have dedicated myself to learning
                        Swift and SwiftUI.</p>
                    <img style="float: left; width: 96px; border-radius: 24px; box-shadow: var(--boxShadow-deep); margin-right: 24px"
                        src="/personal-website/about/RuyiAppIcon.png" />
                    <p>This newfound passion led me to develop an iOS app called "Blooming Gratitude". As
                        someone who truly values the beauty in everyday moments, I created this app to help users
                        record daily moments of gratitude.</p>
                    <p>Every time you make an entry, the app generates a unique plant image—a visual reminder that
                        even small acts of appreciation can cultivate growth. If you own an Apple device, feel free
                        to search for "Blooming Gratitude" on the Apple Store, or visit my app promotional website
                        to discover more about its features.</p>
                    <p>App download address:
                        <n-button text style="font-size: 16px" target="_blank"
                            href="https://apps.apple.com/us/app/blooming-gratitude/id6741553160">
                            <template #icon>
                                <n-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3c-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2l-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3c9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4l8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3c9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3c-9.6 5.5-21.8 2.2-27.3-7.3c-32.9-56.9-57.5-99.7-74-128.1c-16.7-29-4.8-58 7.1-67.8c13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20c0 11.1-9 20-20 20z"
                                            fill="currentColor"></path>
                                    </svg>
                                </n-icon>
                            </template>
                            <b><u>Blooming Gratitude</u></b>
                        </n-button>
                    </p>
                </div>
                <div style="margin-bottom: 48px">
                    <n-flex :justify="'space-between'">
                        <div>{{ "Interested at what more projects I am doing?".toUpperCase() }}</div>
                        <div>{{ "Feel free to contact me".toUpperCase() }}</div>
                        <div>{{ "Anytime".toUpperCase() }}</div>
                    </n-flex>
                    <div style="margin-top: 12px">
                        <n-divider title-placement="right" dashed>
                            <n-icon :size="20">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32">
                                    <path
                                        d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"
                                        fill="currentColor"></path>
                                </svg>
                            </n-icon>
                            Email: liruyi3032557980@163.com
                        </n-divider>
                        <n-divider title-placement="right" dashed>
                            <n-icon :size="20">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32">
                                    <path
                                        d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z"
                                        fill="currentColor"></path>
                                </svg>
                            </n-icon>
                            Telephone: 15677845577
                        </n-divider>
                        <n-divider title-placement="right" dashed>
                            <n-icon :size="20">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32">
                                    <path
                                        d="M27.086 24.78A6.618 6.618 0 0 0 30 19.465c0-3.88-3.776-7.027-8.434-7.027s-8.434 3.147-8.434 7.027s3.777 7.028 8.434 7.028a9.955 9.955 0 0 0 2.754-.385l.247-.037a.892.892 0 0 1 .448.13l1.847 1.066l.162.053a.281.281 0 0 0 .281-.282l-.045-.205l-.38-1.417l-.03-.18a.56.56 0 0 1 .236-.458zM12.12 4.68C6.53 4.68 2 8.455 2 13.114a7.939 7.939 0 0 0 3.497 6.374a.671.671 0 0 1 .283.55l-.035.215l-.456 1.701l-.055.246a.338.338 0 0 0 .337.338l.196-.063l2.216-1.28a1.058 1.058 0 0 1 .536-.155l.298.044a11.967 11.967 0 0 0 3.304.464l.555-.014a6.515 6.515 0 0 1-.34-2.067c0-4.247 4.133-7.691 9.23-7.691l.55.014c-.762-4.029-4.947-7.11-9.995-7.11zm6.633 13.663a1.125 1.125 0 1 1 1.125-1.125a1.124 1.124 0 0 1-1.125 1.125zm5.624 0a1.125 1.125 0 1 1 1.123-1.125a1.125 1.125 0 0 1-1.123 1.125zm-15.631-6.58a1.35 1.35 0 1 1 1.35-1.348a1.349 1.349 0 0 1-1.35 1.349zm6.747 0a1.35 1.35 0 1 1 1.35-1.348a1.349 1.349 0 0 1-1.35 1.349z"
                                        fill-rule="evenodd" fill="currentColor"></path>
                                </svg>
                            </n-icon>
                            WeChat: ruyili
                        </n-divider>
                    </div>
                </div>
            </n-flex>
        </div>
    </div>
</template>

<style lang='less' scoped>
.container__inner {
    padding: 24px 12px;

    .title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .n-image {
        :deep(img) {
            width: 100%;
        }
    }

    .spName {
        font-family: "Rock Salt", cursive;
        font-weight: 400;
        font-style: normal;
        font-size: 36px;
    }

    .about {
        font-size: 16px;
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