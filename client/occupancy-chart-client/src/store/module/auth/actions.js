export default{
    setToken(context,payload)
    {
        return context.commit('setToken',payload);
    },
    setUser(context,payload)
    {
        console.log(payload);
        return context.commit('setUser',payload);
    }

}