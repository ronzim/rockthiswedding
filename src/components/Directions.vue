<template>
  <v-container
    class="d-flex flex-column justify-center align-center"
    style="background-color: rgba(94, 119, 69, 0.7)"
  >
    <h3>
      Indicazioni
      <v-icon icon="fas fa-route" size="small" class="ml-4"> </v-icon>
    </h3>
    <v-divider
      thickness="2"
      class="border-opacity-50 my-2"
      style="width: 100%"
    ></v-divider>
    <v-btn
      v-for="direction in directions"
      block
      variant="outlined"
      :href="direction.link"
      class="my-2"
      v-bind:key="direction.title"
    >
      {{ direction.title }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      directions: [
        {
          title: "Dov'è la sposa?",
          link: "https://www.google.com/maps/search/?api=1&query=Via%20Aldo%20Moro%2C%2041B%2C%2024048%20Treviolo%20BG",
        },
        {
          title: "Dov'è lo sposo?",
          link: "https://www.google.com/maps/search/?api=1&query=Via+Lungobrembo+18+Curno",
        },
        {
          title: "Dov'è il matrimonio?",
          link: "https://www.google.com/maps/search/?api=1&query=Chiesa+Annunciazione+Marigolda",
        },
        {
          title: "Dov'è il ricevimento?",
          link: "https://www.google.com/maps/search/?api=1&query=Agriturismo%20Larice%2C%20strada%20per%20San%20Lucio%2C%20Clusone%2C%20BG",
        },
      ],
    };
  },
};
</script>
