import React from 'react'
import './Contact.css'

function Contact() {

  const changeBtnColor=()=>{
    document.getElementById("submit-button").style.backgroundColor='red';
  }

  const normalBtnColor=()=>{
    document.getElementById("submit-button").style.backgroundColor='#fff';
  }
  return (
  <>
     
     <h2 id='contact-page-heading'>Contact Page</h2>
     <div className='contact-form'>
    <form 
          action ="https://formspree.io/f/xayrvkyy" 
           method='post'>
    <input
           type='text' 
           placeholder='Name'
           name='Username'
           required
           id='name-area'
           autoComplete='off' //don't show the previous data
           /><br/><br/>

       <input
           type='email' 
           name='Email'
           placeholder='Email or Phone'
           required
           id='email-area'
           autoComplete='off'
           />
           <br/><br/>

        <textarea
              name='Message'
              cols='30'
              rows='10'
              required
              autoComplete='off'
              placeholder='enter your message here'
              /><br/><br/>

        <input 
                onMouseEnter={changeBtnColor}
                onMouseLeave={normalBtnColor}
                type='submit'
                value='send'
                id='submit-button'
                />
         </form>
         </div>
  </>
  )
}

export default Contact
