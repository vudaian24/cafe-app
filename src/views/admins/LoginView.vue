<template>
    <section class="bg-gray-50 dark:bg-[#4C2821] w-full h-full flex justify-center items-center">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-5 w-[80%]">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="mr-2" src="../../../public/images/logo.png" alt="logo">
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required>
                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.email }}</span>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" v-model="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                            <span class="text-red-600 text-[12px] font-[500]">{{ errors.password }}</span>
                        </div>
                        <!-- <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#"
                                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                password?</a>
                        </div> -->
                        <button @click="apiSignInAdmin" type="button"
                            class="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                            in</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex ">
                            Don’t have an account yet?
                            <a href="#" class="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import apiService from "../../../axios";
import { isNotEmpty, isValidEmail } from "../../validation";

export default {
    name: "LoginAdmin",
    data() {
        return {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        apiSignInAdmin: async function () {
            const email = this.email;
            const password = this.password;

            let hasError = false;
            if (!isValidEmail(email) || !isNotEmpty(email)) {
                this.errors.email = 'Please enter complete and correct email format.';
                hasError = true;
            } else if (password.length < 8 || !isNotEmpty(password)) {
                this.errors.password = 'Password cannot be blank and must be no less than 8 characters long.';
                hasError = true;
            }
            if (hasError) {
                return;
            }

            apiService.post("LoginWithAdmin/Login", { email, password })
                .then((response) => {
                    if (response.data) {
                        const accessToken = response.data.accessToken;
                        sessionStorage.setItem('accessTokenAdmin', accessToken);

                        this.$router.push('/admin/dashboard');
                    }
                    console.log("Sign in successful!", response);
                })
                .catch((error) => {
                    console.error("Error signing in:", error);
                    this.errors.email = 'Wrong email.';
                    this.errors.password = 'Wrong password.';
                }
                );
        }
    },
}
</script>
