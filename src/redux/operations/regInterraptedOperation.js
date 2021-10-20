import regInterraptedAction from '../actions/regInterraptedAction';

const registerOperation = () => async dispatch => {
    dispatch(regInterraptedAction.regInterraptedRequest());

    try {
        dispatch(regInterraptedAction.regInterraptedSuccess());

    } catch(error) {
        dispatch(regInterraptedAction.regInterraptedError(error));
    }
};

export default registerOperation;