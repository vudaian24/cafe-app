<template>
    <div class="w-full h-full bg-[#FAFAFA] flex flex-col">
        <div class="flex items-center justify-center py-[24px] mb-[40px]">
            <img src="../../assets/images/logo.png" alt="" class="lg:w-[108px] lg:h-[42px] md:w-[67px] md:h-[26px]">
        </div>
        <div class="w-full flex flex-col">
            <div class="w-full lg:pl-[30px] md:pl-[10px] py-[10px]">
                <p
                    class="lg:text-[12px] font-[500] lg:leading-[18px] md:text-[10px] text-[#686868] lg:block md:block sm:hidden">
                    MAIN MENU
                </p>
            </div>
            <ul class="w-full flex flex-col" v-for="(item, index) in RouterSidebar" :key="index">
                <li class="px-[30px] py-4">
                    <a :href="item.urlPage" class="w-full flex items-center gap-[24px]">
                        <img :src="item.icon" alt="" width="24" height="24">
                        <p class="text-[16px] font-[500] leading-6 text-[#686868] lg:block md:hidden sm:hidden">{{
                            item.title }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="w-full flex flex-col mt-[40px]">
            <div class="w-full lg:pl-[30px] md:pl-[10px] py-[10px]">
                <p
                    class="lg:text-[12px] font-[500] lg:leading-[18px] md:text-[10px] text-[#686868] lg:block md:block sm:hidden">
                    OTHER
                </p>
            </div>
            <ul class="w-full flex flex-col" v-for="(item, index) in RouterSidebarSetting" :key="index">
                <li class="px-[30px] py-4">
                    <a :href="item.urlPage" class="w-full flex items-center gap-[24px]">
                        <img :src="item.icon" alt="" width="24" height="24">
                        <p class="text-[16px] font-[500] leading-6 text-[#686868] lg:block md:hidden sm:hidden">{{
                            item.title }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { RouterSidebar } from '../../router/routerSidebar.js';
import { RouterSidebarSetting } from '../../router/routerSidebar.js';
</script>
  