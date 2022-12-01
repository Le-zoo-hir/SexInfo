<script setup>
import { onMounted, onUnmounted } from 'vue'
import launch from "../game/game";

let gameInstance = null
const containerId = 'game-container'

onMounted(() => {
    gameInstance = launch(containerId)
})
onUnmounted(() => {
    gameInstance.destroy(false)
})
</script>

<template>
  <div :id="containerId" />
</template>