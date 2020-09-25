<template>
    <div class="col-md-6 offset-md-3 mt-5 text-center">
        <div class="card">
            <h4 class="card-header">Vue.js Facebook Login Example</h4>
            <div class="card-body">
                <button class="btn btn-facebook" @click="login">
                    <i class="fa fa-facebook mr-1"></i>
                    Login with Facebook
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { router } from '@/_helpers';
import { accountService } from '@/_services';

export default {
    created() {
        // redirect to home if already logged in
        if (accountService.accountValue) {
            router.push('/');
        }
    },
    methods: {
        login: accountService.login
    }
}
</script>