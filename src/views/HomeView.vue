<template >
    <div class="flex justify-center h-screen w-10/12 flex-col">
        <div class="w-2/3 m-16">
            <h1 class="text-8xl font-bold mb-3 text-center xl:text-start" style="color: #00102F;">Le zoo des IST</h1>
            <p class="py-6 max-w-xl mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                incididunt ut labore et dolore magna aliqua. </p>
            <div>
                <button
                    class="btn mr-5 bg-[#00102F] hover:bg-white hover:border-black hover:border-solid hover:border-2 text-white hover:text-black w-56 h-14 border-none mb-10"
                    v-on:click="goToGame">Jouer</button>
                <button
                    class="btn hover:text-white text-black bg-white border-no border-solid border-2 border-[#00102F] w-56 h-14 hover:bg-[#00102F] mb-10"
                    v-on:click="goToIstDex">Ist dex</button>
            </div>

        </div>


        <img src="../assets/courbe.png" alt="" class="absolute bottom-0 right-0 h-screen bg-cover hidden xl:flex">

    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToGame() {
    router.push('/game');
}
function goToIstDex() {
    router.push('/istdex');
}

</script>