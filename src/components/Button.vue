<template>
    <button :class="ButtonClasses" :style="ButtonStyles">
        <span><slot>Default button text</slot></span>
    </button>
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
        ButtonClasses(){
            return {
                'button': true,
                'button--small': this.small == true
            }
        },

        ButtonStyles(){
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
.button {
    font-family: Arial, Helvetica, sans-serif;
    display: inline-block;
    padding: 5px 21px;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    border: 0;
    position: relative;
    outline: 0;

    

    &--small {
        padding: 4px 6px;
        font-size: 10px;
    }

    span {
        position: relative;
        z-index: 2;
        text-shadow: 0 0 2px rgba(black, 0);
        transition: all 0.16s ease-out;
    }

    &:after {
        position: absolute;
        content: '';
        border-radius: 2px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 0 0 rgba(black, 0);
        transition: all 0.16s ease-out;
        z-index: 1;
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%);
    }

    &:focus {
        &:after {
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            box-shadow: 0 0 4px rgba(black, 0.7);
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
        }

        span {
            text-shadow: 0 0 2px rgba(black, 1);
        }
    }

    &:hover {
        &:after {
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            box-shadow: 0 0 4px rgba(black, 0.5);
            background: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%);
        }

        span {
            text-shadow: 0 0 2px rgba(black, 1);
        }
    }

    
}
</style>

