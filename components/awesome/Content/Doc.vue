<script lang="ts" setup>
const props = defineProps({
  emptyTip: {
    type: String,
    required: false,
    default: 'This page is empty',
  },
})
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <LayoutPageHeader class="max-w-3xl px-4 mx-auto">
        <LayoutPageTitle :text="doc.title" />
      </LayoutPageHeader>
      <div class="max-w-3xl px-4 mx-auto my-10">
        <img
          style="width: 100%"
          format="webp"
          fit="cover"
          :alt="doc.title"
          :src="doc.image"
        />
      </div>
      <LayoutPageSection
        class="max-w-3xl px-4 mx-auto custom-content-blog pb-5"
      >
        <p>
          <i class="text-[18px] font-[500]">"{{ doc.description }}"</i>
        </p>
        <ContentRenderer :value="doc" />
        <div>
          <p class="font-bold text-right">{{ doc.author }}</p>
        </div>
      </LayoutPageSection>
    </template>
    <template #empty>
      <h1>{{ emptyTip }}</h1>
    </template>
    <template #not-found>
      <AwesomeError :code="404" wrap />
    </template>
  </ContentDoc>
</template>
