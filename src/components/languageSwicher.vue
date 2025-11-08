<script setup>
import { useI18n } from 'vue-i18n'
import { watch, ref } from 'vue'

const { locale } = useI18n()

// [Opsional tapi direkomendasikan]
// Simpan pilihan bahasa ke localStorage setiap kali berubah
watch(locale, (newLang) => {
  localStorage.setItem('lang', newLang)
})

// Gunakan const, ini praktik yang lebih baik daripada var
const isOpen = ref(false)

// Fungsi untuk memilih bahasa DAN menutup menu
const selectLanguage = (lang) => {
  locale.value = lang // 1. Set bahasa
  isOpen.value = false // 2. Tutup dropdown
}
</script>

<template>
  <div class="relative inline-block" @click="isOpen = !isOpen">
    <button
      class="h-7 px-5 bg-sky-200/20 rounded-full flex items-center gap-2 hover:bg-sky-200/30 transition-all duration-300"
    >
      <img src="../components/icons/WordIcon.svg" alt="" class="size-4" />
      {{ locale.toUpperCase() }}
    </button>

    <div class="absolute bg-white rounded-md shadow-lg mt-3 right-0 w-32 z-10" v-if="isOpen">
      <ul class="py-1">
        <li
          @click="selectLanguage('en')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          English
        </li>
        <li
          @click="selectLanguage('jp')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Japanese
        </li>
        <li
          @click="selectLanguage('es')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Spanish
        </li>
        <li
          @click="selectLanguage('id')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Indonesian
        </li>
        <li
          @click="selectLanguage('cn')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Chinese
        </li>
        <li
          @click="selectLanguage('ru')"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
        >
          Russian
        </li>
      </ul>
    </div>
  </div>
</template>
