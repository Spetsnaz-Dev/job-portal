import React from 'react';
import { connect } from 'react-redux';
import {history} from "../routes/AppRouter";

export class ApplyJob extends React.Component {
    state = {
       email: '',
       experience: 0,
       error: ''
    };
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({email: email});
    };
    onExpChange = (e) => {
        const exp = e.target.value;
        this.setState({experience: exp});
    };
    onSubmit = () => {
        if(this.state.email !== '') {
            history.push("/dashboard");
        } else {
            this.setState({error: 'Please provide details to apply!'});
        }
    };
    //console.log(props.title);
    render() {
        return (
            <div className="wrapper">
            <form>
                <h1 className="header__subtitle">APPLY</h1>
                <p className="form__error">{this.state.error}</p>
                <input
                    className="input__apply"
                    type='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.onEmailChange}
                    autoFocus
                />
                <input
                    className="input__apply"
                    type='number'
                    placeholder='Years of Experience'
                    value={this.state.experience}
                    onChange={this.onExpChange}
                />
                <label className="control-label">Upload Resume</label>
                <input
                    className="input__apply"
                    type='file'
                    id="files"
                    placeholder='Upload Resume'
                />
                <button className="btn btn-padding" onClick={this.onSubmit}>APPLY</button>
            </form>
            </div>
        );
    }
};

export default connect()(ApplyJob);