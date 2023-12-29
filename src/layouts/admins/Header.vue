<template>
    <div class="w-full pl-[50px] flex items-center justify-between bg-white border-b-[1px] border-solid border-[#d8d8d8]">
        <div class="flex lg:w-1/2 items-center justify-start">
            <div class="lg:w-[343px] flex items-center justify-between py-[5px] px-[16px] 
                rounded-[4px] border-[1px] border-solid border-[#E0E0E0] bg-[#FAFAFA]">
                <input type="text" placeholder="Search"
                    class="outline-none bg-[#FAFAFA] w-11/12 text-[#B3B3B3] font-[400] text-[16px] leading-8">
                <div class="w-1/12 flex items-center justify-center">
                    <img src="../../../public/icons/search.png" alt="">
                </div>
            </div>
        </div>
        <div class="flex lg:w-1/2 items-center justify-end ">
            <div class="flex items-center justify-between lg:w-[364px] py-[20px] pr-[50px]">
                <div class="w-[24px] h-[24px] cursor-pointer">
                    <img src="../../../public/icons/bell.png" alt="">
                </div>
                <div class="w-[24px] h-[24px] cursor-pointer">
                    <img src="../../../public/icons/notification.png" alt="">
                </div>
                <div class="flex items-center cursor-pointer group relative before:absolute before:w-full before:h-5 before:bottom-[-20px]">
                    <MenuInfo />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import MenuInfo from '../../components/MenuInfo.vue';
</script>