import React from 'react';
import { connect } from 'react-redux';
import JobListItem from './JobListItem';
import Header from "./Header";


const JobList = (props) => (
    <div className="wrapper">
        <Header />
        <h1 className="header__subtitle">Job List</h1>
        {props.job.map((job) => {
            return <JobListItem {...job} key={job.id} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        job: state.job
    }
};

export default connect(mapStateToProps)(JobList);