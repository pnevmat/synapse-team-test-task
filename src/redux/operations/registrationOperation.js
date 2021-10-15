import registrationAction from '../actions/registrationAction';

const registerOperation = userData => async dispatch => {
    dispatch(registrationAction.registrationRequest());

    try {
        dispatch(registrationAction.registrationSuccess(userData));

    } catch(error) {
        dispatch(registrationAction.registrationError(error));
    }
};

export default registerOperation;