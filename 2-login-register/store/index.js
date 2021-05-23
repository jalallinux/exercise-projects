export const state = () => ({
  authUser: {}
})
export const actions = {
  async onAuthStateChangedAction({ commit }, { authUser, claims }) {
    if (authUser) {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      // const meta = (await this.$fire.database.ref(`/users/${uid}`).get()).val()
      commit('SET_USER', {
        uid,
        email,
        emailVerified,
        displayName,
        photoURL,
        claims: claims,
        // ...meta
      })
    } else {
      commit('SET_USER', null)
    }
  },
  async nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
      commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims, token })
    }
  }
}
export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
    const { uid, email, emailVerified, displayName, photoURL } = authUser
    state.authUser = {
      uid,
      displayName,
      email,
      emailVerified,
      photoURL: photoURL || null,
      claims: claims
    }
  },
  SET_USER(state, payload) {
    state.authUser = payload;
  }
}
