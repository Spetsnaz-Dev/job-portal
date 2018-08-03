import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from "../actions/auth";
import RegisterPage from "./RegisterPage";

export const Login = ({ startLogin }) => {
    return (
        <div>
            <RegisterPage />
            <button
                className="login-button"
                onClick={startLogin}
            >Login with Google</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);