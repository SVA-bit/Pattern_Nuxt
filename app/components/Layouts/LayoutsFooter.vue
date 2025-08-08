<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-indigo-500 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Контакты компании</h3>
          <p class="text-indigo-100">
            Email:
            <a
              href="mailto:support@example.com"
              class="hover:text-indigo-200 transition"
              >support@example.com</a
            >
          </p>
          <p class="text-indigo-100">
            Телефон:
            <a href="tel:+11234567890" class="hover:text-indigo-200 transition"
              >+7 (950) 456-7890</a
            >
          </p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-indigo-200 transition"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-indigo-200 transition"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h3 class="text-lg font-semibold mb-4">About</h3>
          <p class="text-indigo-100">
            MyApp is your go-to platform for managing users and contacts. Built
            with Nuxt 4 and Tailwind CSS.
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-indigo-500 text-center">
        <p class="text-indigo-100">
          &copy; {{ currentYear }} MyApp. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
