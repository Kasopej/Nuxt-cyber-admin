import showdown from 'showdown'
import languages from '~/assets/json/languages.json'
import presetDescriptions from '~/assets/presets/descriptions.json'
import programTypes from '~/assets/presets/programTypes.json'
import { needsProgramDataOnLoad } from '~/plugins/mixins'

export default {
  mixins: [needsProgramDataOnLoad],
  data() {
    return {
      languages,
      programTypes,
      presetDescriptions,
      breadcrumbsItems: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/',
        },
        {
          text: 'Edit Program',
          disabled: true,
          to: '/program/add/',
        },
      ],
      step: 1,
      descriptionPreview: null,
      selectedPresetDescription: null,
      tags: ['tag 1', 'sample tag', 'tag 3'],
      rewards: [
        'Bounty',
        'Gifts',
        'Hall Of Fame',
        'Letter Of Invitation',
        'Swag',
      ],
      rules: {
        required: [(value) => !!value || 'This Field Is Required'],
      },
      File: null,
      program: {},
      bannerMessage: 'Click to choose Banner',
    }
  },

  computed: {
    thumbnail() {
      return this.program.thumbnail
    },
    banner() {
      return this.program.banner
    },
  },

  methods: {
    addRow(type) {
      switch (type) {
        case 'scope':
          this.program.scope.push({})
          break

        case 'out-of-scope':
          this.program.outofscope.push({})
          break

        default:
          break
      }
    },

    deleteRow(type, index) {
      switch (type) {
        case 'scope':
          if (this.program.scope.length > 1) {
            this.program.scope.splice(index, 1)
          }
          break

        case 'out-of-scope':
          if (this.program.outofscope.length > 1) {
            this.program.outofscope.splice(index, 1)
          }
          break

        default:
          break
      }
    },

    validateStep(nextStep, stepForm) {
      if (this.$refs[stepForm].validate()) {
        this.step = nextStep
      }
    },

    setImageBlob(event, type) {
      const reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = () => {
        setTimeout(() => {
          if (type === 'banner') {
            this.updateBanner(reader.result)
          } else {
            this.updateThumbnail(reader.result)
          }
        }, 1500)
      }
    },

    previewdescription() {
      const converter = new showdown.Converter()
      this.descriptionPreview = converter.makeHtml(this.program.description)
    },

    async updateProgram() {
      if (this.$refs.stepFormFive.validate()) {
        this.$nuxt.$loading.start()

        const URL = `/update-program/${this.program._id}`
        const payload = this.program

        await this.getHTTPClient()
          .$patch(URL, payload)
          .then(() => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Program updated Successfully',
            })
          })
          .catch((error) => {
            this.$store.commit('notification/SHOW', {
              color: 'accent',
              icon: 'mdi-alert-outline',
              text: error.response
                ? error.response.data.message
                : "Sorry, that didn't work. Please try again",
            })
          })
          .finally(() => {
            this.$nuxt.$loading.finish()
          })
      }
    },

    async updateBanner(blob) {
      const URL = `/update-program-banner/${this.program._id}`
      const payload = {
        image: blob,
      }

      await this.getHTTPClient()
        .$patch(URL, payload)
        .then((res) => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Banner updated Successfully',
          })
          this.banner = res.data.banner
        })
        .catch((error) => {
          this.$store.commit('notification/SHOW', {
            color: 'accent',
            icon: 'mdi-alert-outline',
            text: error.response
              ? error.response.data.message
              : "Sorry, that didn't work. Please try again",
          })
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
    },

    async updateThumbnail(blob) {
      const URL = `/update-program-thumbnail/${this.program._id}`
      const payload = {
        thmb: blob,
      }

      await this.getHTTPClient()
        .$patch(URL, payload)
        .then((res) => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Thumbnail updated Successfully',
          })
          this.thumbnail = res.data.thumbnail
        })
        .catch((error) => {
          this.$store.commit('notification/SHOW', {
            color: 'accent',
            icon: 'mdi-alert-outline',
            text: error.response
              ? error.response.data.message
              : "Sorry, that didn't work. Please try again",
          })
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
    },
  },
}
