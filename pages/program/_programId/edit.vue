<template>
  <div>
    <header
      class="primary py-16"
      style="background: linear-gradient(to right, #c504da, #6921b6)"
    ></header>

    <v-main>
      <v-container>
        <main class="white rounded-lg mt-n16 pa-4 pa-md-8 mx-0 mx-sm-1">
          <section v-if="$fetchState.pending">
            <v-skeleton-loader
              v-for="h in 3"
              :key="h"
              type="article, actions"
              class="py-2"
            ></v-skeleton-loader>
          </section>

          <section v-if="Object.keys(program).length <= 0" class="py-8">
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
          </section>

          <section v-if="Object.keys(program).length > 0">
            <div class="headline font-weight-bold text-capitalize text-center">
              {{ program.title }}
            </div>
            <v-form ref="updateProgramForm">
              <template>
                <div>
                  <div class="headline py-8">Banner &amp; Thumbnail</div>
                  <label>
                    <v-img
                      :src="'/images/dummy.jpg'"
                      class="rounded"
                      width="250"
                      contain
                    />
                    <small class="grey--text text-center pt-3">Thumbnail</small>
                    <v-file-input
                      v-model="program.thumbnail"
                      class="d-none"
                      accept="image/jpeg, image/png"
                    />
                  </label>

                  <v-file-input
                    v-model="program.banner"
                    outlined
                    :rules="[...rules.required]"
                    class="pt-4"
                    placeholder="Upload Banner"
                    accept="image/jpeg, image/png"
                  />
                </div>

                <header class="headline py-8">Program Details</header>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model.trim="program.title"
                      block
                      outlined
                      :rules="[...rules.required]"
                      label="Program Title"
                    />
                  </v-col>
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
                    <v-switch
                      v-model="program.private"
                      :label="`Program is ${
                        program.private ? 'Private' : 'Public'
                      }`"
                    ></v-switch>
                  </v-col>
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
                  <v-col cols="12" md="6">
                    <v-switch
                      v-model="program.allowCollaborations"
                      label="Enable Report Collaborations?"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12">
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

                <header class="headline py-8">Reward Grid</header>
                <v-row>
                  <v-col cols="12" md="6" lg="3">
                    <v-text-field
                      v-model.trim="program.rewardGrid.low"
                      block
                      outlined
                      :rules="[...rules.required]"
                      label="Low"
                    />
                  </v-col>
                  <v-col cols="12" md="6" lg="3">
                    <v-text-field
                      v-model.trim="program.rewardGrid.medium"
                      block
                      outlined
                      :rules="[...rules.required]"
                      label="Medium"
                    />
                  </v-col>
                  <v-col cols="12" md="6" lg="3">
                    <v-text-field
                      v-model.trim="program.rewardGrid.high"
                      block
                      outlined
                      :rules="[...rules.required]"
                      label="High"
                    />
                  </v-col>
                  <v-col cols="12" md="6" lg="3">
                    <v-text-field
                      v-model.trim="program.rewardGrid.critical"
                      block
                      outlined
                      :rules="[...rules.required]"
                      label="Critical"
                    />
                  </v-col>
                </v-row>

                <header class="headline py-8">Researcher's Requirement</header>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model.trim="program.accountCredentials"
                      block
                      outlined
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
                      :rules="[...rules.required]"
                      label="VPN Access"
                      placeholder="Username &amp; Password"
                    />
                  </v-col>
                </v-row>

                <header class="headline pt-8">Target Scope</header>
                <header class="subtitle-1 py-4">Scope</header>
                <section>
                  <div
                    v-for="(scope, index) in program.scope"
                    :key="index"
                    class="d-flex justify-space-between"
                  >
                    <v-row class="flex-grow-1">
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].webApplication"
                          block
                          outlined
                          label="Web Application"
                          placeholder="https://example.com"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].api"
                          block
                          outlined
                          label="API"
                          placeholder="https://api.example.com/docs"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].androidApp"
                          block
                          outlined
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.scope[index].playstoreId"
                          block
                          outlined
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
                </section>

                <header class="subtitle-1 py-4">Out-Of-Scope</header>
                <section>
                  <div
                    v-for="(scope, index) in program.outofscope"
                    :key="index"
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
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="program.outofscope[index].playstoreId"
                          block
                          outlined
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
                </section>

                <header class="headline py-8">Program Description</header>
                <section class="elevation-2 pa-4 rounded">
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
                </section>

                <v-row class="py-8">
                  <v-col>
                    <v-btn block color="primary" @click="updateProgram()"
                      >Add Program</v-btn
                    >
                  </v-col></v-row
                >
              </template>
            </v-form>
          </section>
        </main>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import showdown from 'showdown'
import languages from '~/assets/json/languages.json'
import presetDescriptions from '~/assets/presets/descriptions.json'
import programTypes from '~/assets/presets/programTypes.json'

export default {
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
      languages,
      programTypes,
      presetDescriptions,
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
    }
  },

  async fetch() {
    const uri = `/get-program/${this.$route.params.programId}`
    const setKeys = (prog) => {
      if (!Object.prototype.hasOwnProperty.call(prog, 'language')) {
        prog.language = ''
      }

      if (!Object.prototype.hasOwnProperty.call(prog, 'banner')) {
        prog.banner = ''
      }
    }

    await this.$axios
      .$get(uri, {})
      .then((res) => {
        this.program = res.data
        setKeys(this.program)
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

    previewdescription() {
      const converter = new showdown.Converter()
      this.descriptionPreview = converter.makeHtml(this.program.description)
    },

    async updateProgram() {
      if (this.$refs.updateProgramForm.validate()) {
        this.$nuxt.$loading.start()

        const URL = `/update-program/${this.program._id}`

        // prepair form
        const formData = new FormData()

        for (const field in this.program) {
          formData.append(field, this.program[field])
        }

        await this.$axios
          .$patch(URL, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(() => {
            this.$store.commit('notification/SHOW', {
              icon: 'mdi-check',
              text: 'Program Created Successfully',
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
  },
}
</script>
