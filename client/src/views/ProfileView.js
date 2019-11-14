import React from 'react';

import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';

import ProfilePic from '../assets/img/profile-pic.jpg';
import add from '../assets/img/icons/add-green.svg'
import edit from '../assets/img/icons/edit.svg'
import imgPlaceholder from '../assets/img/img-placeholder.png'


class ProfileView extends React.Component {


    constructor(props) {
        super(props)
        this.state = { 
            editing: false,
            maxCharResume: 150,
            charLeft: 150,
            addCompetence: false,
            data:"",

            isLoading: true,

            name: "",
            mail: "",
            persoMail: "",
            phone: "",
            job: "",
            resume: "",

            imageProfile: "",

            competences: [],

        }
        this.fileInput = React.createRef();

        this.editClick = this.editClick.bind(this);
        this.charChange = this.charChange.bind(this);
        this.addCompetence = this.addCompetence.bind(this);
        this.createCompetence = this.createCompetence.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }

    async componentDidMount() {
        var id = window.location.search.split("=")[1];

        const responseInfo = await fetch(`http://hetic.adebayo.fr/api/user/${id}`);
        const jsonInfos = await responseInfo.json();

        const responseCompetences = await fetch(`http://hetic.adebayo.fr/api/user/${id}/skills`);
        const jsonCompetences = await responseCompetences.json();

        this.setState({
            competences: jsonCompetences.result.skills
        })

        this.setState({ 
            email : jsonInfos.result.user.email,
            job: jsonInfos.result.user.job,
            persoMail: jsonInfos.result.user.personal_email,
            phone: jsonInfos.result.user.phone,
            resume: jsonInfos.result.user.description,
            name: jsonInfos.result.user.first_name + " " + jsonInfos.result.user.last_name,
            isLoading: false
        });
        if(jsonInfos.result.user.photo_url == "" ){
            this.setState({
                imageProfile: imgPlaceholder,
            })
        } else {
            this.setState({
                imageProfile: jsonInfos.result.user.photo_url,
            })
        }
    }

    handleChange(event){}

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
        var myInit = { 
            method: 'POST',
            body: this.state.mail,
        };

        // fetch('http://hetic.adebayo.fr/api', myInit).then(function(response) {
        //     return response.json();
        // }).then(function(jsonResponse) {
        //     console.log(jsonResponse);
        // });

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
                <section className={'profile-header'}>
                    <HeaderTop />
                    <HeaderBottom 
                        title={this.state.name}
                    />
                </section>
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
                                    placeholder="figma"
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

                { this.state.isLoading ? <div className="ta-c">Loading infos</div> :
                <div className={ this.state.editing ? 'editing' : null}>
                
                    <form onSubmit={this.saveProfile}>
                        <div className="container">
                            <div className="row ai-center jc-between mt-md">
                                <div className="title-md">Personal informations</div>
                                { this.state.editing ? null : 
                                    <button onClick={this.editClick} className="edit-profile c-green d-f ai-center">Edit profil <img className="ml-xs" src={edit}/></button>
                                }
                            </div>
        

                            { this.state.editing ? 
                                <button className="new-profile-image mt-md">
                                    <img src={add} alt=""/>
                                    <input type="file" ref={this.fileInput} name="image"/>
                                </button>   
                                
                                : 
                                <div className="row mt-md">
                                    <div className="profile-image" style={{backgroundImage: `url(${this.state.imageProfile}`}}>
                                    </div> 
                                </div>    
                            }
                            

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
                                                        value={this.state.persoMail}
                                                        onChange={(event) => this.setState({
                                                            persoMail: event.value
                                                        })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Phone</label>
                                                    <input
                                                        type="phone"
                                                        className="input-custom"
                                                        placeholder="Number"
                                                        name="phone"
                                                        value={this.state.phone}
                                                        onChange={(event) => this.setState({
                                                            phone: event.value
                                                        })}
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
                                                        value={this.state.email}
                                                        onChange={(event) => this.setState({
                                                            email: event.value
                                                        })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="label title-xs">Job</label>
                                                    <input
                                                        type="text"
                                                        className="input-custom"
                                                        placeholder="Your job"
                                                        name="job"
                                                        value={this.state.job}
                                                        onChange={(event) => this.setState({
                                                            job: event.value
                                                        })}
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
                                        <textarea className="textarea" placeholder="About you.." name="resume" value={this.state.resume} onChange={this.charChange}>
                                        </textarea>                                    
                                    </div>
                                </div>
                            </div>
                        </section>



                        <div className="validate mt-lg">
                            <div className="container">
                                <div className="row jc-between">
                                    <div className="col-xs-5">
                                        <div onClick={this.editClick} className="second button-component">Cancel</div>
                                    </div>
                                    <div className="col-xs-5">
                                        <button type="submit" className="button-component">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>

                    <section className="competences mt-md">
                        <div className="container">
                            <div className="row">
                                <div className="title-md">Competences</div>
                            </div>
                            <div className="row">
                                <div onClick={this.addCompetence} className="competences-item new">
                                    <img src={add} alt=""/>
                                </div>
                                
                                {this.state.competences.map((value, index) => {
                                    return <div key={index} className="competences-item">
                                                <div className="ta-c">
                                                    {console.log(value)}
                                                    <img src={"http://hetic.adebayo.fr" + value.icon} alt=""/>
                                                    <div className="name">{value.name}</div>
                                                    <div className="type">{value.type}</div>
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                    </section>

                </div>
                }

            </div> 
        );
    } 
}


export default ProfileView;