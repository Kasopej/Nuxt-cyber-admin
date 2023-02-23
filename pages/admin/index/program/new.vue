<template>
  <div>
    <v-container class="mt-16">
      <main class="">
        <v-breadcrumbs
          large
          divider="»"
          :items="breadcrumbsItems"
          class="px-0 pt-3"
        />
        <v-stepper v-model="step" class="step-reset">
          <v-stepper-header class="step-header-reset rounded px-0 px-md-3">
            <v-stepper-step class="ml-n4" :complete="step > 1" step="1">
              Program type
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2">
              Program details
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 3" step="3"
              >Reward grid</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 4" step="4"
              >Requirement</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 5" step="5"
              >Target Scope</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step class="mr-n4" :complete="step > 6" step="6"
              >Description</v-stepper-step
            >
          </v-stepper-header>

          <v-stepper-items class="rounded mt-5">
            <v-stepper-content step="1" class="pa-0">
              <header class="head__line mb-2">Program Type</header>

              <div
                v-for="(programType, key) in programTypes"
                :key="key"
                class="custom-checkbox-card mb-4"
              >
                <input
                  :id="`program-${programType.value}`"
                  type="radio"
                  class="custom-checkbox-card-input"
                  name="program"
                  :value="`program-${programType.value}`"
                  @change="selectProgramType(programType.value)"
                />
                <label
                  class="custom-checkbox-card-label p-3"
                  :for="`program-${programType.value}`"
                >
                  <h6 class="program-title mb-3">{{ programType.title }}</h6>
                  <p class="program-desc">{{ programType.description }}</p>
                </label>
              </div>

              <div class="d-flex align-end justify-end">
                <v-btn
                  color="primary mt-3"
                  :disabled="form.type === ''"
                  @click="step++"
                  >Next</v-btn
                >
              </div>
            </v-stepper-content>

            <v-stepper-content step="2" class="px-0 pt-4">
              <header class="head__line mb-3">Program Details</header>

              <v-form ref="stepFormTwo">
                <div class="d-flex mb-10">
                  <label class="mr-4 mr-sm-7">
                    <v-img
                      :src="form.image || '/images/dummy.jpg'"
                      class="rounded border"
                      width="125"
                      contain
                    />
                    <small class="grey--text text-left pt-2">
                      Click to choose Thumbnail
                    </small>
                    <v-file-input
                      v-model="thumbnailTemp"
                      class="d-none"
                      accept="image/jpeg, image/png"
                      @change="setImageBlob('image', 'thumbnailTemp')"
                    />
                  </label>

                  <label>
                    <v-img
                      :src="form.image2 || '/images/dummy.jpg'"
                      class="rounded border"
                      width="125"
                      contain
                    />
                    <small class="grey--text text-left pt-2">
                      Click to choose Banner
                    </small>
                    <v-file-input
                      v-model="bannerTemp"
                      class="d-none"
                      accept="image/jpeg, image/png"
                      @change="setImageBlob('image2', 'bannerTemp')"
                    />
                  </label>
                </div>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model.trim="form.title"
                      block
                      outlined
                      :counter="60"
                      :rules="[...rules.required]"
                      label="Program Title"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      v-model.trim="form.language"
                      label="Languages"
                      :items="languages"
                      outlined
                      :rules="[...rules.required]"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-autocomplete
                      v-model.trim="form.tags"
                      :rules="[...rules.required]"
                      multiple
                      outlined
                      label="Tags"
                      :items="tags"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-switch
                      v-model="form.private"
                      :label="`Program is ${
                        form.private ? 'Private' : 'Public'
                      }`"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-switch
                      v-model="form.allowCollaborations"
                      label="Enable Report Collaborations?"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-form>

              <div class="d-flex align-end justify-end">
                <v-btn
                  outlined
                  color="primary"
                  class="mt-3 mr-2"
                  @click="step--"
                  >Back</v-btn
                >
                <v-btn
                  color="primary mt-3"
                  @click="validateStep(step + 1, 'stepFormTwo')"
                  >Next</v-btn
                >
              </div>
            </v-stepper-content>

            <v-stepper-content step="3" class="px-0 pt-3">
              <header class="head__line mb-2">Reward Grid</header>

              <v-form ref="stepFormThree">
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model.trim="form.reward"
                      outlined
                      :rules="[...rules.required]"
                      label="Reward Type"
                      :items="rewards"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.trim="form.rewardGrid.low"
                      block
                      :counter="50"
                      outlined
                      :rules="[...rules.required]"
                      label="Low"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.trim="form.rewardGrid.medium"
                      block
                      outlined
                      :counter="50"
                      :rules="[...rules.required]"
                      label="Medium"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.trim="form.rewardGrid.high"
                      block
                      outlined
                      :counter="50"
                      :rules="[...rules.required]"
                      label="High"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model.trim="form.rewardGrid.critical"
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
                  @click="step--"
                  >Back</v-btn
                >
                <v-btn
                  color="primary mt-3"
                  @click="validateStep(step + 1, 'stepFormThree')"
                  >Next</v-btn
                >
              </div>
            </v-stepper-content>

            <v-stepper-content step="4" class="px-0 pt-3">
              <header class="head__line mb-2">Researcher's Requirement</header>

              <v-form ref="stepFormFour">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model.trim="form.accountCredentials"
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
                      v-model.trim="form.api_doc"
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
                      v-model.trim="form.vpn"
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
                  @click="step--"
                  >Back</v-btn
                >
                <v-btn
                  color="primary mt-3"
                  @click="validateStep(step + 1, 'stepFormFour')"
                  >Next</v-btn
                >
              </div>
            </v-stepper-content>

            <v-stepper-content step="5" class="px-0 pt-3">
              <header class="head__line mb-2">Target Scope</header>
              <v-divider></v-divider>

              <v-form ref="stepFormFive">
                <header class="subtitle-1 py-4">Scope</header>
                <section>
                  <div
                    v-for="(scope, index) in form.scope"
                    :key="index"
                    class="d-flex justify-space-between"
                  >
                    <v-row class="flex-grow-1">
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.scope[index].webApplication"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="Web Application"
                          placeholder="https://example.com"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.scope[index].api"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="API"
                          placeholder="https://api.example.com/docs"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.scope[index].androidApp"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.scope[index].playstoreId"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="IOS Playstore"
                          placeholder="123456"
                        />
                      </v-col>
                    </v-row>

                    <div v-if="form.scope.length > 1" class="px-2">
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
                    v-for="(scope, index) in form.outofscope"
                    :key="index"
                    class="d-flex justify-space-between"
                  >
                    <v-row class="flex-grow-1">
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.outofscope[index].webApplication"
                          block
                          outlined
                          :counter="75"
                          :rules="[...rules.required]"
                          label="Web Application"
                          placeholder="https://example.com"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.outofscope[index].api"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="API"
                          placeholder="https://api.example.com/docs"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.outofscope[index].androidApp"
                          block
                          outlined
                          :counter="75"
                          :rules="[...rules.required]"
                          label="Android App"
                          placeholder="com.example.google"
                        />
                      </v-col>
                      <v-col cols="12" md="3">
                        <v-text-field
                          v-model.trim="form.outofscope[index].playstoreId"
                          block
                          outlined
                          :counter="50"
                          :rules="[...rules.required]"
                          label="IOS Playstore"
                          placeholder="123456"
                        />
                      </v-col>
                    </v-row>

                    <div v-if="form.outofscope.length > 1" class="px-2">
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
              </v-form>

              <div class="d-flex align-end justify-end">
                <v-btn
                  outlined
                  color="primary"
                  class="mt-3 mr-2"
                  @click="step--"
                  >Back</v-btn
                >
                <v-btn
                  color="primary mt-3"
                  @click="validateStep(step + 1, 'stepFormFive')"
                  >Next</v-btn
                >
              </div>
            </v-stepper-content>

            <v-stepper-content step="6" class="px-0 pt-3">
              <header class="head__line mb-2">Description</header>

              <section class="border px-2 px-sm-4 py-4 rounded mb-3">
                <v-form ref="stepFormSix">
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
                        @change="form.description = selectedPresetDescription"
                      >
                      </v-autocomplete>
                    </v-col>
                  </v-row>

                  <div
                    v-if="descriptionPreview"
                    class="border rounded px-2 px-sm-3 py-4"
                    v-html="descriptionPreview"
                  />
                  <v-textarea
                    v-else
                    v-model.trim="form.description"
                    else
                    outlined
                    :rules="[...rules.required]"
                    hide-details
                  />
                </v-form>

                <div class="pt-2">
                  <small class="grey--text darken-2"
                    >Styling with MarkDown is supported</small
                  >
                </div>
              </section>

              <div class="d-flex align-end justify-end">
                <v-btn
                  outlined
                  color="primary"
                  class="mt-3 mr-2"
                  @click="step = 5"
                  >Back</v-btn
                >
                <v-btn color="primary mt-3" @click="createProgram"
                  >Create Program</v-btn
                >
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </main>
    </v-container>
  </div>
</template>

<script>
import NewProgramBase from '~/components/pages_base_definitions/NewProgram'
export default {
  extends: NewProgramBase,
  middleware: 'admin_auth',
  data() {
    return {
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
        company: null,
      },
    }
  },
  computed: {
    companyAccount() {
      return this.$vueBus.companyAccount
    },
  },
  created() {
    this.form.company = this.companyAccount._id
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

.program-title {
  font-size: 16px;
  font-weight: 500;
}

.head__line {
  font-size: 18px;
}

.custom-checkbox-card {
  position: relative;
  padding-left: 0;
  margin-right: 0;
}
.custom-checkbox-card-input {
  position: absolute;
  left: 0;
  opacity: 0;
}

.custom-checkbox-card-input:checked ~ .custom-checkbox-card-label {
  border-color: #c504da;
}

.custom-checkbox-card-label {
  display: inline-block;
  min-height: 100px;
  max-height: 100%;
  width: 100%;
  z-index: 1;
  border: 1px solid #e7eaf3;
  border-radius: 0.4rem;
  padding: 10px 10px 10px;
  cursor: pointer;
  margin-bottom: 0;
}

.custom-checkbox-card-input:checked ~ .custom-checkbox-card-label::after {
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 110 110' fill='%23377dff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M55,110L55,110C24.6,110,0,85.4,0,55v0C0,24.6,24.6,0,55,0h0c30.4,0,55,24.6,55,55v0C110,85.4,85.4,110,55,110zM81.6,31c-1.5-1.4-3.9-1.4-5.4,0.1L43.7,64.3l-8-9.6c-1.8-2.2-4.9-2.6-6.9-0.9c-1.8,1.5-2.1,4.1-0.9,6.2l10.2,17.3c2,3.3,6.7,3.6,9,0.5L82,36.2C83.3,34.7,83.1,32.4,81.6,31z'/%3E%3C/svg%3E")
    no-repeat right center/1rem 1rem;
}

.custom-checkbox-card-label::after {
  position: absolute;
  top: 0.75rem;
  right: 0;
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;
  z-index: 1;
  content: '';
}
</style>
