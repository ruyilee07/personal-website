<script setup>
import { ref, onMounted } from 'vue'
import fileURL from './publicFileUrl'
import Hls from 'hls.js';

const props = defineProps({
    videoUrl: String,
    width: Number
})

const videoRef = ref(null);

const curVideoUrl = ref("");

initial();

function initial() {
    curVideoUrl.value = props.videoUrl;
}

onMounted(() => {
    const video = videoRef.value;
    const stream = fileURL + curVideoUrl.value;

    if (Hls.isSupported()) {
        const hls = new Hls({
            maxBufferLength: 30,
            maxMaxBufferLength: 60,
            maxBufferSize: 60 * 1000 * 1000,
            maxBufferHole: 0.5,
            startLevel: 0,
            fragLoadingTimeOut: 20000,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1000,
            fragLoadingMaxRetryTimeout: 64000
        });
        hls.loadSource(stream);
        hls.attachMedia(video);
        hls.on(Hls.Events.ERROR, function (event, data) {
            console.error('HLS error:', data);
            if (data.fatal) {
                switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('A network error occurred.');
                        hls.startLoad(); // 尝试重新加载
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('A media error occurred.');
                        hls.recoverMediaError(); // 尝试恢复媒体错误
                        break;
                    default:
                        console.error('An unrecoverable error occurred.');
                        hls.destroy();
                        break;
                }
            } else if (data.type === Hls.ErrorTypes.OTHER_ERROR && data.details === 'bufferStalledError') {
                console.warn('Buffer stalled. Attempting to recover.');
                hls.startLoad(); // 尝试重新加载
            }
        });
    } else if (video?.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = stream;
    } else {
        console.error("HLS is not supported in this browser.");
    }
})
</script>

<template>
    <video ref="videoRef" class="videoPlayer" :style="{ width: width ? `${width}px` : '100%' }" controls
        preload="auto"></video>
</template>

<style lang='less' scoped></style>