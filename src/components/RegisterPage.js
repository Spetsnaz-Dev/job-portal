import React from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";
import {startLogin} from "../actions/auth";

export let username='', password='', email='';

export class RegisterPage extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    };
    registerUser() {
        const {username, password, email} = this.state;
        console.log(username,password, email);
        if(username !== '' && password !== '' && email !== '') {
            firebase.database().ref(`users`).set({
                username,
                password,
                email
            }).then(() => {
                this.setState({ error: 'User Registered! Please Login to Continue' });
                //console.log('User Registered!');
            });
        } else {
            this.setState({ error: 'Please provide details to proceed!' });
        }
    };
    render() {
        return (
            <div>
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Job Portal</h1>
                    <p>SignUp to get started</p>
                    <p className="form__error">{this.state.error !== '' && this.state.error}</p>
                    <form className="form">
                        <input
                            className="input__registration"
                            type='text'
                            onChange={event => {
                                this.setState({username: event.target.value})
                                username = this.state.username;
                                password = this.state.password;
                                email = this.state.email;
                            }}
                            placeholder="Enter Username" />
                        <input
                            className="input__registration"
                            type='email'
                            onChange={event => this.setState({email: event.target.value})}
                            placeholder="Email" />
                        <input
                            className="input__registration"
                            type='password'
                            onChange={event => this.setState({password: event.target.value})}
                            placeholder="Enter Password" />
                        <button className="button" type="button" onClick={() => this.registerUser()}>Register</button>
                        <button className="button" type="button" onClick={this.props.startLogin }>Login with google</button>
                    </form>
                </div>
            </div>
            </div>
        );
    };
};


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(RegisterPage);