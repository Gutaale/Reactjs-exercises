import React from 'react'

const ContactItem = ({ contact, dispatch, setEditContact }) => {
    const { id, name, email, phone, favorite } = contact;
  return (
    <li style={{ marginBottom: '10px' }}>
        <strong>{name}</strong> {favorite && '★'}
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <button onClick={() => dispatch({ type: 'toGGLE_FAVORITE', payload: id })}>
          {favorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <button onClick={() => setEditContact(contact)}>Edit</button>

        <button onClick={() => dispatch({ type: 'DELETE_CONTACT', payload: id })}>
          Delete
        </button>
      </li>
  )
}

export default ContactItem