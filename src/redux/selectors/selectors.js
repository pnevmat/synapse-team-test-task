import { createSelector } from '@reduxjs/toolkit';

const getRegistrationData = state => state.registrationData;

const getIsAuthorised = state => state.isAuth;

const registrationSelector = createSelector([getRegistrationData], registered => {
    return registered;
});

const authorisationSelector = createSelector([getIsAuthorised], authorised => {
    return authorised;
});

export default {
    getRegistrationData,
    getIsAuthorised,
    registrationSelector,
    authorisationSelector
}