<template>
    <div class="w-full flex items-center justify-between gap-3 relative">
        <div class="w-[42px] h-[42px]">
            <img src="../assets/images/avatar.png" alt="" class="rounded-full">
        </div>
        <p class="text-[#161E54] text-[16px] font-[500] leading-[24px]">Admirra John</p>
        <div class="w-[24px] h-[24px]" @click="openDialog">
            <img src="../../public/icons/move-down.png" alt="">
        </div>
        <ul class="group-hover:flex hidden absolute flex-col top-[50px] right-0 
              w-full bg-white z-20 rounded-[6px] shadow-lg py-1 border-[1px]
              animate-fade-down animate-delay-[50ms] animate-duration-500">
            <li class="w-full" v-for="item in RouterMenuInfo">
                <a :href="item.urlPage" class="w-full py-4 px-5 flex hover:bg-slate-100"
                    @click="handleLogout(item.isLogout)">
                    >
                    <img :src="item.icon" alt="" class="mr-2" width="20" height="20">
                    <p class="text-[16px] text-[#161E54] font-[500]">{{ item.title }}</p>
                </a>
            </li>
        </ul>
    </div>
    <DialogLogout :isOpen="isDialogOpen" @close="closeDialog">
        <div class="w-full h-full">
            <div class="flex mb-4">
                <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Logout account</h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            Are you sure you want to log out?
                        </p>
                    </div>
                </div>
            </div>
            <div class="px-4 py-3 sm:flex sm:flex-row-reverse">
                <button type="button" @click="confirmLogout"
                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                <button type="button" @click="closeDialog"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
        </div>
    </DialogLogout>
</template>
  
<script setup>
import { RouterMenuInfo } from '../router/routerSidebar';
import DialogLogout from './Dialog.vue';
import { ref } from 'vue';

const isDialogOpen = ref(false);

const openDialog = () => {
    isDialogOpen.value = true;
};

const closeDialog = () => {
    isDialogOpen.value = false;
};

const handleLogout = (item) => {
    if (item) {
        openDialog();
    } else {
        console.log("Can't logout");
    }
};

const confirmLogout = () => {
    sessionStorage.removeItem('accessTokenAdmin');
    window.location.href = '/admin/login';
    closeDialog();
};
</script>
  