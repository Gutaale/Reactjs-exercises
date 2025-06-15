import { useState } from 'react'
import './App.css'
import LanguageContext from './LanguageContext'
import GreetingComponent from './GreetingComponent'

function App() {

  const [language, setLanguage] = useState('en')
  const switchLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  }
  return (
   <LanguageContext.Provider  value={language}>
    <button onClick={switchLanguage}>switch to {language==='en'? "Spanish": "English"}</button>
    <div className="App">
      <h1>Language Switcher</h1>
      {/* The GreetingComponent will use the LanguageContext to display the greeting */}
      <GreetingComponent />
    </div>
    </LanguageContext.Provider>
  )
}

export default App
