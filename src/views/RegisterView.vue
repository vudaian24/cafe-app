<template>
    <div>
        <main>
            <section class="absolute w-full h-full bg-[#4C2821]">
                <div class="container mx-auto px-4 h-full">
                    <div class="flex content-center items-center justify-center h-full">
                        <div class="w-full lg:w-6/12 px-4">
                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                <div class="rounded-t mb-0 px-6 py-6">
                                    <h2 class="text-[#4C2821] font-[700] text-[24px] text-center">SIGN UP</h2>
                                </div>
                                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Email
                                            </label>
                                            <input v-model="email" type="email"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Email" style="transition: all 0.15s ease 0s;" />
                                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.email }}</span>
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Password
                                            </label>
                                            <input v-model="password" type="password"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Password" style="transition: all 0.15s ease 0s;" />
                                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.password }}</span>
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Name
                                            </label>
                                            <input v-model="name" type="text"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Name" style="transition: all 0.15s ease 0s;" />
                                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.name }}</span>
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Phone
                                            </label>
                                            <input v-model="phone" type="text"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Phone" style="transition: all 0.15s ease 0s;" />
                                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.phone }}</span>
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                for="grid-password">Avatar
                                            </label>
                                            <input @change="handleFileChange" type="file"
                                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Phone" style="transition: all 0.15s ease 0s;" />
                                        </div>
                                        <div class="text-center mt-6">
                                            <button @click="handleRegister"
                                                class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button" style="transition: all 0.15s ease 0s;">
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="flex flex-wrap mt-6">
                                <div class="text-center">
                                    <a href="/login" class="text-white">Do you already have an account??</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script>

import { useRouter } from 'vue-router';
import apiService from "../../axios";
import { isValidEmail, isValidPhoneNumber, isNotEmpty } from '../validation';

export default {
    name: "login-page",
    data() {
        return {
            email: '',
            password: '',
            name: '',
            phone: '',
            avatar: '',
            errors: {
                email: '',
                password: '',
                name: '',
                phone: '',
            },
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const temporaryUrl = URL.createObjectURL(file);

                this.avatar = temporaryUrl;
            }
        },

        handleRegister: async function () {
            try {
                this.errors = {
                    email: '',
                    password: '',
                    name: '',
                    phone: '',
                };

                let hasError = false;

                if (!isValidEmail(this.email) || !isNotEmpty(this.email)) {
                    this.errors.email = 'Please enter complete and correct email format.';
                    hasError = true;
                } else if(!isNotEmpty(this.password) || this.password.length < 8) {
                    this.errors.password = 'Password cannot be blank and must be no less than 8 characters long.';
                    hasError = true;
                } else if(!isNotEmpty(this.name)) {
                    this.errors.name = 'Name cannot be blank!';
                    hasError = true;
                } else if(!isValidPhoneNumber(this.phone) || !isNotEmpty(this.phone)) {
                    this.errors.phone = 'Please enter the complete and correct phone number format (10 numbers).';
                    hasError = true;
                }

                if (hasError) {
                    return;
                }

                const requestData = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    phone: this.phone,
                    avatar: this.avatar,
                };

                const response = await apiService.post('/RegisterWithUser/register', requestData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.data === "Registration successful") {
                    console.log("Registration successful");
                    this.$router.push('/login');

                } else {
                    console.log("Registration failed:", response.data);
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        },
    },
}
</script>