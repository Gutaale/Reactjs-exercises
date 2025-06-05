export const initalState = {
  step: 1,
    firstName: '',
    lastName: '',
    email: '',
    Phone: '',
    password: '',
    confirmPassword: ''
}   
export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1 }
    case 'PREVIOUS_STEP':
      return { ...state, step: state.step - 1 }
    case 'UPDATE_FORM_DATA':
      return { ...state, 
        [action.field]: action.value
       }
    case 'RESET_FORM':
      return initalState
    default:
      return state
  }
}