<template>
    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="(product, index) in products" :key="index" :href="'product-detail/'+ product.id" class="group">
            <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white flex items-center justify-center xl:aspect-h-8 xl:aspect-w-7 zoom-effect h-[250px] ">
                <img :src="product.imageUrl" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <div class="space-x-1 flex justify-center my-5">
                
            </div>
            <p class="mt-4 text-[12px] text-gray-300 line-clamp-2">{{ product.description }}</p>
            <h3 class="mt-1 text-[18px] font-medium text-white text-center">{{ product.name }}</h3>
        </a>
    </div>
</template>
  
<script>
export default {
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            product: this.products[0],
        }
    },
    mounted() {
    },
};
</script>
  