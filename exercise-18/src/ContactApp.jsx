import React from 'react'
import { useState, useReducer } from 'react'
import { intialState, contactReducer } from './contactReducer'
import ContactForm from './ContactForm'
import ContactList from './ContactList'


const ContactApp = () => {
    const [state, dispatch]=useReducer(contactReducer, intialState)
    const [editContact, setEditContact]=useState(null)
  return (
    <div>
        <h1>Contact Management</h1>
        <ContactForm 
        dispatch={dispatch}
        editContact={editContact}
        setEditContact={setEditContact}
        />

        <ContactList
        
        contacts={state}
        dispatch={dispatch}
        setEditContact={setEditContact}
        />
    </div>
  )
}

export default ContactApp