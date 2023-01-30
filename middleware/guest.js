// This is the middle ware for pages that doesn't require authentication

export default ({ store, redirect }) => {
  if (store.getters['auth/isLoggedIn']) {
    redirect('/')
  }
}
