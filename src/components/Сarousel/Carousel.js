import React, {useRef, useEffect} from 'react';

import carouselText from '../../utils/constants';

import styles from './carousel.module.css'

const Carousel = () => {

    useEffect(() => {
        
        return () => {
            clearInterval(intervalId)
        }
    });
    
    const carouselLineRef = useRef(null);

    const viewPortWidth = window.innerWidth;
    let offset = 0;
    let eventCount = 0;

    const intervalId = setInterval(() => {
        eventCount = 0;
    }, 3000);
    
    const handleSwip = (e) => {
        if (eventCount > 0) {
            return;
        };
        
        if (e.deltaY > 0 && offset < (viewPortWidth * 2)) {
            offset += viewPortWidth;
            
        } else if (e.deltaY < 0 && offset > 0) {
            offset -= viewPortWidth;
            
        } else if (e.deltaY > 0 && offset >= (viewPortWidth * 2)) {
            offset = 0;
            
        } else if (e.deltaY < 0 && offset === 0) {
            offset = viewPortWidth * 2;
        }

        carouselLineRef.current.style.right = `${offset + 'px'}`;
        eventCount += 1;
    };

    const carouselLineStyle = {
        right: `${offset}`
    }

    return (
        <div className={styles.carousel}>
            <ul ref={carouselLineRef} className={styles.carouselLine} style={carouselLineStyle}>
                {carouselText.map((item, index) => {
                    const style = {
                        backgroundImage: `url(${item.poster})`
                    }

                    return (
                        <li key={item.id} className={index > 0 ? styles.item : styles.firstItem} style={style} onWheel={e => handleSwip(e)}>
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