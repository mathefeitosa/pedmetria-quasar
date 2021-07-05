<template>
  <q-page padding>
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <p class="text-h5 text-center">Regra de Holliday-Segar</p>
          </div>
          <hr />
          <q-list>
            <q-item>
              <q-item-section>Soro Glicosado a 5%:</q-item-section>
              <q-item-section>
                {{ volumeTotalHol.toFixed(2) }} ml
              </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Sódio 10%:</q-item-label>
              </q-item-section>
              <q-item-section> {{ volNa10.toFixed(2) }} </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Sódio 20%:</q-item-label>
              </q-item-section>
              <q-item-section> {{ volNa20.toFixed(2) }} </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Potássio 10%:</q-item-label>
              </q-item-section>
              <q-item-section> {{ volPot10.toFixed(2) }} </q-item-section>
            </q-item>
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Potásssio 19,2%:</q-item-label>
              </q-item-section>
              <q-item-section> {{ volPot19.toFixed(2) }} </q-item-section>
            </q-item>
          </q-list>
          <hr />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Hidratação",
  data() {
    return {
      peso: this.$store.state.peso,
    };
  },
  computed: {
    volumeTotalHol() {
      let pesoEmKg = this.peso / 1000;
      if (pesoEmKg < 10) {
        return pesoEmKg * 100;
      }
      if (pesoEmKg >= 10 && pesoEmKg <= 20) {
        return 1000 + (pesoEmKg - 10) * 50;
      }
      if (pesoEmKg < 20) {
        return 1500 + (pesoEmKg - 20) * 20;
      }
      return 0;
    },
    volNa10() {
      return (80 * this.volumeTotalHol) / 1000;
    },
    volNa20() {
      return (40 * this.volumeTotalHol) / 1000;
    },
    volPot10() {
      return (17.85 * this.volumeTotalHol) / 1000;
    },
    volPot19() {
      return (10 * this.volumeTotalHol) / 1000;
    },
  },
};
</script>
