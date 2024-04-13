<template>
  <v-container class="d-flex flex-column justify-center align-center pa-0" style="max-width: none">
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
          <br />La sposa <b @dblclick="hack = true"> dovrebbe </b>arrivare
          alle ore
          11.00
          <v-btn block variant="outlined" :href="directions[0].link" class="my-2" v-bind:key="directions[0].title">
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
          In seguito vi aspettiamo per festeggiare presso <br />
          Agriturismo Larice <br />
          Strada per San Lucio, Clusone
          <v-btn block variant="outlined" :href="directions[1].link" class="my-2" v-bind:key="directions[1].title">
            Indicazioni
            <v-icon icon="fas fa-route" size="small" class="ml-4"> </v-icon>
          </v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <!-- Conferma -->
      <v-expansion-panel @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>Conferma</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-check"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          Cliccando qui trovate il form per confermare la vostra presenza
          <v-btn block variant="outlined" href="https://forms.gle/M7P9UHTyr1pn7Ha86" class="my-2">
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
          Il regalo più grande sarà condividere con voi questo giorno di gioia.
          Se però vi divertite ad ascoltare i racconti dei nostri viaggi, più o
          meno disagevoli, e volete sponsorizzare le nostre prossime avventure,
          per esempio per sostituire la tenda con un camper, qui di seguito
          trovate i nostri riferimenti:
          <br />
          <span>IBAN: IT 72I0503411103000000002590</span>
          <br />
          Intestato a: Lisa Lozza e Mattia Ronzoni<br />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <!-- Bomboniere -->
      <v-expansion-panel v-if="isTheMoment" @click="scrollIntoView" elevation="0">
        <v-expansion-panel-title disable-icon-rotate>
          <h3>Istruzioni Bomboniere</h3>
          <template v-slot:actions>
            <v-icon icon="fas fa-pen-ruler"> </v-icon>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-center">
          <v-carousel hide-delimiter-background height="200">
            <template v-slot:prev="{ props }">
              <v-btn icon="fas fa-arrow-left" variant="text" color="black" @click="props.onClick"></v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn icon="fas fa-arrow-right" variant="text" @click="props.onClick"></v-btn>
            </template>
            <v-carousel-item v-for="instruction in instructions" :key="instruction.title">
              <v-card class="mx-auto my-2" height="200" max-width="300" @click=" downloadFile(instruction.path)">
                <v-img :src="instruction.image" class="mt-2" height="150" aspect-ratio="16/9">
                  <v-card-title :style="`text-align: ${instruction.side}`">{{ instruction.title }}</v-card-title>
                </v-img>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      hack: false,
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
      instructions: [{
        title: '1 e 2',
        image: '/10329_alt3.webp',
        path: '/10329_1_2.pdf',
        side: "left"
      },
      {
        title: '3 e 4',
        image: '/10329_alt4.webp',
        path: '/10329_3_4.pdf',
        side: "left"

      },
      {
        title: '5 e 6',
        image: '/10329_alt2.webp',
        path: '/10329_5_6.pdf',
        side: "right"
      }]
    };
  },
  computed: {
    isTheMoment() {
      return this.hack || new Date() > new Date("2024-05-31T22:00:00");
    },
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
      }, 250);
    },
    downloadFile(path: string) {
      window.open(path, "_blank");
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
  background-color: rgba(255, 218, 81, 0.8);
  font-family: "Cocogoose-light" !important;
}
</style>
