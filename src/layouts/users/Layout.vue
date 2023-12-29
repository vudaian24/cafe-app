<template>
    <div class="w-screen h-screen m-0 p-0 bg-white background-custome">
        <div class="w-full h-full flex flex-col justify-between">
            <div class="w-full flex items-center justify-center fixed top-0 z-40">
                <Header />
            </div>
            <div class="w-full overflow-y-auto fixed bottom-0 top-0 right-0 left-0">
                <!-- <vue-custom-scrollbar> -->
                    <div class="w-full pt-[80px] pb-[80px]">
                        <Content/>
                    </div>
                <!-- </vue-custom-scrollbar> -->
            </div>
            <div class="w-full fixed bottom-0">
                <Footer />
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from './Header.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
</script>
<style>
.background-custome {
    background-image: url(../../../public/images/background.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>