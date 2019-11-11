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

            mail: "",
            persoMail: "",
            phone: "",
            job: "",
            resume: "",

            competences: [
                {
                    'img': '../assets/img/profile-pic.jpg',
                    'name': 'Figma',
                    'type': 'Method' 
                }
            ],

        }
        this.editClick = this.editClick.bind(this);
        this.charChange = this.charChange.bind(this);
        this.addCompetence = this.addCompetence.bind(this);
        this.createCompetence = this.createCompetence.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }

    handleChange(){}

    //Count characteres left in resume
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

    //editable or not
    editClick(){
        this.setState(state => ({
            editing: !state.editing
        }));
    }

    //popup or not
    addCompetence(){
        this.setState(state => ({
            addCompetence: !state.addCompetence
        }));
    }

    //create new competance and add it in state
    createCompetence(event){
        event.preventDefault();

        var newCompetence = {
            'name':  event.target.name.value,
            'type': event.target.type.value
        }

        this.setState({
            competences: this.state.competences.concat(newCompetence)
        });
    }

    saveProfile(event){
        event.preventDefault();

        console.log(event.target.persoMail.value, event.target.mail.value, event.target.phone.value, event.target.job.value)

        this.setState({
            mail: event.target.mail.value,
            persoMail: event.target.persoMail.value,
            phone: event.target.phone.value,
            job: event.target.job.value,
            resume: event.target.resume.value
        })
        this.setState(state => ({
            editing: !state.editing
        }));
    }



    render(){
        return(
            
            <div className={'profile-view'}>
                { this.state.addCompetence ?
                    <div>
                        <div className="overlay"></div>
                        <div className="competences-popup">
                            <div className="title-md">Ajouter une compétence</div>
                            <form className="create-competence mt-md" onSubmit={this.createCompetence}>
                                <label className="label title-xs">Nom de la compétence</label>
                                <input
                                    type="text"
                                    className="input-custom-competence"
                                    name="name"
                                    value={this.props.searchString}
                                    onChange={this.handleChange}
                                />
                                <label className="label title-xs">Type</label>
                                <select className="select-custom-competence" name="type" id="">
                                    <option value="design">Design</option>
                                    <option value="dev">Dev</option>
                                    <option value="method">Method</option>
                                </select>

                                <div className="d-f mt-md">
                                    <button className="close btn btn-empty" onClick={this.addCompetence}>Annuler</button>
                                    <button type="submit" className="create-competence-btn btn btn-green">Créer</button>
                                </div>

                            </form>
                        </div>
                    </div>
                : null
                }
                <div className={ this.state.editing ? 'editing' : null}>
                
                    <h1 className="ta-c title-lg">Nathan Colin</h1>
                    <form onSubmit={this.saveProfile}>
                        <div className="container">
                            <div className="row ai-center jc-between mt-md">
                                <div className="title-md">Personal informations</div>
                                { this.state.editing ? null : 
                                <button onClick={this.editClick} className="edit-profile c-green d-f ai-center">Edit profil <img className="ml-xs" src='/images/icons/edit.svg'/></button>
                                }
                            </div>
        
                            <div className="row mt-md">
                                <div className="profile-image" style={{backgroundImage: `url(${ProfilePic}`}}>
                                </div> 
                            </div>
                        </div>
        
                        <section className="infos mt-md">
                            <div className="container">    
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
                                                        name="persoMail"
                                                        value={this.props.searchString}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Phone</label>
                                                    <input
                                                        type="phone"
                                                        className="input-custom"
                                                        placeholder="Number"
                                                        name="phone"
                                                        value={this.props.searchString}
                                                        onChange={this.handleChange}
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
                                                        name="mail"
                                                        value={this.props.searchString}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Job</label>
                                                    <input
                                                        type="text"
                                                        className="input-custom"
                                                        placeholder="Your job"
                                                        name="job"
                                                        value={this.props.searchString}
                                                        onChange={this.handleChange}
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
                                        <textarea className="textarea" name="resume" onChange={this.charChange}>
                                        </textarea>                                    
                                    </div>
                                </div>
                            </div>
                        </section>
        
                        <section className="competences mt-md">
                            <div className="container">
                                <div className="row">
                                    <div className="title-md">Competences</div>
                                </div>
                                <div className="row">
                                    <button onClick={this.addCompetence} className="competences-item new">
                                        <img src="/images/icons/add.svg" alt=""/>
                                    </button>
                                    
                                    {this.state.competences.map((value, index) => {
                                        return <div key={index} className="competences-item">
                                                    <div className="ta-c">
                                                        <img src={value.img} alt=""/>
                                                        <div className="name">{value.name}</div>
                                                        <div className="type">{value.type}</div>
                                                    </div>
                                                </div>
                                    })}
                                </div>
                            </div>
                        </section>

                        <div className="validate mt-lg">
                            <div className="container">
                                <div className="row jc-between">
                                    <button onClick={this.editClick} className="btn btn-empty">Cancel</button>
                                    <button type="submit" className="btn btn-empty">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        );
    } 
}


export default ProfileView;