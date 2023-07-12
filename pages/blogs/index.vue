<template>
    <main class="container mx-auto px-6">

        <Head>
            <Title>Maxazon - Blogs</Title>
        </Head>
        <div class="divide-y divide-gray-200 ">
            <div class="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1
                    class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Latest Blogs</h1>
            </div>
            <ul class="divide-y divide-gray-200 ">
                <li v-for="blog in blogsData" class="py-12">
                    <article>
                        <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                            <dl>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6 text-gray-500 "><time
                                        datetime="2021-08-07T15:32:14.000Z">{{ formatDate(blog.date) }}</time></dd>
                            </dl>
                            <div class="space-y-5 xl:col-span-3">
                                <div class="space-y-6">
                                    <div>
                                        <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                            <NuxtLink class="text-gray-900 "
                                                :to="'/blogs/' + blog.slug + '?id=' + blog.id">
                                                {{ blog.title }}</NuxtLink>
                                        </h2>
                                        <div class="flex flex-wrap">
                                            <span v-for="tag in blog.tags?.split(',')"
                                                class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 ">
                                                {{ tag }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="prose max-w-none text-gray-500 ">{{ blog.punchline }}
                                    </div>
                                </div>
                                <div class="text-base font-medium leading-6">
                                    <NuxtLink class="text-primary-500 hover:text-primary-600 "
                                        :to="'/blogs/' + blog.slug + '?id=' + blog.id" :aria-label="blog.title">
                                        Read more →
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </article>
                </li>
            </ul>
        </div>
        <div v-if="showViewMorePosts && blogsData.length" class="flex justify-end text-base font-medium leading-6">
            <button @click="fetchMoreBlogs()"
                class="flex items-center gap-2 border px-4 py-2 rounded-lg transition hover:bg-gray-800 hover:text-white">
                View More Posts →
            </button>
        </div>
    </main>
</template>

<script setup>
import axios from "axios"

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
};

const showViewMorePosts = ref(true)
const apiBaseUrl = useRuntimeConfig().public.API
const blogsData = ref([])

const page = ref(1)

let perApiCallLimit = 10
function fetchBlogs() {
    axios.get(apiBaseUrl + "blogs/records?filter=(draft=false)&sort=-date&perPage=" + perApiCallLimit + "&page=" + page.value).then(res => {
        blogsData.value = blogsData.value.concat(res.data.items)
        if (page.value >= res.data.totalPages) {
            showViewMorePosts.value = false
        }
    })
}

function fetchMoreBlogs() {
    page.value += 1
    fetchBlogs()
}

fetchBlogs()
</script>
