import authorisationAction from '../actions/authorisationAction';

const authorisationOperation = userData => async dispatch => {
    dispatch(authorisationAction.authorisationRequest());

    try {
        dispatch(authorisationAction.authorisationSuccess());

    } catch(error) {
        dispatch(authorisationAction.authorisationError(error));
    }
};

export default authorisationOperation;