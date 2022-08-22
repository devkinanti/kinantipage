<template>
  <section id="kursus">
    <v-container fluid class="mt-2">
      <v-row align="center" justify="center">
        <v-col >
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                  @click="feature.action"
                >
                  <v-img
                    :src="feature.img"
                    max-width="300px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "PETUNJUK KURSUS",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          action:(e)=>{window.location.replace("https://lms.pedulicovid19-pemasyarakatan.id/moodle/course/view.php?id=2")},
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "MODUL A: UMUM",
          text: "PENCEGAHAN DAN PENANGGULANGAN COVID-19 DI UPT",
          action:(e)=>{window.location.replace("https://lms.pedulicovid19-pemasyarakatan.id/moodle/course/view.php?id=2")},
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "MODUL B: TENAGA MEDIS",
          text: "PENCEGAHAN DAN PENANGGULANGAN COVID-19 DI UPT",
          action:(e)=>{window.location.replace("https://lms.pedulicovid19-pemasyarakatan.id/moodle/course/view.php?id=1")},
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    
    learning(){
      window.location.replace("http://lms.pedulicovid19-pemasyarakatan.id");
    },
   
  },
};
</script>


<style scoped>
#kursus {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>