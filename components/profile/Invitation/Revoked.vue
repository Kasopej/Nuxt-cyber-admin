<template>
  <main class="py-8">
    <template v-if="revokedUsers.length > 1">
      <section v-for="user in revokedUsers" :key="user.id">
        <div
          class="d-flex flex-wrap justify-space-between align-center w-100 py-3"
        >
          <div>{{ user.username }}</div>
          <div>
            <v-btn small color="accent" class="text-capitalize mr-4"
              >Accept<v-icon small class="ml-3">mdi-check</v-icon></v-btn
            >
            <v-btn small color="red" outlined class="text-capitalize"
              >Delete <v-icon small class="ml-3">mdi-delete</v-icon></v-btn
            >
          </div>
        </div>
        <v-divider />
      </section>
    </template>

    <div v-else class="pa-8">No Revoked Invitations</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      revokedUsers: [
        { id: 0, username: 'lvvjxbpunpi' },
        { id: 1, username: 'olajide.a.hammed' },
        { id: 2, username: 'xyz.lvvjxb.punpi' },
      ],
    }
  },
}
</script>
