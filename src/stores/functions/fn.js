import { reactive } from 'vue';
import { ajax } from './ajax'
import { storageLocal } from './storageLocal';
import { chart } from './chart';
import { math } from './math';

export const fn = reactive({
    ajax,
    storageLocal,
    chart,
    math
})