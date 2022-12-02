<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import launch from "../game/game";
import { useRouter } from 'vue-router';

const router = useRouter();

let gameInstance = null
const containerId = 'game-container'
var emitter = new Phaser.Events.EventEmitter();
emitter.on('finish', handler, this);

onMounted(() => {
    gameInstance = launch(containerId,emitter)
})
onUnmounted(() => {
    gameInstance.destroy(false)
})

function handler() {
    router.push('/istdex');
}
</script>

<style>
canvas {
    width: 100vw;
    height: 100vh;
}

</style>

<template>
  <div :id="containerId" />
</template>