<template>
    <div class="user-info">
        <section class="login">
            <div class="login-token">
                <input class="txt" type="text" placeholder="Access Token" v-model="accessToken" maxlength="36">
                <button class="btn btn-login" @click="handleLogin">登录</button>
            </div>
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
                    accessToken: this.accessToken
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

</style>