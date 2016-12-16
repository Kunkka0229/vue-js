<template>
    <div class="userInfo">
        {{ userInfo.loginname }}
        <!-- 未登录 -->
        <div class="login-no" v-if="!userInfo.loginname">
            <router-link to="/login">
                <i class="iconfont icon-denglu" style="margin-right: 30px;color: #42b983;font-size: 2rem;"></i>登录
            </router-link>
        </div>
        <!-- 已登录 -->
        <div v-else class="login-yes">
            <img v-if="userInfo.avatar_url" :src="userInfo.avatar_url">
            <span class="login-name">{{ userInfo.loginname }}</span>
            <span class="login-out" @click="handleLoginOut">退出</span>
        </div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters, mapActions } from 'vuex';
    import { LOGIN_OUT } from '../store/mutation-types';
    export default{
        props: {},
        data() {
            return {

            }
        },
        methods: {
            handleLoginOut() {
                this.$store.dispatch(LOGIN_OUT)
            }
        },
        computed: {
                ...mapGetters(['userInfo'])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>