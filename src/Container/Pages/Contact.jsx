import React, { useState } from 'react';
import Heading from '../Components/Heading';

function Contact() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    if(data.fullname.length <= 2 || data.email.length == '' || data.phone == ""){
        alert('Invalid Data');
    } else {
    alert(
      `My Name is ${data.fullname} and my phone No. is ${data.phone} !!! My Email address is ${data.email} and I want to say ${data.msg}`
    );} 
    setData({
      fullname: '',
      phone: '',
      email: '',
      msg: '',
    });
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <Heading text={<h1 className='text-center'> Contact Us </h1>} />
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={submitForm}>
              <div className='form-group'>
                <label for='exampleFormControlInput1'>Enter Your Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='fullname'
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder='Your Name '
                />
              </div>
              <div className='form-group'>
                <label for='exampleFormControlInput1'>
                  Enter Your Phone Number
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder='Mobile No.'
                />
              </div>
              <div className='form-group'>
                <label for='exampleFormControlInput1'>
                  Enter Your Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={data.email}
                  onChange={inputEvent}
                  placeholder='name@example.com'
                />
              </div>
              <div className='form-group'>
                <label for='exampleFormControlTextarea1'>Message</label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  name='msg'
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <button type='submit' className='btn btn-outline-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
