import AppHelper from "./AppHelpers";


const SessionHelper =  {

    /**
     * The name of access token in local storage.
     *
     * @var string
     */
    authLocalStorageName: '__xxx-tutnfkin-sbuvyrujz',

    /**
     * Flush local storage with the current user
     * access token and reload app to bind auth route.
     *
     * @param token (string) The user's token.
     */
    build: (token) => {
        localStorage.setItem(SessionHelper.authLocalStorageName, token);
        window.location.reload();
    },

    /**
     * Check existence of an access token in local storage.
     *
     * @returns {boolean}
     */
    isAuth: () => {
        return localStorage.getItem(SessionHelper.authLocalStorageName) ? true : false;
    },

    /**
     * Get an user data from local storage on access token.
     *
     * @returns {*|any[]|boolean|any}
     */
    userData: () => {
        return AppHelper.parseJwt(
            localStorage.getItem(SessionHelper.authLocalStorageName),
            'payload'
        );
    },

    /**
     * Check if the current user as some role.
     *
     * @param role (string) The role to verify.
     * @returns {boolean}
     */
    hasRole: (role) => {
        return SessionHelper.userData().role === role ? true : false;
    }

}

export default SessionHelper;