<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
            <h1 class="text-5xl font-bold mb-5">SexInfo</h1>
            <button class="btn btn-primary" v-on:click="goToGame">Jouer</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToGame() {
    router.push('/game');
}

</script>