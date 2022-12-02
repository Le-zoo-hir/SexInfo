<template>
    <div class="w-32 h-32 bg-white flex justify-center items-center rounded-xl">
        <img :src="'../assets/imgIst/' + item.img" class="w-20">
    </div>
</template>
<script setup>

let props = defineProps({
    item: { type: Object, required: true },
});

</script>