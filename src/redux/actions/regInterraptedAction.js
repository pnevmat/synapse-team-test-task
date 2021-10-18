import {createAction} from '@reduxjs/toolkit';

const regInterraptedRequest = createAction('registration/regInterraptedRequest');
const regInterraptedSuccess = createAction('registration/regInterraptedSuccess');
const regInterraptedError = createAction('registration/regInterraptedError');

export default {regInterraptedRequest, regInterraptedSuccess, regInterraptedError};