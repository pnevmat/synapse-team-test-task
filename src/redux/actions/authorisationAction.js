import {createAction} from '@reduxjs/toolkit';

const authorisationRequest = createAction('authorisation/authorisationRequest');
const authorisationSuccess = createAction('authorisation/authorisationSuccess');
const authorisationError = createAction('authorisation/authorisationError');

export default {authorisationRequest, authorisationSuccess, authorisationError};