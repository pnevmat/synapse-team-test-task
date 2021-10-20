import React, {useRef} from 'react';

import carouselText from '../../utils/constants';

import styles from './carousel.module.css'

const Carousel = () => {

    const carouselLineRef = useRef(null);

    let offset = 0;

    const handleSwip = (e) => {
        console.log('Delta Y: ', e.deltaY);
        if (e.deltaY > 0 && offset < (1600 * 2)) {
            offset += 1600;
            console.log('Offset increase');
        } else if (e.deltaY < 0 && offset > 0) {
            offset -= 1600;
            console.log('Offset decrease');
        } else if (e.deltaY > 0 && offset >= (1600 * 2)) {
            offset = 0;
            console.log('Offset over last ing');
        } else if (e.deltaY < 0 && offset === 0) {
            offset = 1600 * 2;
            console.log('Offset before first img');
        }

        carouselLineRef.current.style.right = `${offset + 'px'}`;
    };

    const carouselLineStyle = {
        right: `${offset}`
    }

    console.log('Offset before return in component: ', offset);

    return (
        <div className={styles.carousel}>
            <ul ref={carouselLineRef} className={styles.carouselLine} style={carouselLineStyle}>
                {carouselText.map(item => {
                    const style = {
                        backgroundRepeate: 'no-repeate',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${item.poster})`
                    }

                    return (
                        <li key={item.id} className={styles.item} style={style} onWheel={e => handleSwip(e)}>
                            <div className={styles.itemContainer}>
                                <h2 className={styles.itemTitle}>{item.title}</h2>
                                <div>
                                    <span className={styles.descriptionText}>Genre:</span>
                                    <span>{item.genre}</span>
                                </div>
                                <div>
                                    <span className={styles.descriptionText}>Director:</span>
                                    <span>{item.director}</span>
                                </div>
                                <div>
                                    <span className={styles.descriptionText}>Actors:</span>
                                    <span>{item.actors}</span>
                                </div>
                                <div>
                                    <span className={styles.descriptionText}>Description:</span>
                                    <span>{item.plot}</span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Carousel;