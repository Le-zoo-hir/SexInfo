<template>
    <div class="flex flex-col items-center">
        <img :src="'../src/assets/imgIst/' + item.img" alt="" class="w-56">
        <h1>{{ item.nom }}</h1>
        <div class="flex flex-row max-w-2xl">
            <img src="../../assets/information-circle-outline.svg" class="w-8">
            <p>{{ item.desc }}</p>
        </div>
        <div class="flex flex-row max-w-2xl">
            <img src="../../assets/shield-outline.svg" class="w-8">
            <p>{{ item.desc }}</p>
        </div>
    </div>
</template>
<script setup>

let props = defineProps({
    item: { type: Object, required: true },
});

</script>