import showdown from 'showdown'
import { createNamespacedHelpers } from 'vuex'
import languages from '~/assets/json/languages.json'
import presetDescriptions from '~/assets/presets/descriptions.json'
import programTypes from '~/assets/presets/programTypes.json'

const { mapGetters } = createNamespacedHelpers('program')

export default {
  data() {
    return {
      programTypes,
      languages,
      presetDescriptions,
      descriptionPreview: null,
      selectedPresetDescription: null,
      step: 1,
      thumbnailTemp: null,
      bannerTemp: null,
      tags: ['tag 1', 'sample tag', 'tag 3'],
      newTag: '',
      searchTagsString: null,
      rewards: [
        'Bounty',
        'Gifts',
        'Hall Of Fame',
        'Letter Of Invitation',
        'Swag',
      ],
      breadcrumbsItems: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/',
        },
        {
          text: 'Add Program',
          disabled: true,
          to: '/prrogram/add/',
        },
      ],
      maxSizes: {
        banner: 140000, // 140kb
        thumbnail: 140000, // 140kb
      },
      rules: {
        required: [
          (value) =>
            !!(
              (Array.isArray(value) && value.length) ||
              (!Array.isArray(value) && value)
            ) || 'This Field Is Required',
        ],
        banner: {
          size: [
            (value) =>
              !value || this.checkFileSize(value, this.maxSizes.banner),
          ],
        },
        thumbnail: {
          size: [
            (value) =>
              !value || this.checkFileSize(value, this.maxSizes.thumbnail),
          ],
        },
      },
    }
  },
  computed: {
    ...mapGetters({ programsCount: 'getProgramsCount' }),
  },
  watch: {
    searchTagsString(text) {
      if (
        text &&
        !this.tags.some((tag) => tag.toLowerCase().includes(text.toLowerCase()))
      )
        this.newTag = text
      else this.newTag = ''
    },
  },
  methods: {
    selectProgramType(type) {
      this.form.type = type
    },

    addNewTag() {
      if (
        !this.form.tags.some((tag) =>
          tag.toLowerCase().includes(this.newTag.toLowerCase())
        )
      ) {
        this.form.tags = [...this.form.tags, this.newTag]
        if (
          !this.tags.some((tag) =>
            tag.toLowerCase().includes(this.newTag.toLowerCase())
          )
        ) {
          this.tags.push(this.newTag)
        }
        this.searchTagsString = ''
      }
    },

    validateStep(nextStep, stepForm) {
      if (this.$refs[stepForm].validate()) {
        this.step = nextStep
      }
    },

    checkFileSize(value, sizeLimit) {
      return value.size < sizeLimit
        ? true
        : `file size should be less\n than ${sizeLimit / 1000}kb`
    },

    setImageBlob(formKey, file) {
      if (!this[file]) return (this.form[formKey] = null)
      const reader = new FileReader()
      reader.readAsDataURL(this[file])
      reader.onload = () => (this.form[formKey] = reader.result)
    },

    addRow(type) {
      switch (type) {
        case 'scope':
          this.form.scope.push({})
          break

        case 'out-of-scope':
          this.form.outofscope.push({})
          break

        default:
          break
      }
    },

    deleteRow(type, index) {
      switch (type) {
        case 'scope':
          if (this.form.scope.length > 1) {
            this.form.scope.splice(index, 1)
          }
          break

        case 'out-of-scope':
          if (this.form.outofscope.length > 1) {
            this.form.outofscope.splice(index, 1)
          }
          break

        default:
          break
      }
    },

    previewdescription() {
      const converter = new showdown.Converter()
      this.descriptionPreview = converter.makeHtml(this.form.description)
    },

    async createProgram() {
      if (this.$refs.stepFormSix.validate()) {
        this.$nuxt.$loading.start()

        const URL = `/create-program`

        const payload = this.form

        await this.getHTTPClient()
          .$post(URL, payload)
          .then(() => {
            this.form = {}

            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Program Created Successfully',
            })

            this.$router.push('/')
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
  },
}
