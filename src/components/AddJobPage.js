import React from 'react';
import { connect } from 'react-redux';
import JobForm from './JobForm';
import { startCreateJob } from '../actions/job';

const AddJobPage = (props) => {
    //console.log(props);
    return (
    <div className="wrapper">
        <h1 className="header__subtitle">Post Job</h1>
        <JobForm
            onSubmit={(job) => {
                props.dispatch(startCreateJob(job));
                props.history.push('/dashboard');
            }}
        />
    </div>
    );
};

export default connect()(AddJobPage);
