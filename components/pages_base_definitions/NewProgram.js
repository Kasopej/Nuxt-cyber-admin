import showdown from 'showdown'
import { createNamespacedHelpers } from 'vuex'
import languages from '~/assets/json/languages.json'
import presetDescriptions from '~/assets/presets/descriptions.json'
import programTypes from '~/assets/presets/programTypes.json'

const { mapGetters } = createNamespacedHelpers('program')

export default {
  layout: 'base',
  middleware: 'auth',
  data() {
    return {
      programTypes,
      languages,
      presetDescriptions,
      descriptionPreview: null,
      selectedPresetDescription: null,
      step: 1,
      form: {
        type: '',
        rewardGrid: {},
        scope: [{}],
        outofscope: [{}],
        tags: '',
        private: false,
        allowCollaborations: false,
        image: null,
        image2: null,
      },
      thumbnailTemp: null,
      bannerTemp: null,
      tags: ['tag 1', 'sample tag', 'tag 3'],
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
      rules: {
        required: [(value) => !!value || 'This Field Is Required'],
      },
    }
  },
  computed: {
    ...mapGetters({ programsCount: 'getProgramsCount' }),
  },
  methods: {
    selectProgramType(type) {
      this.form.type = type
    },

    validateStep(nextStep, stepForm) {
      if (this.$refs[stepForm].validate()) {
        this.step = nextStep
      }
    },

    setImageBlob(formKey, file) {
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
        if (this.programsCount >= 3) {
          this.$store.commit('notification/SHOW', {
            color: 'accent',
            icon: 'mdi-alert-outline',
            text: 'You cannot create more than 3 programs',
          })
          return
        }
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
