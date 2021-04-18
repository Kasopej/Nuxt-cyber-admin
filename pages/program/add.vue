<template>
  <div>
    <partials-header title="Add a Program" />

    <v-main>
      <v-container>
        <main class="white mt-n16 rounded-lg pa-4 pa-md-8 mx-1">
          <v-breadcrumbs divider=">" :items="breadcrumbsItems"></v-breadcrumbs>

          <v-form ref="form1" v-model="validate">
            <div>
              <div class="headline pb-8">Banner &amp; Thumbnail</div>
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
                class="pt-4"
                placeholder="Upload Banner"
                accept="image/jpeg, image/png"
              />
            </div>

            <header class="headline py-8">Program Details</header>
            <v-row>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="FORM.title"
                  block
                  outlined
                  label="Program Title"
                />
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-autocomplete
                  v-model="FORM.type"
                  outlined
                  item-text="title"
                  item-value="value"
                  label="Program Type"
                  :items="types"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-switch
                  v-model="FORM.private"
                  label="Make Program Private?"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-autocomplete
                  v-model="FORM.languages"
                  outlined
                  multiple
                  label="Languages"
                  :items="languages"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-switch
                  v-model="FORM.allowCollaborations"
                  label="Enable Report Collaborations?"
                ></v-switch>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-autocomplete
                  v-model="FORM.tags"
                  outlined
                  multiple
                  label="Tags"
                  :items="tags"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" md="6" class="py-0">
                <v-autocomplete
                  v-model="FORM.rewards"
                  outlined
                  label="Reward Type"
                  :items="rewards"
                >
                </v-autocomplete>
              </v-col>
            </v-row>

            <header class="headline py-8">Reward Grid</header>
            <v-row>
              <v-col cols="12" md="6" lg="3" class="py-0">
                <v-text-field
                  v-model="FORM.rewardGrid.low"
                  block
                  outlined
                  label="Low"
                />
              </v-col>
              <v-col cols="12" md="6" lg="3" class="py-0">
                <v-text-field
                  v-model="FORM.rewardGrid.medium"
                  block
                  outlined
                  label="Medium"
                />
              </v-col>
              <v-col cols="12" md="6" lg="3" class="py-0">
                <v-text-field
                  v-model="FORM.rewardGrid.high"
                  block
                  outlined
                  label="High"
                />
              </v-col>
              <v-col cols="12" md="6" lg="3" class="py-0">
                <v-text-field
                  v-model="FORM.rewardGrid.critical"
                  block
                  outlined
                  label="Critical"
                />
              </v-col>
            </v-row>

            <header class="headline py-8">Researcher's Requirement</header>
            <v-row>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="FORM.accountCredentials"
                  block
                  outlined
                  label="Account Credentials"
                  placeholder="Username &amp; Password"
                />
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="FORM.documentationLink"
                  block
                  outlined
                  label="API Documentation Link"
                  placeholder="https://api.example.com/docs"
                />
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-text-field
                  v-model="FORM.vpnAccess"
                  block
                  outlined
                  label="VPN Access"
                  placeholder="Username &amp; Password"
                />
              </v-col>
            </v-row>

            <header class="headline pt-8">Target Scope</header>
            <header class="subtitle-1 py-4">Scope</header>
            <v-row>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.webApplication"
                  block
                  outlined
                  label="Web Application"
                  placeholder="https://example.com"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.api"
                  block
                  outlined
                  label="API"
                  placeholder="https://api.example.com/docs"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.androidApp"
                  block
                  outlined
                  label="Android App"
                  placeholder="com.example.google"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.playstoreId"
                  block
                  outlined
                  label="IOS Playstore"
                  placeholder="123456"
                />
              </v-col>
            </v-row>

            <header class="subtitle-1 py-4">Out-Of-Scope</header>
            <v-row>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.webApplication"
                  block
                  outlined
                  label="Web Application"
                  placeholder="https://example.com"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.api"
                  block
                  outlined
                  label="API"
                  placeholder="https://api.example.com/docs"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.androidApp"
                  block
                  outlined
                  label="Android App"
                  placeholder="com.example.google"
                />
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <v-text-field
                  v-model="FORM.targetScope.playstoreId"
                  block
                  outlined
                  label="IOS Playstore"
                  placeholder="123456"
                />
              </v-col>
            </v-row>

            <header class="headline py-8">Program Description</header>
            <div>
              <v-btn
                small
                :outlined="!!descriptionPreview"
                color="accent"
                @click="descriptionPreview = null"
                >Write
                <v-icon small class="ml-2">mdi-fountain-pen-tip</v-icon></v-btn
              >
              <v-btn
                small
                :outlined="!descriptionPreview"
                color="accent"
                class="my-2 mx-md-3"
                @click="previewdescription()"
                >Preview <v-icon small class="ml-2">mdi-eye</v-icon></v-btn
              >
            </div>

            <div
              v-if="descriptionPreview"
              class="elevation-2 rounded px-2 py-4"
              v-html="descriptionPreview"
            />
            <v-textarea
              v-else
              v-model="FORM.description"
              else
              outlined
              hide-details
            />

            <div class="pb-4">
              <small class="grey--text darken-2"
                >Styling with MarkDown is supported</small
              >
            </div>

            <v-row class="py-8">
              <v-col> <v-btn text color="accent" to="/">Cancel</v-btn> </v-col
              ><v-col>
                <v-btn block color="primary" @click="addProgram()"
                  >Add Program</v-btn
                >
              </v-col></v-row
            >
          </v-form>
        </main>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import showdown from 'showdown'

