import React from 'react';

import ProfilePic from './../../public/images/icons/edit.svg';

const ProfileView = () => {
    return(
        <div className={'profile-view'}>
            <div className="profile-name">

                <h1 className="ta-c title-lg">Nathan Colin</h1>

                <div className="container mt-md">
                    <div className="row ai-center jc-between">
                        <div className="title-md">Personal informations</div>
                        <div className="edit-profil c-green d-f ai-center">Edit profil <img className="ml-xs" src='/images/icons/edit.svg'/></div>
                    </div>

                    <div className="row">
                        <div className="profile-image" style={{backgroundImage: `url(${ProfilePic}`}}>
                        </div> 
                    </div>

                </div>


            </div>
        </div>
    );
}

export default ProfileView;