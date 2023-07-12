<template>
    <NuxtLink :to="props.link" class="card max-w-[100%] sm:w-72 md:w-80 xl:w-[360px] w-96 bg-base-100 shadow-xl h-[100%] pt-2 border border-transparent hover:border-base-200">
        <div class="w-[full] h-[220px] bg-contain bg-center bg-no-repeat rounded-t-xl border-b border-base-200" :style="`background-image: url('` + filesPath + props.collectionId + '/' + props.id + '/' + props.image + `')`" :alt="props.name"></div>
        <div class="card-body">
            <div class="flex gap-1">
                <div v-if="props.isNew" class="badge badge-secondary">NEW</div>
                <div v-if="props.onSale" class="badge badge-primary">SALE</div>
            </div>
            <h2 class="card-title line-clamp-1">
                {{ props.name }}
            </h2>
            <p class="line-clamp-3">{{ props.description }}</p>
            <div class="card-actions">
                <div v-for="badge in props.badges" class="badge badge-outline">{{ badge }}</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const filesPath = useRuntimeConfig().public.FILES

const props = defineProps({
    id: {
        required: true,
        type: String
    },
    collectionId: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    isNew: {
        default: false,
        type: Boolean
    },
    onSale: {
        default: false,
        type: Boolean
    },
    badges: {
        default: [],
        type: Array
    },
    link: {
        required: true,
        type: String
    },
})
</script>
