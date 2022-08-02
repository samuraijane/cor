import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
      <form action="/action_page.php">
        <label>Tell us about yourself
        <textarea type="text" className="about" name="about" required />
        </label>

        <label>First Name
        <input type="text" id="fname" name="firstname" placeholder="" required />
        </label>

        <label>Last Name
        <input type="text" id="lname" name="lastname" placeholder="" required />
        </label>

        <label>E-mail Address
        <input type="text" id="email" name="email" placeholder="" required />
        </label>

        <label>Do you consider yourself to be a practicing professional (a software engineer or a cyber analyst)?
        <input type="text" id="practicing-professional" name="" required />
        </label>

        <label>Do you wish to mentor a coder or cyber student?
        <input type="text" id="wish" name="" required />
        </label>

        <label>Do you wish to mentor a male/female student?
        <input type="text" id="gender" name="" required />
        </label>

        <label>Do you consider yourself to be a member of management or leadership?
        <input type="text" id="management-leadership" name="" required />
        </label>

        <label>Do you consider yourself to be a counselor or life coach?
        <input type="text" id="counselor-lifecoach" name="" required />
        </label>

        <label>Is mentoring someone of your same gender important to you?
        <input type="text" id="same-gender" name="" required />
        </label>

        <input type="submit" value="Submit" required />
      </form>
    </>
  )
}

export default Form