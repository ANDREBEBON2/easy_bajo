<script setup>
import languageSwicher from '../languageSwicher.vue'
</script>

<template>
  <main class="fixed top-0 left-0 w-full">
    <!-- Welcome -->
    <div
      class="h-12 bg-orange-500 flex items-center justify-center drop-shadow-xl drop-shadow-blue-700"
    >
      <h1 class="text-white font-bold">🌴 {{ $t('greeting') }} 🌴</h1>
    </div>

    <!-- navbar -->
    <nav class="h-16 bg-blue-600 drop-shadow-sm">
      <div class="relative container mx-auto flex items-center justify-center h-full">
        <!-- Logo -->
        <div class="flex gap-2 items-center absolute left-0">
          <div class="h-10 w-10 rounded-full bg-orange-500"></div>
          <h1 class="text-2xl font-bold text-white">
            <span class="text-orange-500">Easy</span>bajo.com
          </h1>
        </div>

        <!-- navlinks -->
        <div
          class="flex items-center justify-center mt-1 self-center gap-8 text-white font-semibold"
        >
          <router-link class="hover:text-orange-500">{{ $t('nav.home') }}</router-link>
          <router-link class="hover:text-orange-500">{{ $t('nav.destination') }}</router-link>
          <router-link class="hover:text-orange-500">{{ $t('nav.accommodation') }}</router-link>
          <router-link class="hover:text-orange-500">{{ $t('nav.testimonials') }}</router-link>
          <router-link class="hover:text-orange-500">{{ $t('nav.about') }}</router-link>
          <router-link class="hover:text-orange-500">{{ $t('nav.contact') }}</router-link>

          <!-- Select Language -->

          <languageSwicher />
        </div>
      </div>
    </nav>
  </main>
</template>
