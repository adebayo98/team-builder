
const apiHost = 'http://hetic.adebayo.fr/api';

const Api = {

     getRandomUsers: async (limit) => {
         const response = await fetch(apiHost+'/users/random/'+limit);
         const jsonResponse = await response.json();
         if (jsonResponse.status === 'success' && jsonResponse.result.users){
             return jsonResponse.result.users;
         }
    }

}

export default Api;