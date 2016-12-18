<template>
    <div class="header">
        <div class="header-title border-1px">
            <i class="iconfont" @click="toggleSilder">&#xe660;</i>
            <h1 class="title">全部</h1>
            <span class="write">发表</span>
        </div>
        <transition name="move">
            <div class="header-silder" v-show="silderShow">
                <div class="mark"></div>
                <ul class="silder-wrapper">
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data () {
            return {
                silderShow: false
            };
        },
        components: {},
        methods: {
            toggleSilder() {
                return this.silderShow = true;
            }
        }
    };
</script>

<style lang="scss" scope>
    @import "../common/scss/mixins";

    .header {
        .header-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 80px;
            font-size: 36px; /*px*/
            @include border-1px(rgba(7, 17, 27, .1));
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
                opacity:0;
            }
            &.move-enter-active .silder-wrapper, &.move-leave-active .silder-wrapper {
                transition: all .5s
            }
            &.move-enter .silder-wrapper, &.move-leave-active .silder-wrapper {
                transform: translate3d(-100%, 0, 0);
            }
            .mark {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                background: rgba(7, 17, 27, .1);
            }
            .silder-wrapper {
                width: 375px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background: #000;
                color: #fff;
                transform: translate3d(0, 0, 0);
            }
        }
    }
</style>
