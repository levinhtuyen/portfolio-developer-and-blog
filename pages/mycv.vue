<script lang="ts" setup>
const LayoutPagePdfViewer = defineAsyncComponent(() => import('@/components/layouts/page/PdfViewer.vue'))
</script>
<template>
  <LayoutPageWrapper>
    <LayoutPageNavbar class="h-[64px] max-h-[64px]" />
    <LayoutPageContent class="max-w-5xl m-auto">
      <LayoutPageSection>
        <client-only>
              <LayoutPagePdfViewer />
          </client-only>
      </LayoutPageSection>
    </LayoutPageContent>
    <LayoutPageFooter class="h-[52px] md:h-[42px]" />
    <AwesomeBackToTop />
  </LayoutPageWrapper>
</template>
