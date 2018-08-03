import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
            <div>
                <h1 className="header__main">Welcome to Job Portal Site</h1>
                <p className="header__subtitle">Post or Apply a Job</p>
                <Link to="/create" className="btn">Post a Job</Link>
                <button onClick={startLogout} className="btn">Logout</button>
            </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);