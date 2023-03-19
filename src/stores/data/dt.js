import { reactive } from 'vue';
import { bool } from './bool';
import { arr } from './arr';
import { str } from './str';
import { num } from './num';


export const dt = reactive({
    bool,
    arr,
    num,
    str
}) 