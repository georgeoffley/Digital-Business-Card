import React from 'react'

import headShot from '../Images/george-headshot.jpg'

function InfoHeader() {
    return (
      <main className='rounded-t-lg bg-inner-card-bg'>
        <img src={headShot} alt="George Offley Headshot" className='rounded-t-lg w-80 h-auto' />
        <div className='px-4 pt-6 text-center'>
          <h2 className='text-2xl font-bold text-white'>George Offley</h2>
          <h3 className='text-xs text-[#F3BF99]'>Software Engineer</h3>
          <a href="https://georgeoffley.com/" className='text-xs text-white'>Website/Blog</a>
        </div>

        <div className='px-9 pt-4 flex justify-center items-center gap-4 text-white font-medium text-sm'>
          <a href="https://twitter.com/georgeoffley" className='bg-[#2fe5ff] w-28 h-8 rounded-md flex items-center justify-center gap-2'>
            <i class="fa-brands fa-twitter"></i>
            <button type='button'>Twitter</button>
          </a>
          <a href="https://www.linkedin.com/in/georgeoffley/" className='bg-[#5093E2] w-28 h-8 rounded-md flex items-center justify-center gap-2'>
            <i class="fa-brands fa-linkedin"></i>
            <button type='button'>LinkedIn</button>
          </a>
        </div>
      </main>
    );
}
  
  export default InfoHeader;