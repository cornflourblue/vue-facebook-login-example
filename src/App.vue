<template>
    <div>
        <!-- nav -->
        <nav class="navbar navbar-expand navbar-dark bg-dark" v-if="account">
            <div class="navbar-nav">
                <router-link to="/" class="nav-item nav-link">Home</router-link>
                <a class="nav-item nav-link" @click="logout">Logout</a>
            </div>
        </nav>

        <!-- main app container -->
        <div class="container pt-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { accountService } from '@/_services';

export default {
    data() {
        return {
            account: null
        }
    },
    created() {
        accountService.account.subscribe(x => this.account = x);
    },
    methods: {
        logout: accountService.logout
    }
}
</script>