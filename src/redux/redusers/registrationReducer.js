import {createReducer} from '@reduxjs/toolkit';

import registrationAction from '../actions/registrationAction';

const registrationInitialState = {};

const registrationReducer = createReducer(registrationInitialState, {
    [registrationAction.registrationSuccess]: (_, {payload}) => payload,
});

export default {registrationReducer};