<template>
    <main class="container mx-auto px-6">
        <div id="blog-header">
            <div class="space-y-1 border-b border-gray-200 pb-10 text-center">
                <dl>
                    <div>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500">
                            <time datetime="2021-08-07T15:32:14.000Z">{{ formatDate(blog.date) }}</time>
                        </dd>
                    </div>
                </dl>
                <div>
                    <h1
                        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        {{ blog.title }}
                    </h1>
                    <div class="flex flex-wrap justify-center mt-2">
                        <span v-for="tag in blog.tags?.split(',')"
                            class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 ">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-1 pb-8 mt-4" v-html="blog.content"></div>
    </main>
</template>

<script setup>
import axios from "axios";

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
};

const apiBaseUrl = useRuntimeConfig().public.API;
const blogId = useRoute().query.id;

const blog = ref({});
if (blogId) {
    axios.get(apiBaseUrl + "blogs/records/" + blogId).then((res) => {
        blog.value = res.data;
    });
}
</script>
