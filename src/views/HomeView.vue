<script setup></script>

<template>
  <main
    class="py-52 flex flex-col gap-6 items-center justify-center text-center text-white min-h-screen"
  >
    <h1 class="text-6xl font-bold block">{{ $t('home.title1') }}</h1>
    <h2 class="block">
      {{ $t('home.title2') }}
    </h2>

    <!-- Button -->
    <div class="flex gap-6 mt-10">
      <button
        class="shadow-2xl hover:scale-95 transform transition-all duration-300 hover:bg-orange-600 h-10 px-10 bg-orange-500 text-white rounded-full font-semibold"
      >
        {{ $t('home.button1') }}
      </button>
      <button
        class="shadow-2xl hover:scale-95 transform transition-all duration-300 hover:bg-green-600 h-10 px-10 bg-green-500 text-white rounded-full font-semibold flex items-center justify-center gap-2"
      >
        <img src="../components/icons/Watshaap.svg" class="size-5 text-white" alt="" />
        {{ $t('home.button2') }}
      </button>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../public/Images/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
}
</style>
