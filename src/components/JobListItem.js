import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const JobListItem = ({ title, description, jobId }) => {
    return (
    <div>
        <Link to={`/apply/${jobId}`}>
            <h3 className="job__heading">{title}</h3>
        </Link>
        <p className="description">Job Description: {description}</p>
        <p className="description">JobID: {jobId}</p>
    </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        job: state.job.find((job) => job.jobId === props.jobId  )
    };
};

export default connect(mapStateToProps)(JobListItem);
