const RolesTranslator = (role) => {
    if(role === "admin"){
        return 'Administrateur';
    }

    if(role === "student"){
        return 'Étudiant';
    }

    if(role === "speaker"){
        return 'Intervenant';
    }
}

export default RolesTranslator;