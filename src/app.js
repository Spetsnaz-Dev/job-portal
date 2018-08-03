import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetJobs } from './actions/job';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from "./routes/AppRouter";
import {login, logout} from "./actions/auth";
import LoadingPage from './components/LoadingPage';

export const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage /> , document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetJobs()).then(() => {
            ReactDOM.render(jsx, document.getElementById('app'));
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
