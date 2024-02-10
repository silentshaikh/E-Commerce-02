import React from 'react'
import '../Contact/Contact.css';
function Contact() {
  return (
   <section className="contactCont">
   <div className="contBox1">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7239.49700464371!2d67.0062544893425!3d24.872437845420563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e3cd4d97d0f%3A0x4f8c295f447b99e2!2sUsmanabad%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700931236955!5m2!1sen!2s" width="800" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   </div>
   <div className="contBox2">
    <form action="" className='formCont'>
      <label htmlFor="">User Name</label>
      <input type="text" name="" id="" required placeholder='Enter Your Name' />
      <label htmlFor="">Email</label>
      <input type="email" name="" id="" required placeholder='Enter Your Email' />
      <label htmlFor="">Message</label>
      <textarea name="" id="" cols="30" rows="10" required placeholder='Enter Your Message'></textarea>
      <button>Submit</button>
    </form>
   </div>
   </section>
  )
}

export default Contact
