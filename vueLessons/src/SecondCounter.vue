<template>
    <h2>second {{counter}}</h2>
</template>
<script>
    export default {
        computed:{
            counter(){
                return this.$store.getters.computedCounter
            }
        }
    }
</script>