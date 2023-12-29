<template>
    <div>
        <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:py-8 md:py-3 lg:max-w-7xl lg:px-8">
            <ListProduct :products="productList" />
        </div>
    </div>
</template>
  
<script>
import apiService from '../../axios';
import ListProduct from '../components/ListProduct.vue';
export default {
    components: {
        ListProduct,
    },
    data() {
        return {
            productList: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            apiService.get("/Product")
                .then((response) => {
                    this.productList = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        },
    }
}
</script>
  