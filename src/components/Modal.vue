<template>
    <transition name="modal">
        <div class="fixed inset-0 flex items-center justify-center z-50">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" @click="closeModal"></div>
            <div class="modal-container animate-fade-up animate-duration-500 bg-white lg:w-8/12 lg:h-max md:w-11/12 md:h-max sm:w-full sm:h-full rounded shadow-lg z-50 overflow-y-auto p-4">
                <div class="w-full h-[20px] flex items-center justify-end">
                    <button class="outline-none" @click="closeModal">
                        <img src="../../public/icons/icon-close.png" alt="" width="18" height="18" class="opacity-60 hover:opacity-80">
                    </button>
                </div>
                <div class="modal-content pt-4 ">
                    <div class="px-5 overflow-y-auto h-[500px]">
                        <slot name="content"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script>
export default {
    name: 'Modal',
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>
  
  