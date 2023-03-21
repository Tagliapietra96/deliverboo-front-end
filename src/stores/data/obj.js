import {reactive} from 'vue';

export const obj = reactive({
    cardShow: {
        card: Object,
        active: Boolean,
        quantity: Number
    }
})