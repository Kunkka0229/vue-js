<template>
    <div class="login">
        <header>
            <router-link to="/">
                <i class="iconfont">&#xe600;</i>
            </router-link>
            <h1>登录</h1>
        </header>
        <section class="login-wrapper">
            <input class="input-text" type="text" placeholder="Access Token" autofocus v-model="accessToken"
                   maxlength="36" @keydown.enter="handleLogin">
            <button class="btn" @click="handleLogin">登录</button>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    import {LOGIN} from '../store/mutation-types';

    export default{
        props: {},
        data() {
            return {
                accessToken: ''
            }
        },
        methods: {
            handleLogin() {
                const data = {
                    accesstoken: this.accessToken
                };
                this.$store.dispatch(LOGIN, data);
                this.$router.push('/userInfo');
            }
        },
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .login {
        header {
            width: 100%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            box-shadow: 0 0 8px rgba(0, 0, 0, .2);
            position: relative;
            .iconfont {
                position: absolute;
                left: 0;
                top: 0;
                display: inline-block;
                font-size: 60px; /*px*/
                color: #333;
                padding: 0 20px;
            }
            h1 {
                height: 100%;
                line-height: 80px;
                font-size: 36px; /*px*/
            }
        }
        .login-wrapper {
            padding: 30px;
            margin-top: 100px;
            .input-text {
                border: none;
                outline: none;
                width: 100%;
                height: 66px;
                line-height: 66px;
                border-bottom: 1px solid #22c37b;
                font-size: 28px; /*px*/
                padding-left: 10px;
            }
            .btn {
                width: 100%;
                height: 60px;
                line-height: 60px;
                background: #22c37b;
                box-shadow: 0 6px #1b985f;
                border-radius: 8px; /*no*/
                margin-top: 50px;
                color: #fff;
                font-size: 30px; /*px*/
                &:active{
                    box-shadow: 0 3px #1b985f;
                    transform: translateY(3px);
                }
            }
        }
    }
</style>