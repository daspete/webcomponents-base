<template>
    <div class="gallery">
        <div 
            class="gallery__item"
            v-for="(item, itemId) in Items"
            :key="`gallery-item-${ itemId }-${ item.id }`"
        >
            <img :src="`${ item.url }?${ item.id }`" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: { type: Array | String, default: () => { return [] } }
    },

    computed: {
        Items(){
            let items = this.items
            // hacky solution for array properties in webcomponents
            if(items.length && items[0] == '[') items = JSON.parse(items)
            return items
        }
    }
}
</script>

<style lang="scss">
.gallery {
    display: block;
    width: 1280px;
    max-width: 100%;
    margin: 0 auto;
    
    &__item {
        display: inline-block;
        width: 50%;

        @media screen and (max-width: 639px){
            width: 100%;
        }

        img {
            display: block;
            max-width: calc(100% - 10px);
            margin: 5px;
        }
    }
}
</style>