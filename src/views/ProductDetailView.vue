<template>
    <div class="">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                <!-- Image gallery -->
                <TabGroup as="div" class="flex flex-col-reverse">
                    <!-- Image selector -->
                    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                    </div>

                    <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                        <TabPanel>
                            <img :src="productDetail.productImageUrl" alt="ảnh"
                                class="h-[500px] w-full object-cover object-center sm:rounded-lg" />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>

                <!-- Product info -->
                <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                    <h1 class="text-3xl font-bold tracking-tight text-white">
                        {{ productDetail.productName }}
                    </h1>

                    <div class="mt-6">
                        <div class="space-y-6 text-base text-white">
                            <p>
                                {{ productDetail.productDescription }}
                            </p>
                        </div>
                    </div>

                    <form class="mt-6">
                        <div class="mt-10 flex items-center">
                            <p class="text-red-400">Add to favorites</p>
                            <button type="button"
                                class="ml-1 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                <span class="sr-only"></span>
                            </button>
                        </div>
                    </form>

                    <section aria-labelledby="details-heading" class="mt-12">
                        <div class="divide-y divide-gray-200 border-t">
                            <Disclosure as="div" v-slot="{ open }">
                                <h3>
                                    <DisclosureButton
                                        class="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span :class="[open ? 'text-indigo-600' : 'text-white', 'text-sm font-medium']">
                                            {{ cafeDetails.brandName }}
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <PlusIcon v-if="!open"
                                                class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            <MinusIcon v-else
                                                class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                                    <ul role="list">
                                        <li>{{ cafeDetails.brandDescription }}</li>
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" v-slot="{ open }">
                                <h3>
                                    <DisclosureButton
                                        class="group relative flex w-full items-center justify-between py-6 text-left">
                                        <span :class="[open ? 'text-indigo-600' : 'text-white', 'text-sm font-medium']">
                                            {{ categoryDetails.categoryName }}
                                        </span>
                                        <span class="ml-6 flex items-center">
                                            <PlusIcon v-if="!open"
                                                class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            <MinusIcon v-else
                                                class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                                    <ul role="list">
                                        <li>{{ categoryDetails.categoryDescription }}</li>
                                    </ul>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>
                    </section>
                </div>
            </div>
            <div class="mt-10 px-10 py-4">
                <div class="flex space-x-4 text-sm text-gray-500" v-for="item in reviews">
                    <div class="flex-none py-10 select-none">
                        <img :src="item.avatar" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
                    </div>
                    <div class="border-t border-gray-700 flex-1 py-10">
                        <h3 class="font-medium text-gray-300 select-none">{{ item.userName }}</h3>

                        <div class="prose prose-sm mt-4 max-w-none text-gray-400">
                            <p>{{ item.comment }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="comment" class="block text-sm font-medium leading-6 text-gray-100 select-none">Add your
                        comment</label>
                    <div class="mt-2">
                        <textarea rows="4" v-model="comment" placeholder="Add your comment ..."
                            class="block w-full outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <div class="flex-shrink-0 my-2">
                        <button type="button" @click="addReview"
                            class="inline-flex items-center rounded-md bg-[#4d332f] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '@headlessui/vue'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';
import apiService from '../../axios'

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        HeartIcon,
        MinusIcon,
        PlusIcon,
    },
    data() {
        return {
            id: null,
            storedResponseApi: null,
            comment: '',
            productDetail: [],
            reviews: [],
            cafeDetails: [],
            categoryDetails: [],
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.fetchData(this.id);
        this.getReview(this.id)
    },
    methods: {
        fetchData(id) {
            apiService.get("/Product/" + id)
                .then((response) => {
                    this.productDetail = response.data;
                    this.cafeDetails = response.data;
                    this.categoryDetails = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        },
        getReview(idProduct) {
            apiService.get("/Review/" + idProduct)
                .then((response) => {
                    this.reviews = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        },
        addReview() {
            apiService.get('/Review/GetMaxReviewId')
                .then((response) => {
                    const storedResponseApi = sessionStorage.getItem('userSignInResponseApi');
                    const parsedResponseApi = JSON.parse(storedResponseApi);
                    const newReviewId = response.data + 1;

                    if (storedResponseApi) {
                        const payload = {
                            id: newReviewId.toString(),
                            comment: this.comment,
                            productId: this.id,
                            userId: parsedResponseApi.userId,
                        };
    
                        console.log(payload);
    
                        apiService.post("/Review", payload)
                            .then((response) => {
                                this.reviews = response.data;
                                this.getReview(this.id);
                                this.comment = '';
                            })
                            .catch((error) => {
                                console.error("Error in POST request:", error);
                                console.log(error.response);
                            });
                    } else {
                        this.$router.push('/login');
                    }
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        }
    }
}

</script>
  