import { reactive } from 'vue';


export const str = reactive({
    paymentUrl:
        "http://127.0.0.1:8000/api/orders/make/payment?token=fake-valid-nonce",
    beUrl: "http://127.0.0.1:8000",
    categoriesUrl: "/api/categories",
    restaurantsUrl: "/api/restaurants/index",
    restaurantFiltersUrl: "/api/restaurants",
    dishesUrl: "/api/dishes/" ,
    dishShowUrl: "/api/dishes/show/",
    restaurantsMessage: String,
}) 