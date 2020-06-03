import React from 'react';
import CompConfig from '../CompConfig';
import CompReview from '../CompReview';
import './style.css';

const Layout = () => {
    return(
        <div className="wrapperApp">
            <div className="configWrap"> 
                <CompConfig />
            </div>
            <div className="reviewWrap">
                <CompReview />
            </div>
        </div>
    );
}

export default Layout;