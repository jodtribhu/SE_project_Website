export default{
    setToken(state,payload)
    {
        state.token=payload;
        if(state.token){
            state.isUserLoggedIn=true;
        }else{
            state.isUserLoggedIn=false;
        }
    },
    setUser(state,payload)
    {
        state.user=payload;
    }
}