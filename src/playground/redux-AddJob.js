import {combineReducers, createStore} from "redux";
import uuid from 'uuid';
import {createJob} from "../actions/job";

const store = createStore(combineReducers({ job: jobReducer }));
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(createJob({ jobId: 'dd45edsd' }));

const info = store.dispatch(createJob({ jobId: 'tt4457d', title: 'Hiring Software Dev.' }));
console.log(info);

const demoState = {
    job: {
        id: uuid(),
        title: 'Web Development',
        description: 'Any Graduate Can Apply',
        jobId: '594865dd'
    }
};