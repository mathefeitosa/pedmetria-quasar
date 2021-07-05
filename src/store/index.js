import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state() {
      return {
        pesoMinimo: 400,
        peso: 11000,
        idadeAnos: 3,
        idadeMeses: 1,
        superficieCorporal: 0,
        volumeTotalHolliday: 0,
      };
    },
    getters: {
      getPesoEmKg(state) {
        return parseFloat(state.peso / 1000);
      },
      getIdadeEmMeses(state) {
        return parseInt(state.idadeAnos * 12) + parseInt(state.idadeMeses);
      },
      getIdadeEmAnos(state) {
        return parseFloat(state.idadeAnos) + parseFloat(state.idadeMeses / 12);
      },
    },
    mutations: {
      setPeso(state, newPeso) {
        state.peso = newPeso;
      },
      setIdadeMeses(state, newIdadeMeses) {
        state.idadeMeses = newIdadeMeses;
      },
      setIdadeAnos(state, newIdadeAnos) {
        state.idadeAnos = newIdadeAnos;
      },
      setSuperficieCorporal(state, peso) {
        if (peso > 1000) {
          state.superficieCorporal = parseFloat((peso * 4 + 9) / 100);
        } else if (peso <= 1000) {
          state.superficieCorporal = parseFloat((peso * 4 + 7) / (peso + 90));
        }
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
