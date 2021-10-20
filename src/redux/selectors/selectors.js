import { createSelector } from '@reduxjs/toolkit';

const getRegistrationData = state => state.registrationData;

const getIsAuthorised = state => state.isAuth;

const getisRegInterrapted = state => state.isRegInterrapted;

const registrationSelector = createSelector([getRegistrationData], registered => {
    return registered;
});

const authorisationSelector = createSelector([getIsAuthorised], authorised => {
    return authorised;
});

const isRegInterraptedSelector = createSelector([getisRegInterrapted], isRegInterrapted => {
    return isRegInterrapted;
});

export default {
    getRegistrationData,
    getIsAuthorised,
    getisRegInterrapted,
    registrationSelector,
    authorisationSelector,
    isRegInterraptedSelector
}