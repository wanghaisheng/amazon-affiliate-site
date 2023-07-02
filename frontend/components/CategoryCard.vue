<template>
    <div :class="componentType == 'card' ? 'h-64': 'h-80'" class="rounded-md overflow-hidden bg-cover bg-center" :style="`background-image: url('` + props.image + `')`">
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
                <h3 v-if="componentType == 'card'" class="text-2xl text-white font-semibold">{{ props.title }}</h3>
                <h2 v-else class="text-2xl text-white font-semibold">{{ props.title }}</h2>
                <p class="mt-2 text-gray-200">{{ props.text }}</p>
                <NuxtLink :to="props.link"
                    class="w-max flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>{{ props.linkText }}</span>
                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        required: true,
        type: String
    },
    componentType: {
        default: 'card',
        type: String
    },
    title: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    },
    linkText: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    }
})
</script>
