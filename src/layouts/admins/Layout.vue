<template>
    <div class="w-screen h-screen m-0 p-0 bg-white">
        <div class="w-full h-full flex ">
            <div class="lg:w-[242px] md:w-[90px] sm:w-0 h-full">
                <Sidebar />
            </div>
            <div class="lg:w-[calc(100%-242px)] md:w-[calc(100%-90px)] sm:w-full flex flex-col">
                <Header />
                <div class="w-full px-[50px] py-[20px] flex-1 overflow-y-auto">
                    <div class="w-full">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Content from './Content.vue'
</script>