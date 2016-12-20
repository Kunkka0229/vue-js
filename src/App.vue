<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';

    export default{
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
