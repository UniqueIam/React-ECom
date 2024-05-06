import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'
function Error() {
  return (
    <>
        <div className='container'>
          <div className='error-content'>
          <h2 id='error-404'>404</h2><br/>
          UH OH!You're lost<br/>
          <p id='error-description'>The page you are looking for doesn't exit.Go back to the Home Page</p>
          
          </div>
          <NavLink to='/'>
              <button id='back-to-home'>Go Back To Home</button>
            </NavLink> 
        </div>
    </>
  )
}

export default Error
