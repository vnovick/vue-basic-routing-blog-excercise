<template>
    <div>
        {{ $route.params.id}}
        <h1>{{post.title}}</h1>
        <article>{{post.content}}</article>
        {{nextPostId}}
        <router-link :to="{name: 'post', params: { id: nextPostId, post: nextPost}}">Next Post</router-link>
    </div>
</template>

<script>
    export default {
        name: 'PostComponent',
        created(){
            alert("Post fetched")
        },
        beforeRouteUpdate(to, from, next){
            if (to.params.id !== from.params.id) {
                    if (!to.params.post){
                        alert("No post provided")
                    } else {
                        alert("Post fetched")
                        next()
                    }
            }
        },
        props: ['post', 'nextPost', 'nextPostId']
    }
</script>

<style lang="scss" scoped>

</style>