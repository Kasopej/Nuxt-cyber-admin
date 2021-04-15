<template>
  <div>
    <!-- <div>You have no group yet</div> -->

    <v-simple-table>
      <template #default>
        <!-- <thead>
          <tr>
            <th></th>
            <th class="subtitle-1 ">E-mail</th>
            <th class="subtitle-1 ">Status</th>
            <th class="subtitle-1 ">Points</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-for="q in 5" :key="q">
            <td><v-checkbox /></td>
            <td>Olajide.{{ q }}.Hammed@gmail.com</td>
            <td>Verified</td>
            <td>{{ q }}0</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
