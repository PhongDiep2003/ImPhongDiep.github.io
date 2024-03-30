import {useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import '../style/contactForm.css'
const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [senderMsg, setSenderMsg] = useState('')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gywaots', 'template_5w51tfu', form.current, 'x_hG8LedC7myhlidB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setFirstName('')
    setLastName('')
    setSenderEmail('')
    setSenderMsg('')
  };
  return (
  <form className="contact_form" onSubmit={sendEmail} ref={form}>
      <p className="contact_form_title">Welcome, Let's get in touch with me</p>
      <input type="text" placeholder="First Name" name="first_name" className="form_input" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      <input type="text" placeholder="Last Name" name="last_name" className="form_input" value={lastName} onChange={e => setLastName(e.target.value)}/>
      <input type="email" placeholder="Email" name="email" className="form_input" value={senderEmail} onChange={e => setSenderEmail(e.target.value)}/>
      <textarea type="text" placeholder="Type sth u wanna say..." name="message" className="form_input contact_form_textField" value={senderMsg} onChange={e => setSenderMsg(e.target.value)} />
      <button className="button_confirm" type='submit' >Send →</button>
  </form>
  )
}
export default ContactForm