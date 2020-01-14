<template>
    <div>
        <header>
            <slot name="header">Header</slot>
        </header>
        <section>
            <slot></slot>
        </section>
        <footer>
            <slot name="footer">Footer</slot>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>