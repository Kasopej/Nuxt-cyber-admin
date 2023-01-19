<template>
  <div>
    <v-container class="mt-16">
      <v-main>
        <v-breadcrumbs
          large
          divider="»"
          :items="breadcrumbsItems"
          class="px-0 pt-3"
        />

        <div v-if="$fetchState.pending">
          <v-skeleton-loader
            v-for="h in 3"
            :key="`${h}loader`"
            type="article, actions"
            class="py-2"
          ></v-skeleton-loader>
        </div>

        <div v-if="Object.keys(program).length <= 0" class="py-8">
          <v-img src="/images/server-down.svg" max-height="420" contain />
          <div class="subtitle-1 text-center accent--text py-8">
            <div class="d-block">
              Oops program not found or error occured lets retry
            </div>
            <div class="d-flex justify-center">
              <v-btn class="px-7 mt-4" color="primary" @click="$fetch"
                >Retry</v-btn
              >
            </div>
          </div>
        </div>

        <section v-if="Object.keys(program).length > 0">
          <v-stepper v-model="step" class="step-reset">
            <v-stepper-header class="step-header-reset rounded px-0 px-md-3">
              <v-stepper-step class="ml-n4" :complete="step > 1" step="1">
                Program details
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 2" step="2">
                Reward grid
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 3" step="3"
                >Requirement</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step :complete="step > 4" step="4"
                >Target Scope</v-stepper-step
              >

              <v-divider></v-divider>

              <v-stepper-step class="mr-n4" :complete="step > 5" step="5"
                >Description</v-stepper-step
              >
            </v-stepper-header>

            <v-stepper-items class="rounded mt-5">
              <v-stepper-content step="1" class="pa-0">
                <header class="head__line mb-2">Program Details</header>

                <v-form ref="stepFormOne">
                  <div class="d-flex mb-10">
                    <label class="mr-4 mr-sm-7">
                      <v-img
                        :src="image"
                        class="rounded border"
                        width="125"
                        height="125"
                        contain
                      />
                      <small class="grey--text text-left pt-2">
                        Click to choose Thumbnail
                      </small>
                      <input
                        type="file"
                        class="d-none"
                        accept="image/jpeg, image/png"
                        @change="setImageBlob($event, 'thumbnail')"
                      />
                    </label>

                    <label>
                      <v-img
                        :src="image2"
                        class="rounded border"
                        width="125"
                        height="125"
                        contain
                      />
                      <small class="grey--text text-left pt-2">
                        {{ bannerMessage }}
                      </small>
                      <input
                        type="file"
                        class="d-none"
                        accept="image/jpeg, image/png"
                        @change="setImageBlob($event, 'banner')"
                      />
                    </label>
                  </div>

                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model.trim="program.title"
                        block
                        outlined
                        :counter="60"
                        :rules="[...rules.required]"
                        label="Program Title"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-autocomplete
                        v-model.trim="program.language"
                        label="Languages"
                        :items="languages"
                        outlined
                        :rules="[...rules.required]"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-autocomplete
                        v-model.trim="program.tags"
                        :rules="[...rules.required]"
                        multiple
                        outlined
                        label="Tags"
                        :items="tags"
                      >
                      </v-autocomplete>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-switch
                        v-model="program.private"
                        :label="`Program is ${
                          program.private ? 'Private' : 'Public'
                        }`"
                      ></v-switch>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-switch
                        v-model="program.allowCollaborations"
                        label="Enable Report Collaborations?"
                      ></v-switch>
                    </v-col>
                  </v-row>
                </v-form>

                <div class="d-flex align-end justify-end">
                  <v-btn outlined color="primary" class="mt-3 mr-2">Back</v-btn>
                  <v-btn
                    color="primary mt-3"
                    @click="validateStep(2, 'stepFormOne')"
                    >Next</v-btn
                  >
                </div>
              </v-stepper-content>

              <v-stepper-content step="2" class="pa-0">
                <header class="head__line mb-2">Reward Grid</header>

                <v-form ref="stepFormTwo">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-autocomplete
                        v-model.trim="program.reward"
                        outlined
                        :rules="[...rules.required]"
                        label="Reward Type"
                        :items="rewards"
                      >
                      </v-autocomplete>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field
                        v-model.trim="program.rewardGrid.low"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="Low"
                      />
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field
                        v-model.trim="program.rewardGrid.medium"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="Medium"
                      />
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field
                        v-model.trim="program.rewardGrid.high"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="High"
                      />
                    </v-col>
                    <v-col cols="12" md="6" lg="3">
                      <v-text-field
                        v-model.trim="program.rewardGrid.critical"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="Critical"
                      />
                    </v-col>
                  </v-row>
                </v-form>

                <div class="d-flex align-end justify-end">
                  <v-btn
                    outlined
                    color="primary"
                    class="mt-3 mr-2"
                    @click="step = 1"
                    >Back</v-btn
                  >
                  <v-btn
                    color="primary mt-3"
                    @click="validateStep(3, 'stepFormTwo')"
                    >Next</v-btn
                  >
                </div>
              </v-stepper-content>

              <v-stepper-content step="3" class="pa-0">
                <header class="head__line mb-2">Requirement</header>

                <v-form ref="stepFormThree">
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model.trim="program.accountCredentials"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="Account Credentials"
                        placeholder="Username &amp; Password"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model.trim="program.documentationLink"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="API Documentation Link"
                        placeholder="https://api.example.com/docs"
                      />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model.trim="program.vpnAccess"
                        block
                        outlined
                        :counter="50"
                        :rules="[...rules.required]"
                        label="VPN Access"
                        placeholder="Username &amp; Password"
                      />
                    </v-col>
                  </v-row>
                </v-form>

                <div class="d-flex align-end justify-end">
                  <v-btn
                    outlined
                    color="primary"
                    class="mt-3 mr-2"
                    @click="step = 2"
                    >Back</v-btn
                  >
                  <v-btn
                    color="primary mt-3"
                    @click="validateStep(4, 'stepFormThree')"
                    >Next</v-btn
                  >
                </div>
              </v-stepper-content>

              <v-stepper-content step="4" class="pa-0">
                <header class="head__line mb-2">Target scope</header>

                <v-form ref="stepFormFour">
                  <header class="subtitle-1 py-4">Scope</header>
                  <div
                    v-for="(scope, index) in program.scope"
                    :key="`${index}scope`"
                    class="d-flex justify-space-between"
                  >
                    <v-row class="flex-grow-1">
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].webApplication"
                          block
                          outlined
                          :counter="50"
                          label="Web Application"
                          placeholder="https://example.com"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].api"
                          block
                          outlined
                          :counter="50"
                          label="API"
                          placeholder="https://api.example.com/docs"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].androidApp"
                          block
                          outlined
                          :counter="50"
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].playstoreId"
                          block
                          outlined
                          :counter="50"
                          label="IOS Playstore"
                          placeholder="123456"
                        />
                      </v-col>
                    </v-row>

                    <div class="px-2">
                      <v-btn
                        icon
                        color="red"
                        @click="deleteRow('scope', index)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <div>
                    <v-btn small color="primary" @click="addRow('scope')">
                      <span class="mr-3">Add More</span>
                      <v-icon small>mdi-plus</v-icon>
                    </v-btn>
                  </div>

                  <header class="subtitle-1 py-4">Out-Of-Scope</header>
                  <div
                    v-for="(scope, index) in program.outofscope"
                    :key="`${index}outofscope`"
                    class="d-flex justify-space-between"
                  >
                    <v-row class="flex-grow-1">
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="
                            program.outofscope[index].webApplication
                          "
                          block
                          outlined
                          :counter="50"
                          label="Web Application"
                          placeholder="https://example.com"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.outofscope[index].api"
                          block
                          outlined
                          label="API"
                          placeholder="https://api.example.com/docs"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.outofscope[index].androidApp"
                          block
                          outlined
                          :counter="50"
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.outofscope[index].playstoreId"
                          block
                          outlined
                          :counter="50"
                          label="IOS Playstore"
                          placeholder="123456"
                        />
                      </v-col>
                    </v-row>

                    <div class="px-2">
                      <v-btn
                        icon
                        color="red"
                        @click="deleteRow('out-of-scope', index)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <div>
                    <v-btn
                      small
                      color="primary"
                      @click="addRow('out-of-scope')"
                    >
                      <span class="mr-3">Add More</span>
                      <v-icon small>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </v-form>

                <div class="d-flex align-end justify-end">
                  <v-btn
                    outlined
                    color="primary"
                    class="mt-3 mr-2"
                    @click="step = 4"
                    >Back</v-btn
                  >
                  <v-btn
                    color="primary mt-3"
                    @click="validateStep(5, 'stepFormFour')"
                    >Next</v-btn
                  >
                </div>
              </v-stepper-content>

              <v-stepper-content step="5" class="pa-0">
                <header class="head__line mb-2">Description</header>

                <header class="headline py-8">Program Description</header>
                <v-form ref="stepFormFive" class="elevation-2 pa-4 rounded">
                  <v-row>
                    <v-col>
                      <v-btn
                        small
                        :outlined="!!descriptionPreview"
                        :rules="[...rules.required]"
                        color="accent"
                        @click="descriptionPreview = null"
                        >Write
                        <v-icon small class="ml-2">mdi-fountain-pen-tip</v-icon>
                      </v-btn>

                      <v-btn
                        small
                        :outlined="!descriptionPreview"
                        color="accent"
                        class="my-2 mx-md-3"
                        @click="previewdescription()"
                        >Preview
                        <v-icon small class="ml-2">mdi-eye</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col>
                      <v-autocomplete
                        v-model.trim="selectedPresetDescription"
                        dense
                        outlined
                        label="Comment Templates"
                        :items="presetDescriptions"
                        item-value="content"
                        item-text="title"
                        @change="
                          program.description = selectedPresetDescription
                        "
                      >
                      </v-autocomplete>
                    </v-col>
                  </v-row>

                  <div
                    v-if="descriptionPreview"
                    class="elevation-2 rounded px-2 py-4"
                    v-html="descriptionPreview"
                  />
                  <v-textarea
                    v-else
                    v-model.trim="program.description"
                    else
                    outlined
                    :rules="[...rules.required]"
                    hide-details
                  />

                  <div class="pt-2">
                    <small class="grey--text darken-2"
                      >Styling with MarkDown is supported</small
                    >
                  </div>
                </v-form>

                <v-row class="py-8">
                  <v-col>
                    <v-btn block color="primary" @click="updateProgram()"
                      >Update Program</v-btn
                    >
                  </v-col></v-row
                >
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </section>
      </v-main>
    </v-container>
  </div>
</template>

<script>
import showdown from 'showdown'
import languages from '~/assets/json/languages.json'
import presetDescriptions from '~/assets/presets/descriptions.json'
import programTypes from '~/assets/presets/programTypes.json'

export default {
  layout: 'base',
  middleware: 'auth',
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
          to: '/prrogram/add/',
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
      image: '',
      image2: '',
      bannerMessage: 'Click to choose Banner',
    }
  },

  async fetch() {
    const uri = `/get-program/${this.$route.params.programId}`

    await this.getHTTPClient()
      .$get(uri, {})
      .then((res) => {
        this.program = res.data
        this.image = this.program.thumbnail
        this.image2 = this.program.banner
      })
      .catch((error) => {
        this.$store.commit('notification/SHOW', {
          color: 'accent',
          icon: 'mdi-alert-outline',
          text: error.response
            ? error.response.data.message
            : 'Oops! programme not found',
        })
      })
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
          this.image2 = res.data.banner
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
        image2: blob,
      }

      await this.getHTTPClient()
        .$patch(URL, payload)
        .then((res) => {
          this.$store.commit('notification/SHOW', {
            icon: 'mdi-check',
            text: 'Thumbnail updated Successfully',
          })
          this.image = res.data.thumbnail
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
</script>
<style scoped>
.border {
  border: 1px solid #ccc;
}

.step-header-reset {
  box-shadow: none !important;
  border: 1px solid #ccc;
}

.step-reset {
  box-shadow: none !important;
}

.head__line {
  font-size: 18px;
}
</style>
