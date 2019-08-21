<template>
    
    <div v-if="item">
        <!-- {{item}} -->
        <slot name="item1" :item="item"/>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            keys: 2
        }
    },
    computed: {
        scopes () {
            return {item: this.item , keys: this.keys}
        }
    }
}
</script>
