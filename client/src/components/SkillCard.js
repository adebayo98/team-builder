import React from 'react';

const SkillCard = (props) => {

    if(props.onEdit == true){
        return (
            <div className={'skill-card skill-card_add'}>
                <p>on edit</p>
            </div>
        );
    } else {
        return (
            <div className={'skill-card'}>
                <p>noo edit</p>
            </div>
        );
    }
}

export default SkillCard;