import {createReducer} from '@reduxjs/toolkit';

import registrationAction from '../actions/registrationAction';
import authorisationAction from '../actions/authorisationAction';

const authorisationInitialState = {};

const authorisationReducer = createReducer(authorisationInitialState, {
    [registrationAction.registrationSuccess]: () => true,
    [authorisationAction.authorisationSuccess]: () => true,
});

export default {authorisationReducer};