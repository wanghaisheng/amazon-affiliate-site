<template>
    <main class="my-2">
        <div class="container mx-auto px-6">
            <Hero />

            <div class="mt-16">
                <h3 class="text-gray-800 text-2xl font-medium">Featured Categories</h3>
                <div class="md:flex mt-8 md:-mx-4">
                    <CategoryCard class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 mb-4"
                        v-for="category in categoriesData" :image="category.image" :title="category.title"
                        :text="category.text" :linkText="category.linkText" :link="category.link" />
                </div>
            </div>


            <div class="mt-16">
                <h3 class="text-gray-800 text-2xl font-medium">Featured Products</h3>
                <div class="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-6 place-items-center">
                    <Card v-for="product in featuredProductsData" :image="product.image" :name="product.name"
                        :description="product.description" :isNew="product.isNew" :onSale="product.onSale"
                        :badges="product.badges" :link="product.link" />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
const categoriesData = ref([
    {
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1565&q=80",
        title: "Gaming",
        text: "Unlock Boundless Potential: Power up your productivity with our range of exceptional gaming beasts.",
        linkText: "Shop Now",
        link: "/products?category=Gaming"
    },
    {
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=simon-daoudi-2wFoa040m8g-unsplash.jpg&w=640",
        title: "Smart Watches",
        text: "Time is on your side: Embrace the future with our cutting-edge smartwatches.",
        linkText: "Shop Now",
        link: "/products?category=Smart Watches"
    }
])

const featuredProductsData = ref([
    {
        image: "https://m.media-amazon.com/images/I/61f-40lwnQL._AC_SX466_.jpg",
        name: "Euker Smart Watch for Men Women 2022 Upgraded Smartwatches 1.69\"",
        description: 'Full Touchscreen Fitness Tracker Watch with Heart Rate/Blood Oxygen Monitor, Sleep Tracking, IP68 Waterproof',
        isNew: true,
        onSale: true,
        badges: ["Fashion", "Electronic", "Lifestyle"],
        link: 'https://www.amazon.com/Euker-Upgraded-Smartwatches-Touchscreen-Waterproof/dp/B0BCW4Q4YN/'
    },
    {
        image: "https://m.media-amazon.com/images/I/51GwFZTvLtL._AC_SX679_.jpg",
        name: "OnePlus Pad 11.61\"",
        description: 'LCD Display, 8GB RAM,128GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet',
        isNew: false,
        onSale: true,
        badges: ["Electronic", "Products"],
        link: 'https://www.amazon.com/OnePlus-Display-MediaTek-Dimensity-Cellular/dp/B0C4FYBKHH/'
    },
    {
        image: "https://m.media-amazon.com/images/I/71CKGX0iXPS._AC_SX679_.jpg",
        name: "SAMSUNG Galaxy Tab S7+ Plus 12.4\"",
        description: '128GB Android Tablet w/ S Pen Included, Edge-to-Edge Display, Expandable Storage, Fast Charging USB-C Port, SM-T970NZKAXAR, Mystic Black',
        isNew: true,
        onSale: false,
        badges: ["Electronic", "Products"],
        link: 'https://www.amazon.com/SAMSUNG-Included-Expandable-Charging-%E2%80%8ESM-T970NZKAXAR/dp/B08FBPRY3N/'
    },
    {
        image: "https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_SX466_.jpg",
        name: "ASUS G614JV-AS73 ROG Strix G16 (2023) Gaming Laptop",
        description: '16â€ 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-AS73, Eclipse Gray',
        isNew: true,
        onSale: true,
        badges: ["Laptop", "Gaming", "Electronics"],
        link: 'https://www.amazon.com/ASUS-G614JV-AS73-Strix-Gaming-Laptop/dp/B0BV8H8HVD'
    },
    {
        image: "https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SX679_.jpg",
        name: "CyberpowerPC Gamer Xtreme VR Gaming PC",
        description: 'Intel Core i7-12700F 2.1GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD, WiFi & Win 11 Home (GXiVR8040A12), Black',
        isNew: true,
        onSale: false,
        badges: ["Gaming PC", "Gaming Beast"],
        link: 'https://www.amazon.com/CyberpowerPC-Xtreme-i7-12700F-GeForce-GXiVR8040A12/'
    },])
</script>
