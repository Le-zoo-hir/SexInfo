<template>
    <button class="btn" v-on:click="goToHome">go to home</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
    router.push('/');
}


</script>