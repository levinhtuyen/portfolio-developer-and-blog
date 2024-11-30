<template>
  <div id="pageContainer" class="pb-24 hide-scrollbar">
    <div id="viewer" class="pdfViewer"></div>
  </div>
</template>

<script lang="ts" setup>
import pdfjsLib from 'pdfjs-dist/build/pdf'
import { PDFViewer } from 'pdfjs-dist/web/pdf_viewer'
import 'pdfjs-dist/web/pdf_viewer.css'

pdfjsLib.GlobalWorkerOptions.workerSrc =
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.min.js'

const getPdf = async () => {
  const container = document.getElementById('pageContainer') as any
  const pdfViewer = new PDFViewer({
    container,
  })
  const loadingTask = pdfjsLib.getDocument('./mycv.pdf')
  const pdf = await loadingTask.promise
  pdfViewer.setDocument(pdf)
}
onMounted(() => {
  getPdf()
})
</script>

<style lang="scss" scoped>
#pageContainer {
  margin: auto;
  width: 100%;
  overflow: scroll;
  .canvasWrapper {
    width: 100%;

  }
}

div.page {
  display: inline-block;
}
</style>
