<template>
    <div class="topic-list">
        <ul>
            <li class="item">
                <div class="item-user">
                    {{topics}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    import {GET_TOPIC_LIST} from '../store/mutation-types';
    import {LOGIN} from '../store/mutation-types';
    export default{
        props: {},
        data() {
            return {
                searchOption: {
                    page: 1,
                    tab: 'all',
                    limit: 20,
                    mdrender: false
                }
            }
        },
        mounted() {
            this._getTopicList();
        },
        methods: {
            _getTopicList() {
                this.$store.dispatch(GET_TOPIC_LIST, this.searchOption);
            }
        },
        computed: {
            ...mapGetters(['topics'])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>