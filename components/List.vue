<template>
    <ul class="list">
        <li v-for="(item, itemId) in Items" :key="`item-${ itemId }`">
            {{ item }}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        items: { type: Array, default: () => { return [] } } 
    },

    computed: {
        Items(){
            // Hacky solution for array and object props
            return this.$parent.$options.customElement.items || this.items
        }
    },

    mounted(){

    },

    methods: {
        
    }
}
</script>

<style lang="scss">
.btn {
    
}
</style>