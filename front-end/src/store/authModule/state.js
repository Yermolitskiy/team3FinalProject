
const state = {
    isLogged:false,
    user:{},
    userLoading:false,
    error:undefined,
    // to share state between burger and sidebar i was too lazy 
    // to make observable component and seprate module for this is redundant so i decided put it here
    
    isNavOpen:false

}

export default state