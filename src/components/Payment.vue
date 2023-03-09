<template>
    <div class="container my-5">
        <div class="my-3">
            Payment Component

            <v-braintree 
                :authorization="authorization"
                locale="it_IT"
                @success="onSuccess"
                @error="onError"
            ></v-braintree>

        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        authorization: {
            required: true,
            type: String
        }
    },
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        onSuccess (payload) {
            let nonce = payload.nonce;
            // Do something great with the nonce...
        },
        onError (error) {
            let message = error.message;
            // Whoops, an error has occured while trying to get the nonce
        }
    }
};
</script>
  
<style lang="scss" scoped>
</style>
