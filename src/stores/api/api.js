import { reactive } from 'vue';
import { categories } from './categories'
import { restaurants } from './restaurants'
import { dishes } from './dishes'

export const api = reactive({
    categories,
    restaurants,
    dishes
})