export default {
  layout: 'dashboard',
  middleware: 'auth',

  data() {
    return {
      validate: true,
      FORM: { rewardGrid: {}, targetScope: {} },
      descriptionPreview: null,
      types: [
        { title: 'Premuim Pen Test', value: 'Compliance' },
        { title: 'Vulnerability Disclosure Program', value: 'VDP' },
        { title: 'Bug Bounty Program', value: 'Bug Bounty' },
      ],
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
      languages: [
        'English',
        'French',
        'Abkhazian',
        'Afar',
        'Afrikaans',
        'Akan',
        'Albanian',
        'Amharic',
        'Arabic',
        'Aragonese',
        'Armenian',
        'Assamese',
        'Avaric',
        'Avestan',
        'Aymara',
        'Azerbaijani',
        'Bambara',
        'Bashkir',
        'Basque',
        'Belarusian',
        'Bengali',
        'Bihari languages',
        'Bislama',
        'Bosnian',
        'Breton',
        'Bulgarian',
        'Burmese',
        'Catalan, Valencian',
        'Central Khmer',
        'Chamorro',
        'Chechen',
        'Chichewa, Chewa, Nyanja',
        'Chinese',
        'Church Slavonic, Old Bulgarian, Old Church Slavonic',
        'Chuvash',
        'Cornish',
        'Corsican',
        'Cree',
        'Croatian',
        'Czech',
        'Danish',
        'Divehi, Dhivehi, Maldivian',
        'Dutch, Flemish',
        'Dzongkha',
        'Esperanto',
        'Estonian',
        'Ewe',
        'Faroese',
        'Fijian',
        'Finnish',
        'Fulah',
        'Gaelic, Scottish Gaelic',
        'Galician',
        'Ganda',
        'Georgian',
        'German',
        'Gikuyu, Kikuyu',
        'Greek (Modern)',
        'Greenlandic, Kalaallisut',
        'Guarani',
        'Gujarati',
        'Haitian, Haitian Creole',
        'Hausa',
        'Hebrew',
        'Herero',
        'Hindi',
        'Hiri Motu',
        'Hungarian',
        'Icelandic',
        'Ido',
        'Igbo',
        'Indonesian',
        'Interlingua (International Auxiliary Language Association)',
        'Interlingue',
        'Inuktitut',
        'Inupiaq',
        'Irish',
        'Italian',
        'Japanese',
        'Javanese',
        'Kannada',
        'Kanuri',
        'Kashmiri',
        'Kazakh',
        'Kinyarwanda',
        'Komi',
        'Kongo',
        'Korean',
        'Kwanyama, Kuanyama',
        'Kurdish',
        'Kyrgyz',
        'Lao',
        'Latin',
        'Latvian',
        'Letzeburgesch, Luxembourgish',
        'Limburgish, Limburgan, Limburger',
        'Lingala',
        'Lithuanian',
        'Luba-Katanga',
        'Macedonian',
        'Malagasy',
        'Malay',
        'Malayalam',
        'Maltese',
        'Manx',
        'Maori',
        'Marathi',
        'Marshallese',
        'Moldovan, Moldavian, Romanian',
        'Mongolian',
        'Nauru',
        'Navajo, Navaho',
        'Northern Ndebele',
        'Ndonga',
        'Nepali',
        'Northern Sami',
        'Norwegian',
        'Norwegian Bokmål',
        'Norwegian Nynorsk',
        'Nuosu, Sichuan Yi',
        'Occitan (post 1500)',
        'Ojibwa',
        'Oriya',
        'Oromo',
        'Ossetian, Ossetic',
        'Pali',
        'Panjabi, Punjabi',
        'Pashto, Pushto',
        'Persian',
        'Polish',
        'Portuguese',
        'Quechua',
        'Romansh',
        'Rundi',
        'Russian',
        'Samoan',
        'Sango',
        'Sanskrit',
        'Sardinian',
        'Serbian',
        'Shona',
        'Sindhi',
        'Sinhala, Sinhalese',
        'Slovak',
        'Slovenian',
        'Somali',
        'Sotho, Southern',
        'South Ndebele',
        'Spanish, Castilian',
        'Sundanese',
        'Swahili',
        'Swati',
        'Swedish',
        'Tagalog',
        'Tahitian',
        'Tajik',
        'Tamil',
        'Tatar',
        'Telugu',
        'Thai',
        'Tibetan',
        'Tigrinya',
        'Tonga (Tonga Islands)',
        'Tsonga',
        'Tswana',
        'Turkish',
        'Turkmen',
        'Twi',
        'Uighur, Uyghur',
        'Ukrainian',
        'Urdu',
        'Uzbek',
        'Venda',
        'Vietnamese',
        'Volap_k',
        'Walloon',
        'Welsh',
        'Western Frisian',
        'Wolof',
        'Xhosa',
        'Yiddish',
        'Yoruba',
        'Zhuang, Chuang',
        'Zulu',
      ],
    }
  },

  methods: {
    previewdescription() {
      const converter = new showdown.Converter()
      this.descriptionPreview = converter.makeHtml(this.FORM.description)
    },

    async addProgram() {
      if (this.$refs.form1.validate()) {
        this.$nuxt.$loading.start()

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
