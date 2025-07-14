import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    subject:[],
    country:''
  })

const handleChange=(e)=>{
  const {name, value, type, checked}=e.target;
  setFormData((prev)=>({
    ...prev, [name] : type === 'checkbox'? [...formData.subject, value] : value
  }))
}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formData)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Your info please</h2>
      <input type="text" name='name' value={formData.name} placeholder='User Name' onChange={handleChange} /><br /><br />
      <input type="email" name='email' value={formData.email}  placeholder='Enter your Email' onChange={handleChange}/><br /><br />
      <input type="password" name='password' value={formData.password} placeholder='Enter your password' onChange={handleChange} /><br /><br />
      <h2>chose your fun Subjects</h2>      
      <label htmlFor="">JavaScript</label>
      <input type="checkbox" name='subject' value='JavaScript' onChange={handleChange} /><br />
      <label htmlFor="">PHP</label>
      <input type="checkbox" name='subject' value='PHP' onChange={handleChange} /><br />
      <label htmlFor="">Reactjs</label>
      <input type="checkbox" name='subject' value='Reactjs' onChange={handleChange} />
      <h2>Your country</h2>
      <select name="country"  value={formData.country} onChange={handleChange}>
        <option value="">Select Your country</option>
        <option value="Somalia">Somalia</option>
        <option value="Djibuti">Djibuti</option>
        <option value="USA">USA</option>
      </select><br />
      <button type='submit'>submit</button>
    </form>

    </>
  )
}

export default App
