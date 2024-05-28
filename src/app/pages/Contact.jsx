import '../../utils/style/contact.css'
import { Start } from '../../common/components/Start'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Footer from '../../common/components/Footer'

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const SERVICE_ID = 'service_u06gbuc'
  const TEMPLATE_ID = 'template_2hha8yl'
  const PUBLIC_KEY = 'CKM1H5wN5avwAAqh6'

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateName = (lastName) => {
    return /^[a-zA-Z][a-zA-Z\s'-]{1,}$/.test(lastName)
  }

  const validateMessage = (message) => {
    return message.length >= 30
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
      return
    }

    if (!validateName(lastName)) {
      setErrorMessage('Last name too short or not starting with a letter')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
      return
    }

    if (!validateName(firstName)) {
      setErrorMessage('First name too short or not starting with a letter')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
      return
    }

    if (!validateMessage(message)) {
      setErrorMessage('Your message must contain at least 30 characters')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
      return
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text)
        alert('Message Sent Successfully')
      },
      (error) => {
        console.log('FAILED...', error.text)
      }
    )
    e.target.reset()
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
  }

  return (
    <main>
      <Start
        title="CONTACT ME"
        description="Let's Collaborate and Build Something Amazing"
      />

      <section className="form__contactMe" id="contact">
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="required">
              <label htmlFor="lastName">Last Name</label>
              <FontAwesomeIcon icon={faAsterisk} className="icon asterisk" />
            </div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="required">
              <label htmlFor="firstName">First Name</label>
              <FontAwesomeIcon icon={faAsterisk} className="icon asterisk" />
            </div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={handleCompanyChange}
            />
          </div>
          <div className="form-row">
            <div className="required">
              <label htmlFor="email">Email</label>
              <FontAwesomeIcon icon={faAsterisk} className="icon asterisk" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="required">
              <label htmlFor="message">Message</label>
              <FontAwesomeIcon icon={faAsterisk} className="icon asterisk" />
            </div>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
          <div className="form-row">
            {errorMessage && (
              <div className="error-message">
                <span>{errorMessage}</span>
              </div>
            )}
            <input type="submit" value="Send" required />
          </div>
        </form>
      </section>
      <Footer
        a1={'Home'}
        href1={'#home'}
        a2={'Form'}
        href2={'#contact'}
        a4={'Projects'}
        href4={'/'}
      />
    </main>
  )
}
