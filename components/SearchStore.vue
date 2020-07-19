<template lang="pug">
v-dialog(
  v-model="show"
  transition="dialog-bottom-transition"
  fullscreen
  hide-overlay
  scrollable
)
  v-card
    v-toolbar(dark color="primary")
      v-btn(icon dark @click="close")
        v-icon mdi-close
      v-toolbar-title 店家查詢
    v-card-text
      v-autocomplete(
        v-model="model"
        :items="entries"
        :loading="isLoading"
        :search-input.sync="search"
        hide-no-data
        hide-selected
        color="white"
        label="店家名稱或地址"
        placeholder="例：臺南、臺北、中山路..."
        prepend-icon="mdi-magnify"
        return-object
      )
    v-expand-transition
      v-list(v-if="entries")
        v-list-item(
          v-for="(field, index) in entries"
          :key="index"
          @click="toggleInformation(field)"
        )
          v-list-item-content
            v-list-item-title(v-text="field.name")
            v-list-item-subtitle(v-text="field.address")
  InformationDialog(
    @close="closeDialog"
    v-if="showInformation"
    v-bind="shownStore"
  )
</template>

<script>
import InformationDialog from '@/components/InformationDialog'

export default {
  components: {
    InformationDialog
  },
  data: () => ({
    show: true,
    model: null,
    entries: [],
    isLoading: false,
    search: '',
    shownStore: {},
    showInformation: false
  }),
  computed: {
    fields() {
      return this.entries
    }
  },
  watch: {
    search(val) {
      if (this.isLoading) return

      this.isLoading = true
      this.$axios
        .post('/store/search', {
          keywords: this.search != null ? this.search.split(' ') : ''
        })
        .then((res) => {
          this.entries = res.data
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    },
    async toggleInformation({ id }) {
      this.buttonLoading = true
      const store = await this.$axios.$get(`/store/${id}`)
      this.buttonLoading = false
      this.shownStore = store
      this.showInformation = true
    },
    closeDialog() {
      this.showInformation = false
    }
  }
}
</script>
