import React from 'react'

import footerGitHub from '../Images/footer-github.png'
import footerTwitter from '../Images/footer-twitter.png'
import footerLinkedIn from '../Images/footer-linkedin.png'

function SocialFooter() {
    return (
      <div className='bg-[#161619] py-5 rounded-b-lg'>
          <ul className='flex items-center justify-center gap-6'>
              <li>
                <a href='https://twitter.com/georgeoffley'>
                  <img src={footerTwitter} alt='Twitter Link Icon' />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/georgeoffley/'>
                  <img src={footerLinkedIn} alt='LinkedIn Link Icon' />
                </a>
              </li>
              <li>
                <a href='https://github.com/georgeoffley'>
                  <img src={footerGitHub} alt='GitHub Link Icon' />
                </a>
              </li>
          </ul>
      </div>
    );
}
  
  export default SocialFooter;