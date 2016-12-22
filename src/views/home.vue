<template>
    <div class="home">
        <v-header></v-header>
        <div class="container">
            <topicList></topicList>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    import header from 'components/header';
    import topicList from 'components/topicList';
    export default{
        props: {},
        data() {
            return {}
        },
        components: {
            'v-header': header,
            topicList
        },
        methods: {},
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>
    
<style rel="stylesheet/scss" lang="scss" scoped>
    .container{
        background: #f2f2f2;
    }
</style>