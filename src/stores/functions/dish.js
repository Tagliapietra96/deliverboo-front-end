import {reactive} from 'vue';
import {store} from '../main-store';

export const dish = reactive({
    dishFilter() {
        store.dt.arr.antipasti = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Antipasto';
        });
        store.dt.arr.pizze = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Pizza';
        });
        store.dt.arr.primi = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Primo';
        });
        store.dt.arr.secondi = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Secondo';
        });
        store.dt.arr.contorni = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Contorno';
        });
        store.dt.arr.bevande = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Bevanda';
        });
        store.dt.arr.dolci = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Dolce';
        });
        store.dt.arr.panini = store.dt.arr.dishesList.filter((element) => {
          return element.type === 'Panino';
        });
      }
})