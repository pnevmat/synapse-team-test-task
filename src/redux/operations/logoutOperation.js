import logoutAction from '../actions/logoutAction';

const logoutOperation = userData => async dispatch => {
    dispatch(logoutAction.logoutRequest());

    try {
        dispatch(logoutAction.logoutSuccess());

    } catch(error) {
        dispatch(logoutAction.logoutError(error));
    }
};

export default logoutOperation;