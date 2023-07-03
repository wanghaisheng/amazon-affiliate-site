<template>
    <div class="rounded-md overflow-hidden bg-cover bg-center h-80" :style="`background-image: url('` + props.image + `')`">
        <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-6 w-full">
                <h2 class="lg:text-5xl md:text-3xl text-2xl text-white font-semibold text-center">{{ props.title }}</h2>
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
    title: {
        required: true,
        type: String
    },
})
</script>
