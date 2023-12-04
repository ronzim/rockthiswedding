<template>
  <v-container
    class="d-flex flex-column justify-center align-center pa-0"
    style="max-width: none"
  >
    <!-- accordion -->
    <v-expansion-panels variant="accordion">
      <!-- Cerimonia -->
      <v-expansion-panel @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>Cerimonia</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-church"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          Chiesa dell'Annunciazione <br />
          Via Abruzzi (Marigolda), Curno
          <v-btn
            block
            variant="outlined"
            :href="directions[0].link"
            class="my-2"
            v-bind:key="directions[0].title"
          >
            Indicazioni
            <v-icon icon="fas fa-route" size="small" class="ml-4"> </v-icon>
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <!-- Ricevimento -->
      <v-expansion-panel @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>Ricevimento</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-utensils"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          Agriturismo Larice <br />
          Strada per San Lucio, Clusone
          <v-btn
            block
            variant="outlined"
            :href="directions[1].link"
            class="my-2"
            v-bind:key="directions[1].title"
          >
            Indicazioni
            <v-icon icon="fas fa-route" size="small" class="ml-4"> </v-icon>
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <!-- Conferma -->
      <v-expansion-panel @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>RSVP</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-check"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          <v-btn
            block
            variant="outlined"
            href="https://forms.gle/M7P9UHTyr1pn7Ha86"
            class="my-2"
          >
            Vai alla conferma
            <v-icon icon="fas fa-arrow-right" size="small" class="ml-4">
            </v-icon>
          </v-btn>
          <!-- <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfl7U6OkxxPzcsNUaOefdC6zPKINydfhbRTq9nEWYUlQhQ7rA/viewform?embedded=true"
            width="640"
            height="776"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Caricamento…</iframe
          > -->
        </v-expansion-panel-text>
      </v-expansion-panel>
      <!-- Regalo -->
      <v-expansion-panel @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>Regalo</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-gift"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          IBAN: IT 00 A 00000 00000 000000000000 <br />
          Intestato a: Lisa & Mattia <br />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      directions: [
        // {
        //   title: "Dov'è la sposa?",
        //   link: "https://www.google.com/maps/search/?api=1&query=Via%20Aldo%20Moro%2C%2041B%2C%2024048%20Treviolo%20BG",
        // },
        // {
        //   title: "Dov'è lo sposo?",
        //   link: "https://www.google.com/maps/search/?api=1&query=Via+Lungobrembo+18+Curno",
        // },
        {
          title: "Cerimonia",
          link: "https://www.google.com/maps/search/?api=1&query=Chiesa+Annunciazione+Marigolda",
        },
        {
          title: "Ricevimento",
          link: "https://www.google.com/maps/search/?api=1&query=Agriturismo%20Larice%2C%20strada%20per%20San%20Lucio%2C%20Clusone%2C%20BG",
        },
      ],
    };
  },
  methods: {
    scrollIntoView(evt: Event) {
      // if (evt.target instanceof HTMLElement) {
      //   evt.target.scrollIntoView({ behavior: "smooth" });
      // }
      setTimeout(() => {
        scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    },
  },
};
</script>

<style lang="css" scoped>
.v-expansion-panel-header {
  padding: 0px 24px !important;
}
.v-expansion-panel {
  border-radius: 0% !important;
  background-color: rgba(42, 109, 196, 0.564);
}
</style>
