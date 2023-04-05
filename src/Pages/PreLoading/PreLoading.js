import React from 'react';
import logo from '../../assets/preLoadinLogo.png';

const PreLoading = () => {
    return (
        <div className='pre-loading-bg min-h-screen flex justify-center items-center'>
            <div className=''>
                <img loading='lazy' className='lg:h-[220px] md:h-[200px] h-[150px]' src={logo} alt='logo'></img>
                <div className='lg:h-[20px] md:h-[20px] h-[15px] mx-auto loader'></div>
                {/* lg:w-[200px] md:w-[185px] w-[150px] */}
            </div>
        </div>
    );
};

export default PreLoading;