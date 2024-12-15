<script lang="ts" setup>
import { useMetaSeoIndex } from '@/util/meta.ts'
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })

useMetaSeoIndex()
</script>

<template>
  <AwesomeHome :with-alert="true" />
</template>
