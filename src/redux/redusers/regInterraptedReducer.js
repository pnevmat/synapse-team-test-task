import {createReducer} from '@reduxjs/toolkit';

import regInterraptedAction from '../actions/regInterraptedAction';
import registrationAction from '../actions/registrationAction';

const regInterraptedInitialState = false;

const regInterraptedReducer = createReducer(regInterraptedInitialState, {
    [regInterraptedAction.regInterraptedSuccess]: () => true,
    [registrationAction.registrationSuccess]: () => false,
});

export default {regInterraptedReducer};