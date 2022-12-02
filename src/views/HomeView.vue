<template >
    <div class="flex justify-center h-screen xl:w-10/12 flex-col">
        <div class="w-1/1 xl:w-2/3  m-16">
            <h1 class="text-8xl font-bold mb-3 text-center xl:text-start" style="color: #00102F;">Le zoo des IST</h1>
            <p class="py-6 max-w-xl xl:mb-16 text-center xl:text-left">Ce jeu éducatif vous mettra à la place d'une
                personne devant
                esquiver les
                différentes IST afin de survivre le plus longtemps possible. Lors de la défaite, vous en apprendrez sur
                les maladies sexuelles, comment les prévenir et les soigner.</p>
            <div class="flex flex-col items-center xl:items-start xl:flex-row">
                <button
                    class="btn xl:mr-5 bg-[#00102F] hover:bg-white hover:border-black hover:border-solid hover:border-2 text-white hover:text-black w-56 h-14 border-none mb-10"
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