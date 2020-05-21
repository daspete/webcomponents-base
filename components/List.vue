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
            let items = this.$parent.$options.customElement.items || this.items
            if(items[0] && items[0] == '[') return JSON.parse(items)

            return items
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