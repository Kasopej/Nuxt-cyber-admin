<template>
  <div class="pa-4">
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.name"
            block
            outlined
            label="Company Name"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.address"
            block
            outlined
            label="Address"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.company.industry"
            block
            outlined
            :items="industries"
            label="Industry Type"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.vat"
            block
            outlined
            label="VAT Number"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.registrationNumber"
            block
            outlined
            label="Registration Number"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.business"
            block
            outlined
            label="Business Type"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.staffStrenght"
            block
            outlined
            type="number"
            label="Staff Strenght"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.phoneNumber"
            block
            outlined
            label="Phone Number"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.email"
            block
            outlined
            label="Company E-mail"
            type="email"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.billing.website"
            block
            outlined
            label="Company Website"
            type="url"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-autocomplete
            v-model="FORM.company.country"
            block
            outlined
            :items="countries"
            label="Country"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.city"
            block
            outlined
            label="City"
          />
        </v-col>
        <v-col cols="12" sm="6" class="py-0">
          <v-text-field
            v-model="FORM.company.postalCode"
            block
            outlined
            label="Postal Code"
          />
        </v-col>
      </v-row>

      <div>
        <v-btn color="primary" @click="updateProfile()"> Save Changes </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FORM: { readOnly: true, company: {}, representative: {}, billing: {} },

      USER: this.$store.state.auth.user,
      industries: [
        'Accounting',
        'Airlines/Aviation',
        'Alternative Dispute Resolution',
        'Alternative Medicine',
        'Animation',
        'Apparel & Fashion',
        'Architecture & Planning',
        'Arts & Crafts',
        'Automotive',
        'Aviation & Aerospace',
        'Banking',
        'Biotechnology',
        'Broadcast Media',
        'Building Materials',
        'Business Supplies & Equipment',
        'Capital Markets',
        'Chemicals',
        'Civic & Social Organization',
        'Civil Engineering',
        'Commercial Real Estate',
        'Computer & Network Security',
        'Computer Games',
        'Computer Hardware',
        'Computer Networking',
        'Computer Software',
        'Construction',
        'Consumer Electronics',
        'Consumer Goods',
        'Consumer Services',
        'Cosmetics',
        'Dairy',
        'Defense & Space',
        'Design',
        'Education Management',
        'E-learning',
        'Electrical & Electronic Manufacturing',
        'Entertainment',
        'Environmental Services',
        'Events Services',
        'Executive Office',
        'Facilities Services',
        'Farming',
        'Financial Services',
        'Fine Art',
        'Fishery',
        'Food & Beverages',
        'Food Production',
        'Fundraising',
        'Furniture',
        'Gambling & Casinos',
        'Glass, Ceramics & Concrete',
        'Government Administration',
        'Government Relations',
        'Graphic Design',
        'Health, Wellness & Fitness',
        'Higher Education',
        'Hospital & Health Care',
        'Hospitality',
        'Human Resources',
        'Import & Export',
        'Individual & Family Services',
        'Industrial Automation',
        'Information Services',
        'Information Technology & Services',
        'Insurance',
        'International Affairs',
        'International Trade & Development',
        'Internet',
        'Investment Banking/Venture',
        'Investment Management',
        'Judiciary',
        'Law Enforcement',
        'Law Practice',
        'Legal Services',
        'Legislative Office',
        'Leisure & Travel',
        'Libraries',
        'Logistics & Supply Chain',
        'Luxury Goods & Jewelry',
        'Machinery',
        'Management Consulting',
        'Maritime',
        'Marketing & Advertising',
        'Market Research',
        'Mechanical or Industrial Engineering',
        'Media Production',
        'Medical Device',
        'Medical Practice',
        'Mental Health Care',
        'Military',
        'Mining & Metals',
        'Motion Pictures & Film',
        'Museums & Institutions',
        'Music',
        'Nanotechnology',
        'Newspapers',
        'Nonprofit Organization Management',
        'Oil & Energy',
        'Online Publishing',
        'Outsourcing/Offshoring',
        'Package/Freight Delivery',
        'Packaging & Containers',
        'Paper & Forest Products',
        'Performing Arts',
        'Pharmaceuticals',
        'Philanthropy',
        'Photography',
        'Plastics',
        'Political Organization',
        'Primary/Secondary',
        'Printing',
        'Professional Training',
        'Program Development',
        'Public Policy',
        'Public Relations',
        'Public Safety',
        'Publishing',
        'Railroad Manufacture',
        'Ranching',
        'Real Estate',
        'Recreational',
        'Facilities & Services',
        'Religious Institutions',
        'Renewables & Environment',
        'Research',
        'Restaurants',
        'Retail',
        'Security & Investigations',
        'Semiconductors',
        'Shipbuilding',
        'Sporting Goods',
        'Sports',
        'Staffing & Recruiting',
        'Supermarkets',
        'Telecommunications',
        'Textiles',
        'Think Tanks',
        'Tobacco',
        'Translation & Localization',
        'Transportation/Trucking/Railroad',
        'Utilities',
        'Venture Capital',
        'Veterinary',
        'Warehousing',
        'Wholesale',
        'Wine & Spirits',
        'Wireless',
        'Writing & Editing',
      ],
      countries: [
        'Afghanistan',
        'Åland Islands',
        'Albania',
        'Algeria',
        'American Samoa',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antarctica',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Bouvet Island',
        'Brazil',
        'British Indian Ocean Territory',
        'Brunei Darussalam',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Canada',
        'Cape Verde',
        'Cayman Islands',
        'Central African Republic',
        'Chad',
        'Chile',
        'China',
        'Christmas Island',
        'Cocos (Keeling) Islands',
        'Colombia',
        'Comoros',
        'Congo',
        'Congo, The Democratic Republic of the',
        'Cook Islands',
        'Costa Rica',
        "Cote D'Ivoire",
        'Croatia',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Eritrea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands (Malvinas)',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Guiana',
        'French Polynesia',
        'French Southern Territories',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guadeloupe',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea-Bissau',
        'Guyana',
        'Haiti',
        'Heard Island and Mcdonald Islands',
        'Holy See (Vatican City State)',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran, Islamic Republic Of',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kiribati',
        "Democratic People's Republic of Korea",
        'Korea, Republic of',
        'Kosovo',
        'Kuwait',
        'Kyrgyzstan',
        "Lao People's Democratic Republic",
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libyan Arab Jamahiriya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macao',
        'Macedonia, The Former Yugoslav Republic of',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Marshall Islands',
        'Martinique',
        'Mauritania',
        'Mauritius',
        'Mayotte',
        'Mexico',
        'Micronesia, Federated States of',
        'Moldova, Republic of',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Myanmar',
        'Namibia',
        'Nauru',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Niue',
        'Norfolk Island',
        'Northern Mariana Islands',
        'Norway',
        'Oman',
        'Pakistan',
        'Palau',
        'Palestinian Territory, Occupied',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Pitcairn',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russian Federation',
        'Rwanda',
        'Saint Helena',
        'Saint Kitts and Nevis',
        'Saint Lucia',
        'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines',
        'Samoa',
        'San Marino',
        'Sao Tome and Principe',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'Solomon Islands',
        'Somalia',
        'South Africa',
        'South Georgia and the South Sandwich Islands',
        'Spain',
        'Sri Lanka',
        'Sudan',
        'Suriname',
        'Svalbard and Jan Mayen',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syrian Arab Republic',
        'Taiwan',
        'Tajikistan',
        'Tanzania, United Republic of',
        'Thailand',
        'Timor-Leste',
        'Togo',
        'Tokelau',
        'Tonga',
        'Trinidad and Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks and Caicos Islands',
        'Tuvalu',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'United States Minor Outlying Islands',
        'Uruguay',
        'Uzbekistan',
        'Vanuatu',
        'Venezuela',
        'Viet Nam',
        'Virgin Islands, British',
        'Virgin Islands, U.S.',
        'Wallis and Futuna',
        'Western Sahara',
        'Yemen',
        'Zambia',
        'Zimbabwe',
      ],
    }
  },

  methods: {
    updateProfile() {
      if (this.FORM.readOnly) {
        this.FORM.readOnly = !this.FORM.readOnly
      } else {
        console.log(JSON.stringify(this.FORM))

        this.$store.commit('notification/SHOW', {
          color: 'accent',
          text: 'Feature under construction',
        })
      }
    },
  },
}
</script>
