<template>
    <div class="grid place-items-center h-screen">
        <Suspense>
            <PhaseContainerView />

            <template #fallback>
            <div>
                Downloading ...
            </div>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PhaseContainerView from "../views/PhaseContainerView.vue";

const router = useRouter();



</script>