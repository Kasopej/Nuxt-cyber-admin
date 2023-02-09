export default {
  data() {
    return {
      tabInvitation: 0,
      tabInvitations: 0,
      shouldLoadPendingInvites: true,
      shouldLoadRevokedInvites: false,
      shouldLoadAcceptedInvites: false,
      pendingInvites: [],
    }
  },
  watch: {
    tabInvitations(tabIndex) {
      switch (tabIndex) {
        case 1:
          this.shouldLoadAcceptedInvites = true
          break

        case 2:
          this.shouldLoadRevokedInvites = true
          break

        default:
          break
      }
    },
    shouldLoadRevokedInvites(boolVal) {
      if (boolVal) this.loadRevokedInvites?.()
    },
    shouldLoadAcceptedInvites(boolVal) {
      if (boolVal) this.loadAcceptedInvites?.()
    },
  },
  mounted() {
    this.loadPendingInvites?.()
  },
}
