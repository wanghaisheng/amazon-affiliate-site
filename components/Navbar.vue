<template>
    <nav class="bg-white border-gray-200  container mx-auto px-6">
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink to="/" class="flex items-center">
                <img src="/logo.png" class="h-7 mr-2" alt="Maxazon Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#181d42]">Maxazon</span>
            </NuxtLink>
            <button type="button" @click="isOpen = !isOpen"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  ">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div :class="isOpen ? '' : 'hidden'" class="w-full md:block md:w-auto">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <NuxtLink to="/products"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                            Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blogs"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                            Blogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                            About</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
const cartOpen = ref(false)
const isOpen = ref(false)
</script>

