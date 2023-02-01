<template>
  <q-card
    class="q-pa-none no-shadow items-center"
  >
    <q-card-section class="row q-pa-none">
      <div class="col-4 row q-pt-sm justify-center">
        <q-img
          :src="img"
          spinner-color="red"
        />
      </div>
      <div class="col-8 column q-pa-none">
        <div class="text-title q-pa-none">
          {{ title }}
        </div>
        <div class="text-subtitle row full-width q-mt-sm">
          <div
            class="text-subtitle__year"
          >
            {{ year }}
          </div>
          <div class="text-subtitle__name">
            {{ subtitle }}
          </div>
        </div>
        <div class="text-description">
          <p>{{ description }}</p>
        </div>
      </div>
    </q-card-section>
    <q-separator class="q-mt-lg" />
  </q-card>
</template>

<script setup lang="ts">

interface Props {
  img: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

const props = defineProps<Props>()

</script>

<style lang="scss" scopeed>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;900&display=swap");

%font {
  font-family: "Heebo";
  font-style: normal;
}
.q-card {
  width: 860px;
  height: 230px;
}

.q-img {
  width: 246px;
  height: 180px;
  border-radius: 6px;
}

.text-title {
  @extend %font;
  font-weight: 700;
  font-size: 30px;
}

.text-subtitle {
  height: 34px;
  @extend %font;
}
.text-subtitle__year {
  width: 62px;
  height: 25px;
  background: #142850;
  border-radius: 16px;
  color: white;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
}

.text-subtitle__name {
  width: 80%;
  height: 25px;
  color: #8695A4;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin-left: 26px;
}

.text-description {
  @extend %font;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
  margin-top: 15px;
}

.q-separator {
  width: 830px;
  margin-left: 20px;
}

</style>
