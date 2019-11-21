const RolesTranslator = (role) => {
    if(role === "admin"){
        return 'Administrateur';
    }

    if(role === "student"){
        return 'Étudiant(e)';
    }

    if(role === "speaker"){
        return 'Intervenant(e)';
    }
}

export default RolesTranslator;