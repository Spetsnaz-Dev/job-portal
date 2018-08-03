import React from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RegisterPage from "../components/RegisterPage";
import JobList from "../components/JobList";
import AddJobPage from "../components/AddJobPage";
import ApplyJob from "../components/ApplyJob";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Route path='/' component={RegisterPage} exact={true} />
        <Route path='/dashboard' component={JobList} />
        <Route path='/create' component={AddJobPage} />
        <Route path='/apply' component={ApplyJob} />
        </div>
    </Router>
);
export default AppRouter;