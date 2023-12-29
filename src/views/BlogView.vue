<template>
    <div class="container my-10 mx-auto md:px-6">
        <!-- Section: Design Block -->
        <section class="mb-32 text-center">
            <h2 class="mb-12 pb-4 text-center text-3xl font-bold">News</h2>
            <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                <div v-for="(newsItem, index) in newsData" :key="index" class="mb-6 lg:mb-0 mt-5">
                    <div
                        class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex">
                            <div class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg bg-gray-800 h-[250px] w-full flex items-center justify-center"
                                data-te-ripple-init data-te-ripple-color="light">
                                <img :src="newsItem.imageUrl" class="w-full" />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-3 text-lg font-bold line-clamp-2">{{ newsItem.title }}</h5>
                            <p class="mb-4 pb-2 line-clamp-4">{{ newsItem.description }}</p>
                            <a :href="'news-detail/' + newsItem.id" data-te-ripple-init data-te-ripple-color="light"
                                class="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->
    </div>
</template>
  
<script>
import apiService from '../../axios';

export default {
    data() {
        return {
            newsData: []
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            apiService.get("/New")
                .then((response) => {
                    this.newsData = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        }
    }
};
</script>
  