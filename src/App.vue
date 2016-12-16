<template>
    <div id="app">
        <header>
            <nav>
                <router-link></router-link>
            </nav>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
        <footer>
            <nav>
                <router-link to="/userInfo">用户信息</router-link>
            </nav>
        </footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';
    export default{
        props: {},
        data() {
            return {}
        },
        methods: {},
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>

<style>

</style>
