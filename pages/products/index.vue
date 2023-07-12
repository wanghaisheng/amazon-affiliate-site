<template>
    <main class="container mx-auto px-6">

        <Head>
            <Title>Maxazon - High Quality Deals</Title>
        </Head>
        <div class="mt-8">
            <ProductsHero
                :image="imageUrl"
                :title="category || 'All Products'" />
            <!-- <h3 class="text-gray-800 text-2xl font-medium">{{ category || "All Products" }}</h3> -->
            <div
                class="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6 place-items-center">
                <Card v-for="product in featuredProductsData" :id="product.id" :collectionId="product.collectionId"
                    :image="product.image" :name="product.name" :description="product.description" :isNew="product.isNew"
                    :onSale="product.onSale" :badges="product.badges" :link="product.link" />
            </div>
        </div>
    </main>
</template>

<script setup>
import axios from "axios"
const filesPath = useRuntimeConfig().public.FILES
const apiBaseUrl = useRuntimeConfig().public.API
const category = useRoute().query.category;
const categoryId = useRoute().query.id;
const imageUrl = ref('')
const featuredProductsData = ref([])

let productApiUrl = apiBaseUrl + "products/records"

if (category) {
    productApiUrl += "?filter=(categories.title?=%27" + category + "%27)"
}
if (categoryId) {
    axios.get(apiBaseUrl + "categories/records/" + categoryId).then((res) => {
        imageUrl.value = filesPath + res.data.collectionId + '/' + res.data.id + '/' + res.data?.image
    })
}
axios.get(productApiUrl).then((res) => {
    featuredProductsData.value = res.data.items.map(val => {
        val.badges = val.badges.split(",")
        return val
    })
})

</script>
