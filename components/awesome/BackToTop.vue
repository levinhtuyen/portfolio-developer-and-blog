<template>
  <div class="fixed bottom-12 right-10 bg-white rounded-full">
    <button id="topButton" name="button back to top" @click="scrolltoTop">
      <img width="50" height="50" src="/images/toTop.png" alt="back to top" />
    </button>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp()
const scrolltoTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
onMounted(() => {
  const topBtn = document.querySelector('#topButton') as any
  window.onscroll = () => {
    if (window.pageYOffset > 10) {
      // unhide
      topBtn.classList.add('block')
      topBtn.classList.remove('hidden')
    } else {
      // hide
      topBtn.classList.remove('block')
      topBtn.classList.add('hidden')
    }
  }
})
</script>
<style lang="scss" scoped>
#pagetop {
  z-index: 1000000;
  img {
    border-radius: 50%;
    background-color: #ffffff;
  }
}
</style>
