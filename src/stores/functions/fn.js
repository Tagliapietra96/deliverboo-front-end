import { reactive } from 'vue';
import { ajax } from './ajax'
import { storageLocal } from './storageLocal';

export const fn = reactive({
    ajax,
    storageLocal
})