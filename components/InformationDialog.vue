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
      v-toolbar-title 店家資訊
    v-card-text.pa-0
      v-container.pa-0(fluid)
        v-img.d-flex(
          height="500"
          :src="image"
          gradient="0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.11) 36%, rgba(0, 0, 0, 0) 46%"
        )
          v-row.fill-height(align="end")
            v-container
              .text-h4.white--text.font-weight-medium(v-text="name")
              .text-h6.white--text(v-text="address")
      v-container
        .text-h5 評論
        v-form.my-2
          v-textarea(
            v-model="newComment"
            label="新增評論"
          )
          v-rating(
            v-model="newRating"
          )
          v-btn(
            @click="submit"
            :loading="loading"
            color="primary"
            :disabled="submitted"
          )
            | {{ submitted ? '已送出' : '送出' }} 
        v-card.mt-2(
          v-for="({ username, comment, rating }, i) in feedback"
          :key="i"
        )
          v-list-item
            v-list-item-icon
              v-icon mdi-account
            v-list-item-content
              v-list-item-title
                | {{ username }}
              v-list-item-subtitle
                v-rating(
                  :value="rating / 2"
                  color="yellow accent-4"
                  background-color="grey darken-1"
                  readonly
                  small
                  dense
                  half-increments
                )
              v-list-item-content
                | {{ comment }}
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    feedback: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    show: true,
    newComment: '',
    newRating: 0,
    loading: false,
    submitted: false
  }),
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    },
    submit() {
      this.loading = true
      setTimeout(() => {
        this.newComment = ''
        this.newRating = 0
        this.submitted = true
        this.loading = false
      }, 2000)
    }
  }
}
</script>
