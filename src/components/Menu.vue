<template>
  <v-container
    class="d-flex flex-column justify-center align-center"
    style="background-color: rgba(94, 119, 69, 0.7); max-width: none"
  >
    <!-- accordion -->
    <v-expansion-panels accordion>
      <!-- Cerimonia -->
      <v-expansion-panel
        style="background-color: rgba(94, 119, 69, 0.7)"
        @click="scrollIntoView"
      >
        <v-expansion-panel-title>
          <h3>Cerimonia</h3>
          <v-icon icon="fas fa-church" size="small" class="ml-4"> </v-icon>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
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
      <v-expansion-panel
        style="background-color: rgba(94, 119, 69, 0.7)"
        @click="scrollIntoView"
      >
        <v-expansion-panel-title>
          <h3>Ricevimento</h3>
          <v-icon icon="fas fa-utensils" size="small" class="ml-4"> </v-icon>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
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
      <!-- Regalo -->
      <v-expansion-panel
        style="background-color: rgba(94, 119, 69, 0.7)"
        @click="scrollIntoView"
      >
        <v-expansion-panel-title>
          <h3>Lista nozze</h3>
          <v-icon icon="fas fa-gift" size="small" class="ml-4"> </v-icon>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          IBAN: IT 00 A 00000 00000 000000000000 <br />
          Intestato a: Lisa & Mattia <br />
          Causale: Lista nozze
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
import { nextTick } from "vue";

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
      nextTick(() => {
        scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      });
    },
  },
};
</script>
