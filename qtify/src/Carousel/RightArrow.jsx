
import React from 'react';
import rightArrowIcon from './right-arrow.svg'; 
import styles from './Arrow.module.css'; 

const RightArrow = () => {
    return (
        <div className={`swiper-button-next ${styles.arrow}`}>
            <img src={rightArrowIcon} alt="Right Arrow" />
        </div>
    );
};

export default RightArrow;
