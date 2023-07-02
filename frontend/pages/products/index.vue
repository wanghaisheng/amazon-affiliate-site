<template>
    <main class="container mx-auto px-6">
        <div class="mt-8">
            <h3 class="text-gray-800 text-2xl font-medium">{{ category || "All Products" }}</h3>
            <div
                class="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6 place-items-center">
                <Card v-for="product in featuredProducts" :image="product.image" :name="product.name"
                    :description="product.description" :isNew="product.isNew" :onSale="product.onSale"
                    :badges="product.badges" :link="product.link" />
            </div>
        </div>
    </main>
</template>

<script setup>
const category = useRoute().query.category;

const featuredProductsData = ref([
    {
        image: "https://m.media-amazon.com/images/I/61f-40lwnQL._AC_SX466_.jpg",
        name: 'Euker Smart Watch for Men Women 2022 Upgraded Smartwatches 1.69"',
        description:
            "Full Touchscreen Fitness Tracker Watch with Heart Rate/Blood Oxygen Monitor, Sleep Tracking, IP68 Waterproof",
        isNew: true,
        onSale: true,
        badges: ["Fashion", "Electronic", "Lifestyle"],
        link:
            "https://www.amazon.com/Euker-Upgraded-Smartwatches-Touchscreen-Waterproof/dp/B0BCW4Q4YN/",
        categories: ["Smart Watches"],
    },
    {
        image: "https://m.media-amazon.com/images/I/51GwFZTvLtL._AC_SX679_.jpg",
        name: 'OnePlus Pad 11.61"',
        description:
            "LCD Display, 8GB RAM,128GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet",
        isNew: false,
        onSale: true,
        badges: ["Electronic", "Products"],
        link:
            "https://www.amazon.com/OnePlus-Display-MediaTek-Dimensity-Cellular/dp/B0C4FYBKHH/",
        categories: ["Tablets"],
    },
    {
        image: "https://m.media-amazon.com/images/I/71CKGX0iXPS._AC_SX679_.jpg",
        name: 'SAMSUNG Galaxy Tab S7+ Plus 12.4"',
        description:
            "128GB Android Tablet w/ S Pen Included, Edge-to-Edge Display, Expandable Storage, Fast Charging USB-C Port, SM-T970NZKAXAR, Mystic Black",
        isNew: true,
        onSale: false,
        badges: ["Electronic", "Products"],
        link:
            "https://www.amazon.com/SAMSUNG-Included-Expandable-Charging-%E2%80%8ESM-T970NZKAXAR/dp/B08FBPRY3N/",
        categories: ["Tablets"],
    },
    {
        image: "https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_SX466_.jpg",
        name: "ASUS G614JV-AS73 ROG Strix G16 (2023) Gaming Laptop",
        description:
            "16â€ 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-AS73, Eclipse Gray",
        isNew: true,
        onSale: true,
        badges: ["Laptop", "Gaming", "Electronics"],
        link: "https://www.amazon.com/ASUS-G614JV-AS73-Strix-Gaming-Laptop/dp/B0BV8H8HVD",
        categories: ["Gaming", "Laptops"],
    },
    {
        image: "https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SX679_.jpg",
        name: "CyberpowerPC Gamer Xtreme VR Gaming PC",
        description:
            "Intel Core i7-12700F 2.1GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD, WiFi & Win 11 Home (GXiVR8040A12), Black",
        isNew: true,
        onSale: false,
        badges: ["Gaming PC", "Gaming Beast"],
        link: "https://www.amazon.com/CyberpowerPC-Xtreme-i7-12700F-GeForce-GXiVR8040A12/",
        categories: ["Gaming"],
    },
]);

const featuredProducts = computed(() => {
    if (!category) {
        return featuredProductsData.value
    }
    const filteredProducts = []
    featuredProductsData.value.forEach((product) => {
        if (product.categories?.includes(category)) {
            filteredProducts.push(product)
        }
    })
    return filteredProducts
})
</script>
