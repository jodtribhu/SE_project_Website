export default{
    userId(state)
    {
      return state.userId;
    },
    token(state){
      return state.token;
    },
    isUserLoggedIn(state)
    {
      return !!state.token;
    },
    // didAutoLogout(state){
    //   return state.didAutoLogout;
    // }
}