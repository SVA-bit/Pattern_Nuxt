<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <nav class="bg-indigo-500 text-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold">Логотип</NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="hover:text-indigo-200 transition"
          >Главная</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-indigo-200 transition"
          >Контакты</NuxtLink
        >
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden focus:outline-none"
        aria-label="Toggle menu"
        @click="toggleMenu">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-indigo-700">
      <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <NuxtLink
          to="/"
          class="hover:text-indigo-200 transition"
          @click="toggleMenu"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="hover:text-indigo-200 transition"
          @click="toggleMenu"
          >Contact</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>
