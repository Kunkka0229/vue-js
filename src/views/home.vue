<template>
    <div class="home">
        <v-header></v-header>
        <topicList></topicList>
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

</style>