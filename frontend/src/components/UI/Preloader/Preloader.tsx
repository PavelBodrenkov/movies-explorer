import React from 'react'
import { PreloaderRound, StyledPreloader } from './PreloaderStyle';

const Preloader = () => {
    return (
        <StyledPreloader>
            <div className="preloader__container">
                {/* <span className="preloader__round"></span> */}
                <PreloaderRound />
            </div>
        </StyledPreloader>
    )
};

export default Preloader