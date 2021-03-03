export default{
 
    setUser(state,payload)
    {
        state.token=payload.token;
        if(state.token){
            state.isUserLoggedIn=true;
            state.user=payload.userId;
            state.expiresIn=payload.expiresIn;
        }else{
            state.isUserLoggedIn=false;
            state.user=payload.userId;
            state.expiresIn=payload.expiresIn;
        }
        console.log("State user"+state.user);
        console.log("State isUserLoggedIn"+state.isUserLoggedIn);
        console.log("State expiresIn"+state.expiresIn);
        console.log("State token"+state.token);
    },

    // logoutUser(state,payload){
    //     console.log("Inside user");
    //     state.isUserLoggedIn=false;
    //     state.user=payload;
    // }
}