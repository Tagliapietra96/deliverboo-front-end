import {reactive} from 'vue';
import {categories} from './categories'
import {restaurants} from './restaurants'

export const api = reactive({
    categories,
    restaurants
})