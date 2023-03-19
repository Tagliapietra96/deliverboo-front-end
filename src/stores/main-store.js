import { reactive } from 'vue';
import { dt } from './data/dt'
import { fn } from './data/fn';

export const store = reactive({
    dt,
    fn
})