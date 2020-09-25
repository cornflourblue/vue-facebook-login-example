<template>
    <div>
        <h2>Edit Account</h2>
        <p>Updating the information here will only change it inside this application, it won't (and can't) change anything in the associated Facebook account.</p>
        <form v-if="account" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Facebook Id</label>
                <div>{{account.facebookId}}</div>
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" v-model="account.name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Extra Info</label>
                <input type="text" v-model="account.extraInfo" class="form-control" />
            </div>
            <div class="form-group">
                <button type="submit" :disabled="loading" class="btn btn-primary">
                    <span v-if="loading" class="spinner-border spinner-border-sm mr-1"></span>
                    Save
                </button>
                <router-link to="../../" class="btn btn-link">Cancel</router-link>
                <div v-if="error" class="alert alert-danger mt-3 mb-0">{{error}}</div>
            </div>
        </form>
        <div v-if="!account" class="text-center p-3">
            <span class="spinner-border spinner-border-lg align-center"></span>
        </div>
    </div>
</template>

<script>
import { router } from '@/_helpers';
import { accountService } from '@/_services';

export default {
    data() {
        return {
            account: null,
            loading: false,
            error: ''
        }
    },
    created() {
        accountService.getById(this.$route.params.id)
            .then(x => this.account = x);
    },
    methods: {
        handleSubmit() {
            this.loading = true;
            this.error = '';
            accountService.update(this.$route.params.id, this.account)
                .then(() => {
                    router.push('../');
                })
                .catch(error => {
                    this.error = error;
                    this.loading = false;
                });
        }
    }
}
</script>