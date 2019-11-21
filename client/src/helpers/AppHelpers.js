
const AppHelper = {

    /**
     * Parse a jwt token
     *
     * @param token
     * @param interestingPart
     * @returns {any[]|boolean|any}
     */
    parseJwt: (token, interestingPart = null) => {
        const tokenParts = token.split('.');

        if (interestingPart === null){
            return tokenParts.map((item, index) => index === 2 ? tokenParts[index] = item : tokenParts[index] = JSON.parse(atob(item)));
        }

        if (interestingPart === 0 || interestingPart === 'header'){
            return JSON.parse(atob(tokenParts[0]))
        }

        if (interestingPart === 1 || interestingPart === 'payload'){
            return JSON.parse(atob(tokenParts[1]))
        }

        if (interestingPart === 2 || interestingPart === 'signature'){
            return tokenParts[2];
        }

        return false;
    }

}

export default AppHelper;