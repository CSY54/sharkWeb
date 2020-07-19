<template lang="pug">
v-container.pa-0(fluid fill-height)
  v-row(
    v-if="loading"
    align="center"
    justify="center"
  )
    v-progress-circular(indeterminate)
  v-row(
    v-else-if="!canShowMap"
    align="center"
    justify="center"
  )
    h2.text-center
      | 請開啟瀏覽器之定位功能以使用此服務
      br
      | 如已開啟，請稍等或重新整理此頁面
  MglMap(
    v-else
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="[longitude, latitude]"
    :zoom="12"
  )
    MglNavigationControl
    MglMarker(
      v-for="(store, index) in stores"
      :key="index"
      :coordinates="getCoordinate(store)"
    )
      MglPopup
        v-container(fluid fill-height)
          v-card(flat)
            v-card-title(v-text="store.name")
            v-row(justify="center")
              v-rating(
                :value="store.rating"
                color="yellow accent-4"
                background-color="grey darken-1"
                readonly
                small
                dense
              )
            v-card-actions
              v-btn(
                @click="toggleInformation(store)"
                :loading="buttonLoading"
                color="primary"
                block
              )
                | 詳細資訊
  InformationDialog(
    @close="closeDialog"
    v-if="showInformation"
    v-bind="shownStore"
  )
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker, MglPopup, MglNavigationControl } from 'vue-mapbox'

import InformationDialog from '@/components/InformationDialog'

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup,
    MglNavigationControl,
    InformationDialog
  },
  data: () => ({
    loading: true,
    canShowMap: false,
    accessToken:
      'pk.eyJ1IjoiYXJhc2hpODciLCJhIjoiY2tjcnZxaXoyMGh0czJxanZxc3ZmY3d1YyJ9.OVrTS_6qhfnIXAtztl6VjA',
    curLongitude: 0,
    curLatitude: 0,
    mapStyle: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    stores: [],
    shownStore: {},
    showInformation: false,
    buttonLoading: false
  }),
  head: () => ({
    title: '地圖'
  }),
  computed: {
    coordinates() {
      const res = this.stores.map(({ longitude, latitude }) => [
        longitude,
        latitude
      ])

      return res
    }
  },
  created() {
    this.mapbox = Mapbox
  },
  async mounted() {
    await navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        this.longitude = coords.longitude
        this.latitude = coords.latitude
        const data = await this.fetchData(coords)
        this.stores = data
        this.canShowMap = true
        this.loading = false
      },
      () => {}
    )
  },
  methods: {
    async fetchData({ latitude, longitude }) {
      const data = await this.$axios.$post('/store', {
        latitude,
        longitude
      })

      return data
    },
    getCoordinate({ longitude, latitude }) {
      return [longitude, latitude]
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

<style>
.mapboxgl-popup-content {
  padding: 0;
}
</style>
