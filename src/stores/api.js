import { reactive } from 'vue';
import axios from 'axios';

export const api = reactive({
    get: {
        index: {
            categories(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            },
            restaurants(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            },
            dishes(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            }
        },
        show:{
            categories(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            },
            restaurants(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            },
            dishes(){
                axios.get()
                .then(resp => {

                })
                .catch(e => {

                });
            }
        }
    },
    post:{

    }
});