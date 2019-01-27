const user = {
  state: {
    userId: 0
  },
  mutations: {
    updateUserId(state, userId){
      state.userId=userId;
    }
  }
}

export default user;