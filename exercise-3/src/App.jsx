import UserCard from './UserCard'
import './App.css'

function App() {

  return (
    <div className="App">
      <UserCard name={"Mohamed"} email={"mohamed@gmail.com"}/>
      <UserCard name={"Ali"} email={"ali@gmail.com"}/>
      <UserCard name={"Halima"} email={"halima@gmail.com"}/>
    </div>
  )
}

export default App
