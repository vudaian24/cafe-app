<template>
    <div class="flex items-center justify-start mb-5">
        <button @click="addBrand()" class="w-max h-max rounded bg-blue-400 py-3 px-4 text-white font-[500]">ADD</button>
    </div>
    <div class="relative shadow-md sm:rounded-lg">
        <div>
            <modal v-if="showModal" @close="showModal = false">
                <template v-slot:content>
                    <h1 class="flex justify-center items-center text-[28px] text-gray-900 font-[500] select-none">ADD</h1>
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="title" class="block text-sm font-medium text-gray-900">Title</label>
                            <input type="text" id="title" v-model="formData.name"
                                class="block w-full mt-1 p-2 border rounded outline-none text-gray-900">
                            <span class="text-red-600 text-[12px] font-[500]">{{ errorMessage.name }}</span>
                        </div>
                        <div class="mb-4">
                            <label for="description" class="block text-sm font-medium text-gray-900">Description</label>
                            <textarea id="description" v-model="formData.description"
                                class="block w-full mt-1 p-2 border rounded outline-none text-gray-900">
                            </textarea>
                            <span class="text-red-600 text-[12px] font-[500]">{{ errorMessage.description }}</span>
                        </div>
                        <div class="w-full flex justify-end items-center py-4">
                            <button type="submit"
                                class="bg-blue-500 text-white flex items-center justify-center hover:opacity-90 font-medium py-2 px-7 rounded select-none outline-none">
                                {{ editingItemId ? 'Update' : 'Save' }}
                            </button>
                        </div>
                    </form>

                </template>
            </modal>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Discription
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Option
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-80 dark:border-gray-50" v-for="item in apiData" :key="item.id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700">
                        {{ item.id }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.description }}
                    </td>
                    <td class="px-6 py-4">
                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
                            @click="editBrand(item)">Edit</button>
                        <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            @click="openDialog(item)">Delete</button>
                    </td>
                    <dialog-delete :isOpen="isDialogOpen" @close="closeDialog">
                        <div class="w-full h-full">
                            <div class="flex mb-4">
                                <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete
                                        brand?</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Are you sure you want delete brand?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 sm:flex sm:flex-row-reverse">
                                <button type="button" @click="deleteBrand()"
                                    class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                                <button type="button" @click="closeDialog"
                                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </dialog-delete>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import apiService from "../../../axios";
import Modal from '../../components/Modal.vue';
import DialogDelete from '../../components/Dialog.vue';
import { isNotEmpty } from "../../validation";

export default {
    components: {
        Modal,
        DialogDelete
    },
    data() {
        return {
            apiData: [],
            showModal: false,
            addtingItem: null,
            editingItemId: null,
            deletingItemId: null,
            isDialogOpen: false,
            formData: {
                name: '',
                description: '',
            },
            brandObject: {
                id: "",
                name: "",
                description: "",
            },
            errorMessage: {
                name: '',
                description: '',
            },
            deleteId: '',
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        openDialog(item) {
            this.isDialogOpen = true;
            this.deleteId = item.id;
        },

        closeDialog() {
            this.isDialogOpen = false;
        },
        fetchData() {
            apiService.get("/Brand")
                .then((response) => {
                    this.apiData = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi gửi yêu cầu API:", error);
                });
        },
        submitForm() {
            const name = this.formData.name;;
            const description = this.formData.description;
            if (!isNotEmpty(name)) {
                this.errorMessage.name = 'Hãy nhập tên nhãn hàng.';
            } else if (!isNotEmpty(description)) {
                this.errorMessage.description = 'Hãy nhập mô tả chi tiết nhãn hàng.';
            } else {
                if (this.addtingItem) {
                    apiService.get("/Brand/GetMaxBrandId")
                        .then((response) => {
                            const maxId = response.data;
                            const newId = maxId + 1;

                            this.brandObject.id = newId.toString();
                            this.brandObject.name = this.formData.name;
                            this.brandObject.description = this.formData.description;

                            apiService.post("/Brand", this.brandObject)
                                .then((response) => {
                                    this.brandObject = {
                                        id: "",
                                        name: "",
                                        description: "",
                                    };
                                    this.formData = {
                                        name: '',
                                        description: '',
                                    };
                                    this.showModal = false;
                                    this.addtingItem = null,
                                        this.fetchData();
                                })
                                .catch((error) => {
                                    console.error("Error creating a new brand object:", error);
                                });
                        })
                        .catch((error) => {
                            console.error("Error fetching the maximum id:", error);
                        });
                } else if (this.editingItemId) {
                    this.brandObject.id = this.editingItemId;
                    this.brandObject.name = this.formData.name;
                    this.brandObject.description = this.formData.description;

                    apiService.put(`/Brand/${this.editingItemId}`, this.brandObject)
                        .then((response) => {
                            this.brandObject = {
                                id: "",
                                name: "",
                                description: "",
                            };
                            this.formData = {
                                name: '',
                                description: '',
                            };
                            this.showModal = false;
                            this.editingItemId = null;
                            this.fetchData();
                        })
                        .catch((error) => {
                            console.error("Error updating the brand object:", error);
                        });
                }
            }
        },
        addBrand() {
            this.addtingItem = 1;
            this.showModal = true;
        },
        editBrand(item) {
            this.editingItemId = item.id;
            this.formData.name = item.name;
            this.formData.description = item.description;
            this.errorMessage = {
                title: '',
                description: '',
            };
            this.showModal = true;
        },

        deleteBrand() {
            apiService.delete(`/Brand/${this.deleteId}`)
                .then(() => {
                    this.fetchData();
                })
                .catch((error) => {
                    console.error("Error deleting the brand object:", error);
                })
                .finally(() => {
                    this.deletingItemId = null;
                });
            this.closeDialog();
        },
    }
}
</script>