<template>
    <div class="py-10 sm:py-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-4">
                    <div
                        class="relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:h-[500px] lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                        <img class="absolute inset-0 h-full w-full object-cover"
                            src="https://cafefcdn.com/203337114487263232/2023/12/1/xayxatcf220231130143246-1701395140317-1701395141359581988106.jpg"
                            alt="" />
                    </div>
                </div>
                <div>
                    <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                        <p class="text-base font-semibold leading-7 text-indigo-600">Company values</p>
                        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">On a mission to empower
                            remote teams</h1>
                        <div class="max-w-xl">
                            <p class="mt-6 text-gray-300">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                enim. Mattis
                                mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
                                risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                                Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                            <p class="mt-8 text-gray-300">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                odio id et. Id
                                blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                                varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac
                                lorem vel integer orci.</p>
                            <p class="mt-8 text-gray-300">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                                odio id et. Id
                                blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                                varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac
                                lorem vel integer orci.</p>
                        </div>
                    </div>
                    <dl class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                        <div v-for="(stat, statIdx) in stats" :key="statIdx">
                            <dt class="text-sm font-semibold leading-6 text-gray-600">{{ stat.label }}</dt>
                            <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{{ stat.value }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '37' },
    { label: 'Countries', value: '12' },
    { label: 'Raised', value: '$25M' },
]
</script>