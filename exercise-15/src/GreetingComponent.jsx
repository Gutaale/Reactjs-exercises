import React, {useContext } from 'react'
import LanguageContext from './LanguageContext';
const GreetingComponent = () => {
    const language = useContext(LanguageContext);
    const message = language === 'en' ? 'Hello' : 'Hola!';
  return (
    <div>
        <h1>{message}</h1>
    </div>
  )
}

export default GreetingComponent