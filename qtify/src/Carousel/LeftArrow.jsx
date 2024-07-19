
import React from 'react';
import leftArrowIcon from './left-arrow.svg'; 
import styles from './Arrow.module.css'; 

const LeftArrow = () => {
    return (
        <div className={`swiper-button-prev ${styles.arrow}`}>
            <img src={leftArrowIcon} alt="Left Arrow" />
        </div>
    );
};

export default LeftArrow;
