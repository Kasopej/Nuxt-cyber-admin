<template>
  <div>
    <!-- <div>You have no group yet</div> -->

    <v-simple-table>
      <template #default>
        <tbody>
          <tr v-for="q in 5" :key="q">
            <td>Olajide.{{ q }}.Hammed@gmail.com</td>
            <td>Verified</td>
            <td>{{ q }}0 Points</td>
            <td>
              <v-btn small color="accent" class="text-capitalize mr-4"
                >Invite<v-icon small class="ml-3">mdi-email-send</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
