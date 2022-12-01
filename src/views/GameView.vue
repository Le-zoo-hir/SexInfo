<template>
  <Suspense>
    <PhaseContainerView />

    <template #fallback>
      <div>
        Downloading ...
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { useRouter } from 'vue-router';
import PhaseContainerView from "../views/PhaseContainerView.vue";

const router = useRouter();

function goToHome() {
    router.push('/');
}

</script>