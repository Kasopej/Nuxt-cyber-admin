export default {
  data() {
    return {
      tabInvitation: 0,
      tabInvitations: 0,
      pendingInvites: [],
      revokedInvites: [],
      acceptedInvites: [],
    }
  },
  methods: {
    loadInvites(inviteTab) {
      switch (inviteTab) {
        case 'InvitationPending':
          this.loadPendingInvites()
          break
        case 'InvitationRevoked':
          this.loadRevokedInvites()
          break
        case 'InvitationAccepted':
          this.loadAcceptedInvites()
          break

        default:
          break
      }
    },
  },
}
