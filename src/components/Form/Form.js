import React, { Component } from 'react';
import shortid from 'shortid'

class Form extends Component {
    state = {
    name: "",
        tag: "",
        experience: "junior",
    license: false
    };
    nameInputId = shortid.generate();
    tagInputId = shortid.generate();

handleChange = event => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
    };
    
    handleSubmit = event => {
        event.preventDefault();
    
        
        this.props.onSubmit(this.state);
        this.reset();
    };

    handleLicenseChange = e => {
        this.setState({license: e.currentTarget.checked})
    }

    reset = () => {
        this.setState({ name: "",
    tag: ""});
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} > Имя
                    <input  type="text" name="name" value={this.state.name} onChange={this.handleChange} id={this.nameInputId} />
                 </label>
                <label htmlFor={this.tagInputId}>
                     Прозвище
                    <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange} id={this.tagInputId} />
                </label>
                <p>Ваш уровень:</p>
                <label>
                    <input type="radio" name="experience" onChange={this.handleChange} checked={this.state.experience === "junior" } value="junior" /> junior
                </label>
                 <label>
                    <input type="radio" name="experience" onChange={this.handleChange} checked={this.state.experience ==="middle" } value="middle" />middle
                </label>
                 <label>
                    <input type="radio" name="experience" onChange={this.handleChange} checked={this.state.experience ==="senior" } value="senior" />senior
                </label>

                <label>
                    <input type='checkbox' name="license" checked={this.state.license } onChange={this.handleLicenseChange} />Согласен со всем
                </label>
          
                    <button type="submit" disabled={!this.state.license} >Отправить</button>
         
            </form>
        )
    }


};

export default Form;