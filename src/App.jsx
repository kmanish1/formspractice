import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: "",
    url: "",
    about: ""
  })
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(values)
  // }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(values)
  }
  const handleReset = (e) => {
    e.preventDefault()
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: "",
      url: "",
      about: ""
    })
  }
  return (
    <>
      <h1 className='text-3xl font-bold underline bg-red-500'>Form in React</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="name" name="firstName" onChange={(e) => handleChange(e)} value={values.firstName} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="name" name="lastName" onChange={(e) => handleChange(e)} value={values.lastName} />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input type="text" id="name" name="email" onChange={(e) => handleChange(e)} value={values.email} />
        </div>
        <div>
          <label htmlFor="name">contact</label>
          <input type="number" name="contact" onChange={(e) => handleChange(e)} value={values.contact}></input>
        </div>
        <div>
          <label htmlFor="name">Gender</label>
          <select name="gender" id="gender" onChange={(e) => handleChange(e)} value={values.gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Your best subject</label>
          <select name="subject" id="subject" onChange={(e) => handleChange(e)} value={values.subject}>
            <option value="maths">Maths</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            <option value="biology">Biology</option>
            <option value="chemistry">Chemistry</option>
            <option value="physics">Physics</option>
          </select>
        </div>
        <div>
          <label>Upload your resume</label>
          <input type="file" name="resume" id="resume" onChange={(e) => handleChange(e)} value={values.resume} />
        </div>
        <div>
          <label>Enter URL</label>
          <input type="url" name="url" id="url" onChange={(e) => handleChange(e)} value={values.url} />
        </div>
        <div>
          <label>About</label>
          <textarea name="about" id="about" cols="30" rows="10" onChange={(e) => handleChange(e)} value={values.about}></textarea>
        </div>
        <button type='reset'>Reset</button>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
