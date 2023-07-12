<template>
    <main class="my-2">

        <Head>
            <Title>Maxazon - Next level shopping experience</Title>
        </Head>

        <div class="container mx-auto px-6">
            <Hero />

            <div class="mt-16">
                <h3 class="text-gray-800 text-2xl font-medium" v-if="showFeaturedCategoriesOnly">Featured Categories</h3>
                <h3 class="text-gray-800 text-2xl font-medium" v-else>All Categories</h3>
                <div class="md:flex mt-8 md:-mx-4">
                    <CategoryCard class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 mb-4"
                        v-for="category in categoriesData" :image="category.image" :title="category.title"
                        :description="category.description" :linkText="category.buttonText" :id="category.id"
                        :collectionId="category.collectionId" />
                </div>
                <button @click="showFeaturedCategoriesOnly = !showFeaturedCategoriesOnly"
                    class="flex items-center gap-2 border px-4 py-2 rounded-lg transition hover:bg-gray-800 hover:text-white">
                    <span v-if="showFeaturedCategoriesOnly">All Categories</span>
                    <span v-else>Featured Categories</span>
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </button>
            </div>


            <div class="mt-16">
                <h3 class="text-gray-800 text-2xl font-medium">Featured Products</h3>
                <div
                    class="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6 place-items-center">
                    <Card v-for="product in featuredProductsData"  :id="product.id" :collectionId="product.collectionId" :image="product.image" :name="product.name"
                        :description="product.description" :isNew="product.isNew" :onSale="product.onSale"
                        :badges="product.badges" :link="product.link" />
                </div>
            </div>
            <NuxtLink to="/products"
                class="w-max flex items-center gap-2 border px-4 py-2 mt-10 rounded-lg transition hover:bg-gray-800 hover:text-white">
                <span>All Products</span>
                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </NuxtLink>
        </div>
    </main>
</template>

<script setup>
import axios from "axios"

const apiBaseUrl = useRuntimeConfig().public.API

const allCategoriesData = ref([])
const showFeaturedCategoriesOnly = ref(true)
const categoriesData = computed(() => {
    return allCategoriesData.value.filter(category => {
        if (!showFeaturedCategoriesOnly.value) {
            return true
        }
        return category.featured
    })
})

axios.get(apiBaseUrl + "categories/records?filter=(disabled=false)").then((res) => {
    allCategoriesData.value = res.data.items
})

const featuredProductsData = ref([])
axios.get(apiBaseUrl + "products/records?filter=(disabled=false)").then((res) => {
    featuredProductsData.value = res.data.items.map(val => {
        val.badges = val.badges.split(",")
        return val
    })
})

</script>
