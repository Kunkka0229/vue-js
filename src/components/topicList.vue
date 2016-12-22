<template>
    <div class="topic-list">
        <ul>
            <li class="item" v-for="topic in topics.data">
                <router-link class="item-wrapper" :to="'/topic/' + topic.id">
                    <div class="item-user">
                        <div class="user-avatar">
                            <img :src="topic.author.avatar_url" alt="">
                        </div>
                        <div class="user-detail">
                            <span class="username">{{ topic.author.loginname }}</span>
                            <span class="label" v-if="topic.top">置顶</span>
                            <span class="label">{{ topic.tab | textFormat }}</span>
                            <p class="user-time">{{ topic.create_at | formatDateToEditor }}</p>
                        </div>
                    </div>
                    <div class="item-content border-1px">
                        <p class="item-content-title">{{ topic.title }}</p>
                    </div>
                    <div class="item-btn-wrapper">
                        <div class="btn">
                            <i class="iconfont">&#xe609;</i>
                            <span>{{ topic.visit_count }}</span>
                        </div>
                        <div class="btn">
                            <i class="iconfont">&#xe670;</i>
                            <span>{{ topic.reply_count }}</span>
                        </div>
                        <div class="btn">
                            <i class="iconfont">&#xe63f;</i>
                            <span>分享</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    import {GET_TOPIC_LIST} from '../store/mutation-types';
    import {LOGIN} from '../store/mutation-types';
    import {formatDateToEditor} from '../common/js/date';
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
                    job: '招聘',
                    weex: 'weex'
                }
                if (!value) {
                    return '暂无'
                }
                str = map[value];
                return str;
            },
            formatDateToEditor(date) {
                return formatDateToEditor(date);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../common/scss/mixins";

    .topic-list {
        padding-top: 20px;
        .item {
            display: flex;
            padding-top: 30px;
            background: #fff;
            a {
                display: block;
                color: #333;
                width: 100%;
                .item-user {
                    display: flex;
                    flex-direction: row;
                    padding: 0 20px;
                    .user-avatar {
                        flex: 0 0 80px;
                        margin-right: 30px;
                        width: 80px;
                        height: 80px;
                        img {
                            width: 100%;
                            border-radius: 50%;
                        }
                    }
                    .user-detail {
                        flex: 1;
                        .username {
                            font-size: 30px; /*px*/
                            color: #369219;
                            margin-right: 10px;
                        }
                        .label {
                            padding: 5px 10px;
                            font-size: 28px; /*px*/
                            color: #369219;
                            border: 1px solid #369219;
                            margin-right: 10px;
                        }
                        .user-time {
                            margin-top: 5px;
                            color: #999;
                        }
                    }
                }
                .item-content {
                    @include border-1px(rgba(7, 17, 27, .1));
                    padding: 36px 20px 20px;
                    .item-content-title {
                        font-size: 30px; /*px*/
                    }
                }
                .item-btn-wrapper {
                    display: flex;
                    flex-direction: row;
                    height: 84px;
                    width: 100%;
                    line-height: 84px;
                    text-align: center;
                    font-size: 0;
                    .btn {
                        flex: 1;
                        position: relative;
                        color: #929292;
                        i {
                            font-size: 30px; /*px*/
                            vertical-align: top;
                            margin-right: 8px;
                        }
                        span {
                            font-size: 28px; /*px*/
                            display: inline-block;
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            right: 0;
                            transform: translate3d(0, -50%, 0);
                            width: 1px;
                            height: 70%;
                            background-image: linear-gradient(#fff, #e7e7e7, #fff);
                        }
                        &:last-child:after{
                            display: none;
                        }
                    }
                }
            }
        }
        .item + .item {
            margin-top: 20px;
        }
    }
</style>