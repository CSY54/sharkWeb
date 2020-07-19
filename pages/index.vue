<template lang="pug">
v-container.pa-0(style="background-color: #9cc9e5;" fluid fill-height)
  v-img(
    src="index.png"
  )
    v-row.fill-height(
      align="center"
    )
      v-col
        v-row.justify-center
          h1.display-4.font-weight-medium
            | {{ title }}
        v-row.justify-center
          v-btn(
            nuxt
            to="/map"
            rounded
            large
            color="primary"
          )
            | 開始使用
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    title: 'ShArK sHaRk'
  }),
  head: () => ({
    title: '首頁'
  })
}
</script>
