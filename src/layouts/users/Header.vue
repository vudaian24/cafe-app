<template>
    <div
        class="bg-[#4E2A23] w-full lg:py-[10px] lg:pl-[100px] lg:pr-[50px] md:py-[15px] sm:px-[50px] md:pl-[100px] md:pr-[50px]  flex items-center lg:justify-center md:justify-between sm:justify-between shadow-lg">
        <div class="lg:w-5/12 flex items-center justify-start">
            <img src="../../../public/images/logo.png" alt="" class="lg:w-[100px]">
        </div>
        <ul class="lg:w-6/12 md:w-6/12 flex items-center justify-evenly h-full">
            <li class="text-[18px] font-[700] text-[#fff] font-mono" v-for="item in RouterHeader">
                <a :href="item.urlPage">{{ item.title }}</a>
            </li>
        </ul>
        <Menu as="div" class="relative inline-block text-left sm:inline-block">
            <MenuButton class="flex items-center justify-center">
                <img :src="parsedResponseGoogle ? parsedResponseGoogle.user.photoURL : parsedResponseApi ? parsedResponseApi.userAvatar : '../../../public/icons/icon-user.png'" alt=""
                    class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
            </MenuButton>
            <transition 
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                        <!-- <MenuItem v-slot="{ active }">
                        <a 
                            href="#"
                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                        >
                            Account settings
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a 
                            href="#"
                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                        >
                            Support
                        </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <a 
                            href="#"
                            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                        >
                            License
                        </a>
                        </MenuItem> -->
                        <div class="py-1">
                            <MenuItem v-slot="{ active }">
                                <button type="button" @click="handelBtn"
                                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">
                                    {{ parsedResponseGoogle || parsedResponseApi ? 'Sign out' : 'Sign in' }}
                                </button>
                            </MenuItem>
                        </div>
                    </div>
                </MenuItems>
            </transition>
        </Menu>

    </div>  
</template>
<script setup>
import { RouterHeader } from '../../router/routerHeader';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const storedResponseGoogle = sessionStorage.getItem('userSignInResponseGoogle');
const storedResponseApi = sessionStorage.getItem('userSignInResponseApi');

const parsedResponseGoogle = JSON.parse(storedResponseGoogle);
const parsedResponseApi = JSON.parse(storedResponseApi);


const handelBtn = () => {
    if (parsedResponseGoogle) {
        sessionStorage.removeItem('accessTokenUser');
        sessionStorage.removeItem('userSignInResponseGoogle');
        router.push('/login');
    } else if (parsedResponseApi) {
        sessionStorage.removeItem('accessTokenUser');
        sessionStorage.removeItem('userSignInResponseApi');
        router.push('/login');
    } else {
        router.push('/login');
    }
};

</script>