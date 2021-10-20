import {createReducer} from '@reduxjs/toolkit';

import registrationAction from '../actions/registrationAction';
import authorisationAction from '../actions/authorisationAction';
import logoutAction from '../actions/logoutAction';

const authorisationInitialState = false;

const authorisationReducer = createReducer(authorisationInitialState, {
    [registrationAction.registrationSuccess]: () => true,
    [authorisationAction.authorisationSuccess]: () => true,
    [logoutAction.logoutSuccess]: () => false,
});

export default {authorisationReducer};