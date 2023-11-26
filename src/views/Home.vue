<template>
  <v-container class="ma-0 pa-0" style="max-width: none">
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
          <h1 class="text-h4 font-weight-bold mb-4 name-font">Lisa & Mattia</h1>
          <h4 class="subheading text-center">
            31 Maggio 2024 <br />
            Curno, Marigolda <br />
            h. 11.00
          </h4>
          <v-icon
            icon="fas fa-angles-down"
            size="large"
            class="mt-4 moving-arrows"
          >
          </v-icon>
        </div>
      </div>
    </v-img>

    <Menu />
  </v-container>
</template>

<script setup lang="ts">
import Menu from "../components/Menu.vue";
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

.name-font {
  font-family: "Brush Script MT", cursive !important;
  font-size: xxx-large !important;
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
