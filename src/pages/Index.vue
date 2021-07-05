<template>
  <q-page>
    <div class="q-pa-md">
      <div class="flex justify-center">
        <p class="text-h5 q-ma-sm text-uppercase">Dados da criança</p>
      </div>
      <div class="q-pa-md flex row justify-center items-center no-wrap">
        <div class="col-5">
          <q-input
            class="q-pa-sm text-h6"
            v-model="peso"
            color="primary"
            min="400"
            label="Peso em gramas"
            outlined
            @blur="checkPesoValue"
          />
        </div>
        <div class="flex-col justify-center">
          <div class="text-center text-weight-bold">100g</div>
          <div class="q-pl-sm">
            <q-btn
              size="sm"
              color="positive"
              icon="add"
              @click="alteraPeso(100)"
            />
          </div>
          <div class="q-pl-sm">
            <q-btn
              size="sm"
              color="negative"
              icon="remove"
              @click="alteraPeso(-100)"
            />
          </div>
        </div>
        <div class="flex-col justify-center">
          <div class="text-center text-weight-bold">1000g</div>
          <div class="q-pl-sm">
            <q-btn
              size="sm"
              color="positive"
              icon="add"
              @click="alteraPeso(1000)"
            />
          </div>
          <div class="q-pl-sm">
            <q-btn
              size="sm"
              color="negative"
              icon="remove"
              @click="alteraPeso(-1000)"
            />
          </div>
        </div>
      </div>
      <div class="row q-pa-md">
        <div class="col-3">
          <p class="text-weight-bold">{{ labelIdadeAnos }}</p>
        </div>
        <div class="col-9">
          <q-slider
            v-model="idadeAnos"
            :min="0"
            :max="19"
            :step="1"
            color="primary"
            markers
            snap
            label
          />
        </div>
      </div>
      <div class="row q-pl-md q-pr-md">
        <div class="col-3">
          <p class="text-weight-bold">{{ labelIdadeMeses }}</p>
        </div>
        <div class="col-9">
          <q-slider
            v-model="idadeMeses"
            :min="0"
            :max="12"
            :step="1"
            color="primary"
            markers
            snap
            label
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-12">
          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label>Peso seco estimado:</q-item-label>
                <q-item-label caption>(70% do peso)</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ pesoSeco.toFixed(2) }}g</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>{{ $store.state.peso }}</q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "PageIndex",
  setup() {
    const $store = useStore();

    return {
      $store,
    };
  },
  data() {
    return {
      pesoMinimo: this.$store.state.pesoMinimo,
      peso: this.$store.state.peso,
      idadeAnos: this.$store.state.idadeAnos,
      idadeMeses: this.$store.state.idadeMeses,
    };
  },
  watch: {
    peso: function () {
      this.$store.commit("setPeso", this.peso);
    },
    idadeMeses: function () {
      this.$store.commit("setIdadeMeses", this.idadeMeses);
    },
    idadeAnos: function () {
      this.$store.commit("setIdadeAnos", this.idadeAnos);
    },
  },
  methods: {
    alteraPeso(valor) {
      if (this.peso + valor >= this.pesoMinimo) {
        this.peso = this.peso + valor;
      }
    },
    checkPesoValue() {
      if (this.peso < this.pesoMinimo) {
        this.peso = this.pesoMinimo;
      }
    },
  },
  computed: {
    pesoSeco() {
      return this.peso * 0.7;
    },
    labelIdadeMeses() {
      return this.idadeMeses + " " + (this.idadeMeses <= 1 ? "mês" : "meses");
    },
    labelIdadeAnos() {
      return this.idadeAnos + " " + (this.idadeAnos <= 1 ? "ano" : "anos");
    },
  },
};
</script>
