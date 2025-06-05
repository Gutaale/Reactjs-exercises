import React from 'react'
import { initalState, reducer } from './FormReducer'

const MultiStepForm = () => {
    const [state, dispatch] = React.useReducer(reducer, initalState)
  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(
        { 
            type: 'UPDATE_FORM_DATA', 
            field: name, //field: e.target.name
            value //value: e.target.value
        })
  }
    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' })
    }
    const handlePrevious = () => {
        dispatch({ type: 'PREVIOUS_STEP' })
    }
    const resetForm = () => {
        dispatch({ type: 'RESET_FORM' })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        alert('Form submitted successfully!')
        resetForm()
    }
  return (
    <div>
        <h1>MultiStep Registration Form</h1>
        {
            state.step === 1 && (
                <div>
                    <h2>Step 1: Personal Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            First Name:
                            <input 
                                type="text" 
                                name="firstName" 
                                value={state.fistName} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input 
                                type="text" 
                                name="lastName" 
                                value={state.lastName} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handleNext}>Next</button>
                    </form>
                </div>
            )
        }
        {
            state.step === 2 && (
                <div>
                    <h2>Step 2: Account Information</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input 
                                type="email" 
                                name="email" 
                                value={state.email} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Phone:
                            <input 
                                type="text" 
                                name="phone" 
                                value={state.phone} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input 
                                type="password" 
                                name="password" 
                                value={state.password} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <label>
                            Confirm Password:
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                value={state.confirmPassword} 
                                onChange={handleChange} 
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>next</button>
                    </form>
                </div>
            )
        }
        {
            state.step === 3 && (
                <div>
                    <h2>Review Your Information</h2>
                    <p><strong>First Name:</strong> {state.firstName}</p>
                    <p><strong>Last Name:</strong> {state.lastName}</p>
                    <p><strong>Phone:</strong> {state.phone}</p>
                    <p><strong>Email:</strong> {state.email}</p>
                    <p><strong>Password:</strong> {state.password}</p>
                    <p><strong>Confirm Password:</strong> {state.confirmPassword}</p>
                    <button type="button" onClick={handlePrevious}>Previous</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            )
        }
        {
            state.step > 3 && (
                <div>
                    <h2>Form Submitted Successfully!</h2>
                    <button onClick={resetForm}>Reset Form</button>
                </div>
            )
        }
        
    </div>
  )
}

export default MultiStepForm