<template>
  <v-container class="ma-0 pa-0">
    <v-img
      :height="screenHeight"
      aspect-ratio="4/3"
      cover
      src="../../foto.JPG"
      style="opacity: 0.7"
    >
      <div
        class="d-flex flex-column fill-height justify-center align-center text-gray"
      >
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
        </div>
      </div>
    </v-img>
    <v-container
      class="d-flex flex-column justify-center align-center"
      style="background-color: rgba(137, 119, 99, 0.784)"
    >
      <v-btn
        block
        variant="outlined"
        href="https://www.google.com/maps?saddr=My+Location&daddr=Chiesa+Marigolda"
        class="mb-4"
      >
        <v-icon icon="fas fa-route" size="large" class="mr-8"> </v-icon>
        Dov'è il matrimonio?
      </v-btn>
      <v-btn
        block
        variant="outlined"
        href="https://www.google.com/maps?saddr=My+Location&daddr=Agriturismo+Larice+Clusone"
      >
        <v-icon icon="fas fa-route" size="large" class="mr-8"> </v-icon>
        Dov'è il ricevimento?
      </v-btn>
    </v-container>
  </v-container>
</template>

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
</style>
