<template>
    <base-layout>
      <template #header>
        <img alt="Vue logo" src="../assets/logo.png">
      </template>
      <ul>
        <li v-for="(item, index) in posts" :key="item.id">
            <router-link :to="{name: 'post', params: { id: item.id, post: item, nextPost: index + 1 === posts.length ? posts[0] : posts[index +1], nextPostId: index + 1 === posts.length ? posts[0].id : posts[index + 1].id }}">{{item.title}}</router-link>
        </li>
      </ul>
      <template #footer>
        <h1>Footer</h1>
      </template>
    <router-view/>
    </base-layout>
</template>

<script>
    const { uuid } = require('uuidv4');
    export default {
        created(){
            this.posts = [{
                id: uuid(),
                title: 'First Blog Post',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae fugiat tempora? Delectus voluptatem, reprehenderit consequatur in amet, quaerat reiciendis ea fuga assumenda nam animi totam id aperiam enim sapiente.'
            },
            {
                id: uuid(),
                title: 'Second Blog Post',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae fugiat tempora? Delectus voluptatem, reprehenderit consequatur in amet, quaerat reiciendis ea fuga assumenda nam animi totam id aperiam enim sapiente.'
            },
            {
                id: uuid(),
                title: 'Third Blog Post',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae fugiat tempora? Delectus voluptatem, reprehenderit consequatur in amet, quaerat reiciendis ea fuga assumenda nam animi totam id aperiam enim sapiente.'
            }]
        },
        data(){
            return {
                posts: []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>