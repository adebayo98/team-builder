import querystring from "query-string";

const apiHost = 'http://hetic.adebayo.fr/api';

const Api = {

    /**
     * Request access token from api.
     *
     * @param email (string) The user email.
     * @param password (string) The user password.
     * @returns {Promise<void>}
     */
    getCredentials: async (email, password) => {
        const response = await fetch(apiHost+'/user/credentials', {
            headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
            method: 'POST',
            body: querystring.stringify({
                email: email,
                password: password
            })
        });

        return await response.json();
    },

    /**
     * Request a random number based on the role.
     *
     * @param limit (int) The number of users.
     * @param role (string) The role of users.
     * @returns {Promise<null>}
     */
     getRandomUsers: async (limit, role = 'student') => {
         const response = await fetch(apiHost+'/users/random/'+limit);
         const jsonResponse = await response.json();
         if (jsonResponse.status === 'success' && jsonResponse.result.users){
             return jsonResponse.result.users;
         }
    }

}

export default Api;