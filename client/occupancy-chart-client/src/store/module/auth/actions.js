export default{
    setUser(context,payload)
    {
        console.log(payload);
        const newpayload={
            userId:payload.user._id,
            expiresIn:payload.expiresIn,
            token:payload.token
        }
        localStorage.setItem('userId', payload.user._id);
        localStorage.setItem('tokenExpiration', payload.expiresIn);
        localStorage.setItem('token', payload.token);
        return context.commit('setUser',newpayload);
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const expiresIn = localStorage.getItem('expiresIn');
        // const tokenExpiration = localStorage.getItem('tokenExpiration');

        // const expiresIn = +tokenExpiration - new Date().getTime();
        // if (expiresIn < 0) {
        //     return;
        // }
        // else {
        //    timer= setTimeout(function(){
        //         context.dispatch('autoLogout');
        //     },expiresIn)
        // }
        console.log("Ins");
        if (token && userId ) {
            context.commit('setUser', {userId: userId,expiresIn:expiresIn,token:token});
        }
    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            expiresIn: null,
        })
        // clearTimeout(timer);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');    
        localStorage.removeItem('tokenExpiration');

    },

}