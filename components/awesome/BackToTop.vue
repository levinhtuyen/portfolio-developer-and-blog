<template>
  <div class="fixed bottom-10 right-10">
    <button id="topButton" @click="scrolltoTop">
      <img
        width="50"
        height="50"
        src="https://cdn3.iconfinder.com/data/icons/fluent-solid-24px-vol-1/24/ic_fluent_arrow_circle_up_24_filled-512.png"
        alt=""
      />
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
