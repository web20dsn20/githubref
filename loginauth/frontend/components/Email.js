import React from 'react'
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6v9d5zh', 'template_qn54ae2', e.target, 'user_rT1lNKm2fKJ0HvQKTJL21')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
       <form onSubmit={sendEmail}>
<div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" name='name' className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name"/>
         
          </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="text" name='email'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="textarea">Password</label>
    <textarea name='message'></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
       </form>
    )
}

export default EmailForm
