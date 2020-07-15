<template>
    <div>
        <button @click="updateCounter(1)">add</button>
        <button @click="updateCounter(-1)">Min</button>
    </div>
</template>

<script>
export default {
    methods:{
        updateCounter(val){
            this.$store.commit('changeCounter',val)
        }
    }
}
</script>