import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Carousel from '../../components/Сarousel/Carousel';

const HomePage = () => {

    return (
        <>
            <Header />
            <Carousel />
        </>
    );
};

export default HomePage;