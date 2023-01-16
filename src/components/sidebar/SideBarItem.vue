<script setup>
defineProps(["url","name"])
</script>
<template>
    <li class="nav-item">
        <router-link :to=url class="nav-link">
            <span data-feather="shopping-cart"></span>
            {{name}}
        </router-link>
    </li>
</template>
<style>
</style>