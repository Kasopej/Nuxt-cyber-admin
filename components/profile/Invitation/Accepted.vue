<template>
  <main class="py-8">
    <template v-if="revokedUsers.length > 1">
      <section v-for="user in revokedUsers" :key="user.id">
        <div
          class="d-flex flex-wrap justify-space-between align-center w-100 py-3"
        >
          <div>{{ user.email }}</div>
          <div>
            <v-btn small color="red" outlined class="text-capitalize"
              >Revoke <v-icon small class="ml-3">mdi-cancel</v-icon></v-btn
            >
          </div>
        </div>
        <v-divider />
      </section>
    </template>

    <div v-else class="pa-8">No Accepted Invitations</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      revokedUsers: [
        { id: 2, email: 'olajide.a.hammed@gmail.com' },
        { id: 0, email: 'lvvjxbpunpi@biojuris.com' },
        { id: 2, email: 'xyz.lvvjxb.punpi@biojuris.com' },
      ],
    }
  },
}
</script>
