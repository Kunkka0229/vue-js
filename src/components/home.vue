<template>
    <div class="home">
        <v-header></v-header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    import header from 'components/header';
    export default{
        props: {},
        data() {
            return {}
        },
        components: {
            'v-header': header
        },
        methods: {},
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>
    
<style rel="stylesheet/scss" lang="scss" scoped>

</style>