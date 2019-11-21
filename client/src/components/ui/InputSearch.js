import React from 'react';

const InputSearch = (props) => {
    return(
        <input
            className={'input-search-component'}
            type={'text'}
            placeholder={props.placeholder ? props.placeholder : 'Rechercher un utilisateur'}
            name={props.search ? props.search : 'search'}
            onChange={(event) => props.onValueChange ? props.onValueChange(event.target.value) : console.log(event.target.value)}
        />
    );
}

export default InputSearch;