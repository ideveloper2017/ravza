<template>
    <div>
        <div class="alert alert-info current-package">
            <p>{{ __('your_credits') }}: <strong>{{ account.credits }} {{ __('credits') }}</strong></p>
        </div>
        <div class="packages-listing">
            <div class="row flex-items-xs-middle flex-items-xs-center">
                <div style="margin: auto; width:30px;" v-if="isLoading">
                    <half-circle-spinner
                        :animation-duration="1000"
                        :size="15"
                        color="#808080"
                    />
                </div>
                <div v-if="!isLoading && data.length && account">
                    <div :class="data.length === 2 ? 'col-xs-12 col-lg-6' : 'col-xs-12 col-lg-4'" v-for="item in data"
                         :key="item.id" style="margin-top: 30px">
                        <div class="card text-xs-center">
                            <div class="card-block">
                                <h4 class="card-title">
                                    {{ item.name }}
                                </h4>
                                <ul class="list-group">
                                    <li class="list-group-item" v-if="item.price">{{ item.price_per_job_text }}</li>
                                    <li class="list-group-item" v-if="!item.price">{{ item.number_jobs_free }}</li>

                                    <li class="list-group-item" v-if="item.price">{{
                                            item.price_text_with_sale_off
                                        }}
                                    </li>
                                    <li class="list-group-item" v-if="!item.price">&mdash;</li>
                                </ul>
                                <button
                                    :class="isSubscribing && currentPackageId === item.id ? 'btn btn-primary mt-2 button-loading' : 'btn btn-primary mt-2'"
                                    @click="postSubscribe(item.id)" :disabled="isSubscribing">{{ __('purchase') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {HalfCircleSpinner} from 'epic-spinners'

export default {
    components: {
        HalfCircleSpinner
    },

    data: function () {
        return {
            isLoading: true,
            isSubscribing: false,
            data: [],
            account: {},
            currentPackageId: null,
        };
    },

    mounted() {
        this.getData();
    },

    props: {
        url: {
            type: String,
            default: () => null,
            required: true
        },
        subscribe_url: {
            type: String,
            default: () => null,
            required: true
        },
    },

    methods: {
        getData() {
            this.data = [];
            this.isLoading = true;
            axios.get(this.url)
                .then(res => {
                    if (res.data.error) {
                        Botble.showError(res.data.message);
                    } else {
                        this.data = res.data.data.packages;
                        this.account = res.data.data.account;
                    }
                    this.isLoading = false;
                });
        },

        postSubscribe(id) {
            this.isSubscribing = true;
            this.currentPackageId = id;
            axios.post(this.subscribe_url, {id: id, '_method': 'PUT'})
                .then(res => {
                    if (res.data.error) {
                        Botble.showError(res.data.message);
                    } else {
                        if (res.data.data && res.data.data.next_page) {
                            window.location.href = res.data.data.next_page;
                        } else {
                            this.account = res.data.data;
                            Botble.showSuccess(res.data.message);
                            this.getData();
                        }
                    }
                    this.isSubscribing = false;
                })
                .catch(error => {
                    this.isSubscribing = false;
                    console.log(error)
                });
        }
    }
}
</script>
