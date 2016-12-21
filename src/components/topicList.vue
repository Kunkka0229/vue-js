<template>
    <div class="topic-list">
        <ul>
            <li class="item" v-for="topic in topics.data" :data-id="topic.id">
                <div class="item-user">
                    <div class="user-avatar">
                        <img :src="topic.author.avatar_url" alt="">
                    </div>
                    <div class="user-detail">
                        <span class="username">{{ topic.author.loginname }}</span>
                        <span>置顶</span>
                        <span>{{ topic.tab | textFormat }}</span>
                    </div>
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
        },
        filters: {
            textFormat(value) {
                let str = '';
                let map = {
                    share: '分享',
                    ask: '问答',
                    job: '招聘'
                }
                if(!value){
                    return '暂无'
                }
                str = map[value];
                return str;
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>