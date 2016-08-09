<style>

.counter {
    cursor: pointer;
    margin: 100px auto;
    border-radius: 3px;
    width: 200px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 5rem;
    background-color: #f0f0f0;
    box-shadow: inset 0 0 10px #ccc;
    user-select: none;
}

</style>

<template>

<div class='counter' @click='increment'>
    {{ count }}
</div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'increment'
        ])
    },
    computed: {
        ...mapGetters({
            count: 'getCount'
        })
    }
}
</script>
