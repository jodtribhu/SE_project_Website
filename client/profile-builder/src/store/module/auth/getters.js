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
      console.log("State of user is "+!!state.token);
      return !!state.token;
    },
    isAuthenticated(state)
    {
      console.log(state);
      return !!state.token;
    }
    // didAutoLogout(state){
    //   return state.didAutoLogout;
    // }
}