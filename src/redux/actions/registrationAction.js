import {createAction} from '@reduxjs/toolkit';

const registrationRequest = createAction('registration/registrationRequest');
const registrationSuccess = createAction('registration/registrationSuccess');
const registrationError = createAction('registration/registrationError');

export default {registrationRequest, registrationSuccess, registrationError};