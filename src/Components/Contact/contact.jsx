import { useEffect, useRef } from 'react';
import { useState } from 'react'
import s from './contact.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export default function Contact(){

   

    const [data, setData] = useState({
        name: '',
        message: ''
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const handleSucces = (e) => {
  
      emailjs.sendForm('service_4sqpzgh', 'template_botbsug', form.current, '8tKfYuQqI5qwsCuNg')
        .then((result) => {
           if(result.status === 200){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Message sent successfully',
              html:
                    'I will write you back, <b>thanks</b>',
              showConfirmButton: false,
              timer: 1500
            })
           }
           setData({
            name: '',
            message: ''
        })
        }, (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Please try again</a>'
            })
        });
        setData({
          name: '',
          message: ''
      })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmitting(true);
      };

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
          handleSucces()
        }
      }, [formErrors, isSubmitting]);

     
    return(
        <div id='contact' className={s.main}>
          <h1 className={s.mainTitle}>Contact Me</h1>
                <form ref={form} onSubmit={handleSubmit} className={s.form}>
                    <div className={s.container}>
                        <h3 className={s.title}>Name</h3>
                        <input name='name' value={data.name} onChange={handleChange} placeholder='Name' className={s.input} />
                    {formErrors.name &&  <Alert  className={s.error} severity="error">{formErrors.name}</Alert>}
                    </div>
                    <div className={s.container}>
                        <h3 className={s.title}>Message</h3>
                        <input type={'text'} name='message' value={data.message} onChange={handleChange} placeholder='Message' className={s.message} />
                    {formErrors.message &&  <Alert className={s.error} severity="error">{formErrors.message}</Alert>}
                    </div>
                    <button type='submit' className={s.btn}>Send Message <AiOutlineSend className={s.sendIcon}/></button>
            </form>
        </div>
    )
}




const validate = (values) => {
    let errors = {};
   
    if (!values.name) {
      errors.name = "Name can`t be empty!";
    } 

    if (!values.message) {
      errors.message= "Message can`t be empty!";
    } 
    return errors;
  };
