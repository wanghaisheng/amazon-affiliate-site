<template>
    <CategoryCard :image="image" :title="title" :text="text" componentType="hero" :linkText="linkText" :link="link" />
</template>

<script setup>
const image = 'https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144'
const title = 'Elevate Your Shopping Experience'
const text = 'Discover Unmatched Excellence through High Quality Products and Unbeatable Deals'
const linkText = 'View Products'
const link = '/products'
</script>
