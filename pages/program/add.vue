<template>
  <div>
    <partials-header title="Add a Program" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <v-breadcrumbs
            large
            divider="»"
            :items="breadcrumbsItems"
            class="pa-0"
          />

          <v-form ref="form1">
            <template v-if="!FORM.type">
              <header class="headline py-6">Select a Program Type</header>
              <v-hover
                v-for="programType in programTypes"
                v-slot="{ hover }"
                :key="programType.title"
              >
                <v-card
                  class="px-3 py-4 my-4"
                  :class="hover ? 'secondary' : hover"
                  @click="selectProgramType(programType.value)"
                >
                  <header
                    class="headline font-weight-medium accent--text pb-3"
                    v-text="programType.title"
                  />
                  <article v-text="programType.description" />
                </v-card>
              </v-hover>
            </template>

            <template v-else>
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
                  <v-file-input class="d-none" accept="image/jpeg, image/png" />
                </label>

                <v-file-input
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
                    block
                    readonly
                    outlined
                    label="Program Type"
                    :value="
                      programTypes.find((el) => el.value == FORM.type).title
                    "
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.trim="FORM.title"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="Program Title"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model.trim="FORM.language"
                    label="Languages"
                    :items="languages"
                    outlined
                    :rules="[...rules.required]"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-switch
                    v-model="FORM.private"
                    :label="`Program is ${FORM.private ? 'Private' : 'Public'}`"
                  ></v-switch>
                </v-col>
                <v-col cols="12" md="6">
                  <v-autocomplete
                    v-model.trim="FORM.reward"
                    outlined
                    :rules="[...rules.required]"
                    label="Reward Type"
                    :items="rewards"
                  >
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" md="6">
                  <v-switch
                    v-model="FORM.allowCollaborations"
                    label="Enable Report Collaborations?"
                  ></v-switch>
                </v-col>
                <v-col cols="12">
                  <v-autocomplete
                    v-model.trim="FORM.tags"
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
                    v-model.trim="FORM.rewardGrid.low"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="Low"
                  />
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-text-field
                    v-model.trim="FORM.rewardGrid.medium"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="Medium"
                  />
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-text-field
                    v-model.trim="FORM.rewardGrid.high"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="High"
                  />
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-text-field
                    v-model.trim="FORM.rewardGrid.critical"
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
                    v-model.trim="FORM.accountCredentials"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="Account Credentials"
                    placeholder="Username &amp; Password"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.trim="FORM.documentationLink"
                    block
                    outlined
                    :rules="[...rules.required]"
                    label="API Documentation Link"
                    placeholder="https://api.example.com/docs"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model.trim="FORM.vpnAccess"
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
                  v-for="(scope, index) in FORM.scope"
                  :key="index"
                  class="d-flex justify-space-between"
                >
                  <v-row class="flex-grow-1">
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.scope[index].webApplication"
                        block
                        outlined
                        label="Web Application"
                        placeholder="https://example.com"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.scope[index].api"
                        block
                        outlined
                        label="API"
                        placeholder="https://api.example.com/docs"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.scope[index].androidApp"
                        block
                        outlined
                        label="Android App"
                        placeholder="com.example.google"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.scope[index].playstoreId"
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
                      @click="deleteRow('target-scope', index)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </div>

                <div>
                  <v-btn small color="primary" @click="addRow('target-scope')">
                    <span class="mr-3">Add More</span>
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </section>

              <header class="subtitle-1 py-4">Out-Of-Scope</header>
              <section>
                <div
                  v-for="(scope, index) in FORM.outScope"
                  :key="index"
                  class="d-flex justify-space-between"
                >
                  <v-row class="flex-grow-1">
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.outScope[index].webApplication"
                        block
                        outlined
                        label="Web Application"
                        placeholder="https://example.com"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.outScope[index].api"
                        block
                        outlined
                        label="API"
                        placeholder="https://api.example.com/docs"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.outScope[index].androidApp"
                        block
                        outlined
                        label="Android App"
                        placeholder="com.example.google"
                      />
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                        v-model.trim="FORM.outScope[index].playstoreId"
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
                      @click="deleteRow('target-scope', index)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </div>

                <div>
                  <v-btn small color="primary" @click="addRow('out-scope')">
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
                      @change="FORM.description = selectedPresetDescription"
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
                  v-model.trim="FORM.description"
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
                  <v-btn
                    text
                    color="accent"
                    @click="FORM = { rewardGrid: {}, scope: {} }"
                    >Cancel</v-btn
                  > </v-col
                ><v-col>
                  <v-btn block color="primary" @click="addProgram()"
                    >Add Program</v-btn
                  >
                </v-col></v-row
              >
            </template>
          </v-form>
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
      FORM: { rewardGrid: {}, scope: [{}], outScope: [{}] },
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

  methods: {
    addRow(type) {
      switch (type) {
        case 'target-scope':
          this.FORM.scope.push({})
          break

        case 'out-scope':
          this.FORM.outScope.push({})
          break

        default:
          break
      }
    },

    deleteRow(type, index) {
      switch (type) {
        case 'target-scope':
          if (this.FORM.scope.length > 1) {
            this.FORM.scope.splice(index, 1)
          }

          break

        case 'out-scope':
          if (this.FORM.outScope.length > 1) {
            this.FORM.outScope.splice(index, 1)
          }
          break

        default:
          break
      }
    },

    selectProgramType(type) {
      this.FORM.type = type

      this.$forceUpdate()
    },

    previewdescription() {
      const converter = new showdown.Converter()
      this.descriptionPreview = converter.makeHtml(this.FORM.description)
    },

    async addProgram() {
      if (this.$refs.form1.validate()) {
        this.$nuxt.$loading.start()
        console.log(this.FORM)

        const URL = `/create-program`
        // Make upload request to the API
        await this.$axios
          .$post(URL, this.FORM)
          .then(() => {
            this.FORM = {}

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
</script>
