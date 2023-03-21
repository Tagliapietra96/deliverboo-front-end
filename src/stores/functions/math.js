import { reactive } from 'vue';

export const math = reactive({
    totalPrice(num1, num2) {
        let total = num1 * num2;
        return (Math.round(total * 100) / 100).toFixed(2);
    },
})