<template>
  <div>
    <v-row class="py-8">
      <v-col cols="12" sm="6" class="py-0">
        <v-select
          :items="['Report Auditor', 'Report Viewer', 'Report Contributor']"
          label="Select a Role"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-text-field
          block
          outlined
          label="E-mail"
          placeholder="e-mail@example.com"
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary">Send invitation</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
