<template>
    <div>
        <button @click="dummyLogin">Login</button>
    </div>
</template>

<script>
    export default {
        methods: {
            dummyLogin(){
                alert("redirect")
                this.$router.push({ name: this.$route.query.redirect || 'home', params: { dummyAuth: true } })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>