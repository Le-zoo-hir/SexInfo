<template>
    <div class="flex flex-col items-center  max-w-3xl xl:mr-36 xl:pt-12 mb-32 ">
        <img :src="'../src/assets/imgIst/' + item.img" alt="" class="w-56">
        <h1 class="text-6xl xl:m-14 mt-14 mb-14 font-bold text-[#00102F]">{{ item.nom }}</h1>
        <div>
            <div class="flex flex-col xl:flex-row items-center">
                <img src="../../assets/information-circle-outline.svg" class="w-14 mb-10 xl:mr-10 xl:mb-0">
                <p class="font-semibold text-[#00102F] pl-14 pr-14 xl:p-5 text-justify xl:text-start">{{ item.desc }}
                </p>
            </div>
            <div class="flex flex-col xl:flex-row mt-10 items-center">
                <img src="../../assets/shield-outline.svg" class="w-14 mb-10 xl:mr-10 xl:mb-0">
                <div class="flex flex-row flex-wrap justify-around gap-5">
                    <div v-for="oneProtect in item.Protection"
                        class="w-32 h-32 bg-[#e6e6e6] flex flex-col justify-center items-center rounded-xl xl:mr-6">
                        <img :src="('../src/assets/imgProtect/' + oneProtect.nom + '.png')" alt="" class="w-20">
                        <p class="font-semibold text-[#00102F]">{{ oneProtect.nom }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col xl:flex-row items-center mt-10 ">
                <img src="../../assets/medkit-outline.svg" class="w-14 mb-10 xl:mr-10 xl:mb-0">
                <p class="font-semibold text-[#00102F] pl-14 pr-14 xl:p-5 text-justify xl:text-start">{{
                        item.Explication
                }}
                </p>
            </div>
        </div>

    </div>
</template>
<script setup>

let props = defineProps({
    item: { type: Object, required: true },
});

</script>