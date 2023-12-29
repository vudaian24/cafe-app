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
                                    <div class="text-center mb-3">
                                        <h6 class="text-gray-600 text-sm font-bold">
                                            Sign in with
                                        </h6>
                                    </div>
                                    <div class="btn-wrapper text-center">
                                        <button @click="googleSignIn"
                                            class="bg-white active:bg-gray-100 text-gray-800 px-4 inline-flex w-[80%] justify-center py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md items-center font-bold text-xs"
                                            type="button" style="transition: all 0.15s ease 0s;">
                                            <img alt="..." class="w-5 mr-1" src="../../../public/icons/icon-google.png" />
                                            Google
                                        </button>
                                    </div>
                                    <hr class="mt-6 border-b-1 border-gray-400" />
                                </div>
                                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div class="text-gray-500 text-center mb-3 font-bold">
                                        Or sign in with credentials
                                    </div>
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
                                        <!-- <div>
                                            <label class="inline-flex items-center cursor-pointer"><input
                                                    id="customCheckLogin" type="checkbox"
                                                    class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                    style="transition: all 0.15s ease 0s;" /><span
                                                    class="ml-2 text-sm font-semibold text-gray-700">Remember
                                                    me</span></label>
                                        </div> -->
                                        <div class="text-center mt-6">
                                            <button @click="apiSignIn"
                                                class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                type="button" style="transition: all 0.15s ease 0s;">
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="flex flex-wrap mt-6">
                                <div class="w-1/2">
                                    <a href="#pablo" class="text-white">Forgot password?</a>
                                </div>
                                <div class="w-1/2 text-right">
                                    <a href="/register" class="text-white">Create new account?</a>
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
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { isValidEmail, isNotEmpty } from '../validation';
import apiService from "../../axios";
const auth = getAuth();
export default {
    name: "login-page",
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

    mounted() {
        const storedResponse = sessionStorage.getItem('userSignInResponse');

        if (storedResponse) {
            const parsedResponse = JSON.parse(storedResponse);

            console.log(parsedResponse.user.email);
        }
    },

    methods: {
        googleSignIn: async function () {
            try {
                const provider = new GoogleAuthProvider();
                const res = await signInWithPopup(auth, provider);

                const accessToken = res.user.accessToken;

                sessionStorage.setItem('accessTokenUser', accessToken);

                sessionStorage.setItem('userSignInResponseGoogle', JSON.stringify(res));

                this.$router.push('/home');

                console.log("OK", res);
            } catch (err) {
                console.log("Error", err);
            }
        },

        apiSignIn: async function () {
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

            apiService.post("LoginWithUser/Login", { email, password })
                .then((response) => {
                    if (response.data) {
                        const accessToken = response.data.accessToken;

                        sessionStorage.setItem('accessTokenUser', accessToken);

                        sessionStorage.setItem('userSignInResponseApi', JSON.stringify(response.data));

                        this.$router.push('/home');
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