<template>
  <div class="pa-1">
    <section class="elevation-2">
      <!-- <div>You have no group yet</div> -->

      <v-simple-table>
        <template #default>
          <tbody>
            <tr v-for="q in 5" :key="q">
              <td>
                <v-avatar
                  ><v-icon color="accent">mdi-account-circle</v-icon></v-avatar
                >Olajide_{{ q }}_Hammed
              </td>
              <td>Verified</td>
              <td>{{ q }}0 Points</td>
              <td>
                <v-btn small color="accent" class="text-capitalize mr-4"
                  >Invite<v-icon small class="ml-3"
                    >mdi-email-send</v-icon
                  ></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div class="text-center py-2">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
}
</script>
