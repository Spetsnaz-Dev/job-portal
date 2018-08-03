import React from 'react';
import database from '../firebase/firebase';

//Create JOB
export const createJob = (job) => ({
    type: 'ADD_JOB',
    job
});

export const startCreateJob = (jobData = {}) => {
    return (dispatch) => {
        const {
            jobId = '',
            title = '',
            description = ''
        } = jobData;
        const job = { title, description, jobId };

        database.ref('jobs').push(job).then((ref) => {
            dispatch(createJob({
                id: ref.key,
                ...job
            }));
        });
    };
};

//Display All Jobs
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
        jobs
});

export const startSetJobs = () => {
    return (dispatch) => {
        return database.ref('jobs').once('value').then((snapshot) => {
            const jobs = [];
            snapshot.forEach((childSnapshot) => {
                jobs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setJobs(jobs));
        });
    };
};

//For AddUSER
/*
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = () => {

};
*/
