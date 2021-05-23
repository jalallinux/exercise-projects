// const bcrypt = require('bcryptjs')
//
// export const state = () => ({
//   user: null,
// })
//
// export const actions = {
//   async login(state, {email, password}) {
//     const uid = (await this.$fire.auth.signInWithEmailAndPassword(email, password)).user.uid
//     const user = (await this.$fire.database.ref(`/users/${uid}`).get()).val()
//     state.commit('setUser', user)
//     return user
//   },
//   async register(state, {name, family, mobile, email, password}) {
//     const user = (await this.$fire.auth.createUserWithEmailAndPassword(email, password)).user
//     return this.$fire.database.ref(`/users/${user.uid}`).set({
//       id: user.uid, name, family, email,
//       mobile: '+98' + mobile.substr(-10, 10),
//       password: bcrypt.hashSync(password)
//     })
//   },
//   logout(state) {
//     state.commit('setUser', null)
//   }
// }
//
// export const mutations = {
//   setUser(state, user) {
//     state.user = user
//   },
// }
//
// export const getters = {
//   currentUser(state) {
//     return state.user
//   },
// }
//
