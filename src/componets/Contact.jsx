import React from 'react';
import '../styles.css/Contact.css'
const Contact = () => {
  return (
    <div contact-body>
      <div class="upper"></div>
      <div style={{ background: 'white', display: 'flex', justifyContent: 'center',marginBottom:'0', height:'55vh', width:'100%' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.38558072263!2d-74.0105491!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31627c7b97%3A0x38e3b7458e0f98f8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1617617954396!5m2!1sen!2sus"
        width="1100"
        height="300"
        margintop='2rem'
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
      <div className="cont">
        <div className="inputs">
          <h6 className='message'>Leave Us A Message</h6><br />
          <label htmlFor="">Name*</label>
          <input type="text" className='contact' required />
          <input type="text" className='contactt' required />
          <label htmlFor="">Email*</label>
          <input type="email" className='contacts' required />
          <label htmlFor="">Comment or Message</label>
          <textarea type="text" className='area'></textarea>
          <input type="submit" value="SUBMIT" id="sub" />
        </div>
        <div className="storess">
          <h6 className='message'>Our Store</h6>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>

          <p><strong>PHONE:</strong> <br />+1 212 244 2681</p><br />
          <p className='down'><strong>E-MAIL:</strong><br /> office@example.org</p>

          <h6 className='message'>Store Hours</h6><br />
          <p className='down'>Sun: Closed</p><br />
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
      
   </div>
    
  )
}

export default Contact
