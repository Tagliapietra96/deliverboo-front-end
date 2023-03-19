import { reactive } from 'vue';


export const arr = reactive({
    headerLinks: [
        {
            name: "Lavora con noi",
            url: "http://127.0.0.1:8000",
            active: false,
            icon: "fa-solid fa-user-tie",
        },
        {
            name: "Vai ai ristoranti",
            url: { path: "/i-nostri-ristoranti" },
            active: false,
            icon: "fa-solid fa-utensils",
        },
        {
            name: "Il tuo carrello",
            url: { path: "/cart" },
            active: false,
            icon: "fa-solid fa-cart-shopping",
        },
    ],
    categoriesImgs: [
        "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuYXRpb25hbCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1593560704563-f176a2eb61db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1583953595980-e58272121563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHVuYSUyMHN0ZWFrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1592686092916-672fa9e86866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHR1bmElMjBzdGVha3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1604835071149-e069ebdd9595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1651946825617-1471d2bf0f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    ],
    restaurantsList: Array,
    categoriesList: Array,
    selectedCategories: Array,
    dishesList: Array,
    antipasti: Array,
    pizze: Array,
    primi: Array,
    secondi: Array,
    contorni: Array,
    bevande: Array,
    dolci: Array,
    panini: Array,
    myChart: Array,
    payLink: Array,
}) 