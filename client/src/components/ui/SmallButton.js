import React from 'react';

import iconAdd from '../../assets/img/icons/add.svg';
import iconReturn from '../../assets/img/icons/Arrow-left.svg';

const SmallButton = (props) => {

    return(
        <button className={'small-button'} type={'submit'}>
            <img src={props.return ? iconReturn : iconAdd} />
        </button>
    );

}

export default SmallButton;