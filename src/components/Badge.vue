<template>
    <div :class="BadgeClasses" :style="BadgeStyles">
        <slot>i am a wonderful Default badge text</slot>
    </div>
</template>

<script>
export default {
    props: {
        background: { type: String, default: 'green' },
        color: { type: String, default: 'white' },
        bold: { type: Boolean, default: false },
        small: { type: Boolean, default: false }
    },

    computed: {
        BadgeClasses(){
            return {
                'badge': true,
                'badge--small': this.small == true
            }
        },

        BadgeStyles(){
            return {
                backgroundColor: this.background,
                color: this.color,
                fontWeight: this.bold ? 700 : 400
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.badge {
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
    padding: 5px 21px;
    border-radius: 20px;
    font-size: 14px;

    &--small {
        padding: 4px 6px;
        border-radius: 20px;
        font-size: 10px;
    }
}
</style>

