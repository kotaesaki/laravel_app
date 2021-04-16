<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                    <div class="LoginBtn" @click="lineLogin">
                        Lineログイン
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            lineLogin() {
                this.$store.dispatch('line_auth/Login');
            },
        },
    }
</script>
