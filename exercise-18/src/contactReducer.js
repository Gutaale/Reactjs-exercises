export const intialState = []

export const contactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload]
        case 'UPDATE_CONTACT':
            return state.map(contact => 
                contact.id === action.payload.id ? action.payload : contact
            )   
        case 'DELETE_CONTACT':
            return state.filter(contact => contact.id !== action.payload)
            case 'toGGLE_FAVORITE':
            return state.map(contact => 
                contact.id === action.payload ? { ...contact, favorite: !contact.favorite } : contact
            )
        default:
            return state
    }
}