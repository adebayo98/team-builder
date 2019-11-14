
const SessionHelper =  {

    isAuth: () => {
        return localStorage.getItem('userData') ? true : false;
    },

    userData: () => {
        return JSON.parse(localStorage.getItem('userData'));
    },

    hasRole: (role) => {
        return JSON.parse(localStorage.getItem('userData')) === role ? true : false;
    }

}

export default SessionHelper;