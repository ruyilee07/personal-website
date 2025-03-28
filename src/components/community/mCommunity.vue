<script setup>
</script>

<template>
    <div class="container">
        <div class="container__inner">
            <div>
                <n-divider dashed>
                    <div class="title">Student Union</div>
                </n-divider>
                <div style="text-align: center;">Member of Culture and Sports Department</div>
                <n-divider dashed>2022/09 - Now</n-divider>
                <n-flex vertical :size="24">
                    <n-grid :x-gap="12" style="align-items: center;">
                        <n-gi :span="24">
                            <n-image src="./personal-website/community/Union-1.webp"></n-image>
                        </n-gi>
                        <n-gi :span="24">
                            <p>From planning Christmas and Halloween events in school to volunteering for charity,
                                my time in the student union has been a journey of creating joy and impact. Every
                                event was more than just logistics, but about bringing people together with one
                                thoughtful step at a time.
                            </p>
                        </n-gi>
                    </n-grid>
                    <n-grid :x-gap="12">
                        <n-gi :span="12">
                            <n-flex vertical :size="24">
                                <n-image src="./personal-website/community/Union-2.webp"></n-image>
                                <n-image src="./personal-website/community/Union-5.webp"></n-image>
                                <n-image src="./personal-website/community/Union-6.webp"></n-image>
                            </n-flex>
                        </n-gi>
                        <n-gi :span="12">
                            <n-flex vertical :size="24">
                                <n-image src="./personal-website/community/Union-3.webp"></n-image>
                                <n-image src="./personal-website/community/Union-4.webp"></n-image>
                                <n-image src="./personal-website/community/Union-7.webp"></n-image>
                            </n-flex>
                        </n-gi>
                    </n-grid>
                </n-flex>
            </div>
            <div style="margin-top: 128px">
                <n-divider dashed>
                    <div class="title">TED x UCS</div>
                </n-divider>
                <n-divider dashed>Lead Organizer / Host</n-divider>
                <n-divider dashed>2022/10/24</n-divider>
                <n-flex vertical :size="24">
                    <n-grid :x-gap="12" style="align-items: center;">
                        <n-gi :span="24">
                            <n-image src="./personal-website/community/TED-1.webp"></n-image>
                        </n-gi>
                        <n-gi :span="24">
                            <p>Seven months—that's how long it took from the first draft of the proposal to the
                                final event. From recruiting a team of speakers and volunteers to endless online and
                                offline discussions, every step was a new challenge. In the final days, we pushed
                                ourselves to the limit, making sure the giant TEDx logo landed smoothly. Seeing
                                months of effort come to life, with an audience listening to every word, was a
                                moment of fulfillment.
                            </p>
                        </n-gi>
                    </n-grid>
                    <n-grid :x-gap="12">
                        <n-gi :span="12">
                            <n-flex vertical :size="24">
                                <n-image src="./personal-website/community/TED-2.webp"></n-image>
                                <n-image src="./personal-website/community/TED-5.webp"></n-image>
                                <n-image src="./personal-website/community/TED-6.webp"></n-image>
                                <n-image src="./personal-website/community/TED-7.webp"></n-image>
                            </n-flex>
                        </n-gi>
                        <n-gi :span="12">
                            <n-flex vertical :size="24">
                                <n-image src="./personal-website/community/TED-3.webp"></n-image>
                                <n-image src="./personal-website/community/TED-4.webp"></n-image>
                                <n-image src="./personal-website/community/TED-8.webp"></n-image>
                                <n-image src="./personal-website/community/TED-9.webp"></n-image>
                                <n-image src="./personal-website/community/TED-10.webp"></n-image>
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
            font-size: 20px;

            :deep(.n-divider__line) {
                border-color: #3e3e3e;
            }
        }

        .title {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: bold;
            font-size: 48px;
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