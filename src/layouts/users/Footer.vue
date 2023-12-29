<template>
    <div class="w-full rounded-tl-[50px] rounded-tr-[50px] shadow bg-[#4E2A23] py-[5px] flex items-center">
        <div class="w-1/2 h-full flex items-center justify-center px-6">
            <p class="w-full text-white text-base font-light">Além disso, você também receberá mensalmente um mimo
                surpresa para deixar a sua experiência ainda mais gostosa. </p>
        </div>
        <div class="w-1/2 h-full">
            <ul class="w-full h-full flex items-center justify-evenly">
                <li class="text-[18px] font-[700] text-[#fff] font-mono" v-for="item in RouterHeader">
                    <a :href="item.urlPage">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { RouterHeader } from '../../router/routerHeader';
</script>