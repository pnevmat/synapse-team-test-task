import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import registrationOperation from '../../redux/operations/registrationOperation';

import selectors from '../../redux/selectors/selectors';

import Header from '../../components/Header/Header';
import Carousel from '../../components/Сarousel/Carousel';

const HomePage = () => {
    const dispatch = useDispatch();

    const userData = JSON.stringify(useSelector(selectors.getRegistrationData));

    useEffect(() => {
        localStorage.setItem('userData', userData);
        console.log('User data from local storage: ', userData);
        // dispatch(registrationOperation(userData));

    }, []);

    return (
        <>
            <Header />
            <Carousel />
        </>
    );
};

export default HomePage;