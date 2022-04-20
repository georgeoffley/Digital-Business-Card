import React from 'react'

import InfoHeader from './InfoHeader'
import About from './About';
import SocialFooter from './SocialFooter';

function Card() {
    return (
      <div className='max-w-xs'>      
        <InfoHeader />
        <About />
        <SocialFooter />
      </div>
    );
  }
  
  export default Card;