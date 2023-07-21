<template>
  <v-container class="ma-0 pa-0">
    <v-img
      :height="screenHeight"
      aspect-ratio="4/3"
      cover
      src="/foto.jpg"
      style="opacity: 0.7"
    >
      <div class="d-flex fill-height justify-center align-end text-gray pb-4">
        <div
          style="
            background-color: azure;
            opacity: 0.7;
            border-radius: 10px;
            padding: 10px;
          "
          class="d-flex flex-column justify-center align-center"
        >
          <h1 class="text-h4 font-weight-bold mb-4">Lisa & Mattia</h1>
          <h4 class="subheading">31 Maggio 2024</h4>
          <v-icon
            icon="fas fa-angles-down"
            size="large"
            class="mt-4 moving-arrows"
          >
          </v-icon>
        </div>
      </div>
    </v-img>

    <Directions />
  </v-container>
</template>

<script setup lang="ts">
import Directions from "../components/Directions.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      screenHeight: window.innerHeight,
    };
  },
};
</script>

<style lang="css" scoped>
.w-100 {
  width: 100%;
}

.moving-arrows {
  animation: updown 2s ease infinite;
}

@keyframes updown {
  0% {
    transform: translateY(-20%);
  }

  50% {
    transform: translateY(20%);
  }

  100% {
    transform: translateY(-20%);
  }
}
</style>
