import React from 'react';

import ProfilePic from '../assets/img/profile-pic.jpg';

class ProfileView extends React.Component {


    constructor(props) {
        super(props)
        this.state = { 
            editing: false,
            maxCharResume: 150,
            charLeft: 150,
            addCompetence: false,
        }
        this.editClick = this.editClick.bind(this);
        this.charChange = this.charChange.bind(this);
        this.addCompetence = this.addCompetence.bind(this);
    }

    charChange(event){
        var maxChar = this.state.maxCharResume;
        var charsNumber = event.target.value.length;

        this.setState({
            charLeft: maxChar - charsNumber
        });

        if(this.state.charLeft <= 1){
            event.target.read = true
        }

    }

    editClick(){
        this.setState(state => ({
            editing: !state.editing
        }));
    }



    addCompetence(){
        console.log('salut')
        this.setState({
            addCompetence: true,
        });    
    }

    render(){
        return(
            
            <div className={'profile-view'}>
                { this.state.addCompetence ?
                    <div>
                        <div className="overlay"></div>
                        <div className="competences-popup">
                        </div>
                    </div>
                : null
                }
                <div className="profile-name">
    
                    <h1 className="ta-c title-lg">Nathan Colin</h1>
    
                    <div className="container">
                        <div className="row ai-center jc-between mt-md">
                            <div className="title-md">Personal informations</div>
                            { this.state.editing ? null : 
                            <btn onClick={this.editClick} className="edit-profile c-green d-f ai-center">Edit profil <img className="ml-xs" src='/images/icons/edit.svg'/></btn>
                            }
                        </div>
    
                        <div className="row mt-md">
                            <div className="profile-image" style={{backgroundImage: `url(${ProfilePic}`}}>
                            </div> 
                        </div>
                    </div>
    
                    <section className="infos mt-md">
                        <div className="container">
                            <form className={ this.state.editing ? "editing" : null }>
    
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div className="row">
                                            <div className="col-xs-10">
                                                <div className="mt-sm">
                                                    <label className="label title-xs">Personal email</label>
                                                    <input
                                                        type="email"
                                                        className="input-custom"
                                                        placeholder="personal email"
                                                        value=""
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Phone</label>
                                                    <input
                                                        type="phone"
                                                        className="input-custom"
                                                        placeholder="Number"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="col-xs-6">
                                        <div className="row jc-end">
                                            <div className="col-xs-10">
                                                <div className="mt-sm">
                                                    <label className="label title-xs">Email</label>
                                                    <input
                                                        type="email"
                                                        className="input-custom"
                                                        placeholder="Email"
                                                        value=""
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Job</label>
                                                    <input
                                                        type="text"
                                                        className="input-custom"
                                                        placeholder="Your job"
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
    
                                <div className="row mt-md">
                                    <div className="col-xs-12">
                                        <div className="d-f jc-between">
                                            <div className="label title-xs">Resume</div>
                                            <div className="label title-xs chars-left">{ this.state.charLeft } characters left</div>
                                        </div>
                                        <textarea className="textarea" onChange={this.charChange}>
                                        </textarea>                                    
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
    
                    <section className="competences mt-md">
                        <div className="container">
                            <div className="row">
                                <div className="title-md">Competences</div>
                            </div>
                            <div className="row">
                                <btn onClick={this.addCompetence} className="competences-item new">
                                    <img src="/images/icons/add.svg" alt=""/>
                                </btn>
                            </div>
                        </div>
                    </section>
    
                </div>
            </div> 
        );
    } 
}


export default ProfileView;