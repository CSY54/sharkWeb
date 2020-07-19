<template lang="pug">
v-app
  v-app-bar(color="primary" fixed app)
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(@click="showSearch = true" icon)
      v-icon mdi-magnify
  v-main
    nuxt
  SearchStore(
    v-if="showSearch"
    @close="showSearch = false"
  )
</template>

<script>
import SearchStore from '@/components/SearchStore'

export default {
  components: {
    SearchStore
  },
  data: () => ({
    title: 'ShArK sHaRk',
    showSearch: false
  })
}
</script>
