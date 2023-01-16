<script setup>
import NavBar from './components/navbar/NavBar.vue';
import SideBar from './components/sidebar/SideBar.vue';
</script>

<template>
<div class="container-fluid">
  <div class="row">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view></router-view>
    </main>
  </div>
</div>
  



</template>

<style scoped>
</style>
