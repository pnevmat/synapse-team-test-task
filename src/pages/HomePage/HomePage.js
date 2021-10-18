import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import registrationOperation from '../../redux/operations/registrationOperation';

import selectors from '../../redux/selectors/selectors';

import Header from '../../components/Header/Header';
import Carousel from '../../components/Сarousel/Carousel';

const HomePage = () => {

    const regInterrapted = JSON.parse(localStorage.getItem('regInterrapted'));

    return (
        <>
            <Header regInterrapted={regInterrapted} />
            <Carousel />
        </>
    );
};

export default HomePage;