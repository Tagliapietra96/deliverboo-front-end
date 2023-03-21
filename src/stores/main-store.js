import { reactive } from 'vue';
import { dt } from './data/dt'
import { fn } from './functions/fn';

export const store = reactive({
    dt,
    fn
})