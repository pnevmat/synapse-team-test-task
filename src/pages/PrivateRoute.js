import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import selectors from '../redux/selectors/selectors';

const PrivateRoute = ({
    component: Component,
    redirectTo,
    ...routeProps
}) => {

    const isAuth = useSelector(selectors.getIsAuthorised);
    
    return (
        <Route 
            {...routeProps}
            render={props => isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />}
        />
    );
};

export default PrivateRoute;