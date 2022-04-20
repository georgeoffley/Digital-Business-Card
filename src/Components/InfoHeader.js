import React from 'react'

import headShot from '../Images/george-headshot.jpg'

function InfoHeader() {
    return (
      <main>
          <img src={headShot} alt="George Offley Headshot" />
          <h2>George Offley</h2>
          <h3>Software Engineer</h3>
          <a href="https://georgeoffley.com/">Website/Blog</a>

          <div>
              <a href="https://twitter.com/georgeoffley"><button type='button'>Twitter</button></a>
              <a href="https://www.linkedin.com/in/georgeoffley/"><button type='button'>LinkedIn</button></a>
          </div>
      </main>
    );
}
  
  export default InfoHeader;