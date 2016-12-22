<template>
    <div class="header">
        <div class="header-title border-1px">
            <i class="iconfont" @click="showSilder">&#xe660;</i>
            <h1 class="title">全部</h1>
            <span class="write">发表</span>
        </div>
        <transition name="move">
            <div class="header-silder" v-show="silderShow" @click="hideSilder">
                <div class="mark"></div>
                <div class="silder-nav">
                    <div class="user" v-if="!userInfo.avatar_url" @click="login">
                        <img src="../assets/logo.png" alt="">
                        <span class="name">登录</span>
                    </div>
                    <div class="user" v-else @click="user">
                        <img :src="userInfo.avatar_url" alt="">
                        <span class="name">{{ userInfo.loginname }}</span>
                    </div>
                    <ul class="tag-list">
                        <li v-for="(tag, index) in tags">{{ tag.text }}</li>
                    </ul>
                    <ul class="other-list">
                        <li>关于</li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    export default{
        data () {
            return {
                silderShow: false,
                tags: [
                    {
                        tag: "all",
                        text: "全部"
                    },
                    {
                        tag: "good",
                        text: "精华"
                    },
                    {
                        tag: "weex",
                        text: "weex"
                    },
                    {
                        tag: "share",
                        text: "分享"
                    },
                    {
                        tag: "ask",
                        text: "问答"
                    },
                    {
                        tag: "job",
                        text: "招聘"
                    }
                ]
            };
        },
        components: {},
        methods: {
            // 展开侧边栏
            showSilder() {
                return this.silderShow = true;
            },
            // 隐藏侧边栏
            hideSilder() {
                return this.silderShow = false;
            },
            // 登录跳转
            login() {
                this.$router.push('/login');
            },
            // 用户信息页面
            user() {
                this.$router.push('/userInfo');
            }
        },
        computed: {
            ...mapGetters(['userInfo'])
        }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scope>
    @import "../common/scss/_mixins";

    .header {
        .header-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 80px;
            font-size: 36px; /*px*/
            @include border-1px(rgba(7, 17, 27, .1));
            box-shadow: 0 0 8px rgba(0,0,0,.2);
            & > i {
                padding: 0 40px;
                font-size: 36px; /*px*/
            }
            .title {
                font-size: 36px; /*px*/
                padding: 0 40px;
            }
            .write {
                padding-right: 40px;
            }
        }
        .header-silder {
            opacity: 1;
            &.move-enter-active, &.move-leave-active {
                transition: all .5s
            }
            &.move-enter, &.move-leave-active {
                opacity: 0;
            }
            &.move-enter-active .silder-nav, &.move-leave-active .silder-nav {
                transition: all .5s
            }
            &.move-enter .silder-nav, &.move-leave-active .silder-nav {
                transform: translate3d(-100%, 0, 0);
            }
            .mark {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, .3);
                z-index: 998;
            }
            .silder-nav {
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding-left: 40px;
                width: 388px;
                height: 100%;
                position: fixed;
                left: 0;
                top: 0;
                background: url("../assets/bg.png") 50%;
                background-size: 72%;
                color: #fff;
                transform: translate3d(0, 0, 0);
                z-index: 999;
                .user {
                    border-bottom: 1px solid #626262;
                    padding-bottom: .3rem;
                    margin-bottom: .3rem;
                    img {
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        vertical-align: middle;
                        margin-right: 10px;
                    }
                    .name{
                        vertical-align: middle;
                        font-size: 32px;/*px*/
                    }
                }
                .tag-list{
                    border-bottom: 1px solid #626262;
                    padding-bottom: .3rem;
                    margin-bottom: .3rem;
                }
                .tag-list, .other-list{
                    li{
                        height: 70px;
                        line-height: 70px;
                        font-size: 30px;/*px*/
                    }
                }
            }
        }
    }
</style>
