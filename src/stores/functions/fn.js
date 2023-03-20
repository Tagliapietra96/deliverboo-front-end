import { reactive } from 'vue';
import { ajax } from './ajax'
import { storageLocal } from './storageLocal';
import { chart } from './chart';
import { math } from './math';
import { dish } from './dish';

export const fn = reactive({
    ajax,
    storageLocal,
    chart,
    math,
    dish
})