<template>
  <div>
    <div
      id="pagetop"
      class="fixed hidden cursor-pointer bottom-8 right-12"
      @click="toTop"
    ></div>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp()
const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  const mybutton = document.getElementById('pagetop')
  mybutton.style.display = 'none'
}
onMounted(() => {
  document.addEventListener('wheel', (event) => {
    const mybutton = document.getElementById('pagetop')

    const prev = event.pageY
    if (prev > 300) {
      mybutton.style.display = 'block'
    } else {
      mybutton.style.display = 'none'
    }
  })
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

function onMounted(arg0: () => void) { throw new Error("Function not
implemented.") }
