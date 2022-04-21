import React from 'react'

import InfoHeader from './InfoHeader'
import About from './About';
import Interests from './Interests';
import SocialFooter from './SocialFooter';

function Card() {
    return (
      <div className='w-[34.375rem] h-[48.75rem] bg-[#23252c]'>
        <div className='py-11 px-32'>
          <InfoHeader />
          <About />
          <Interests />
          <SocialFooter />
        </div>
      </div>
    );
  }
  
  export default Card;