import { useState } from 'react'
import './App.css'
import SideMenu from './components/sideMenu/SideMenu'
import { Selection_A } from './components/Selection/Selection_A'
import Selection_B from './components/Selection/Selection_B'
import {FaAddressBook} from 'react-icon/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App_container">
        
          <SideMenu />
        
        <div className="main_container">
          <Selection_B />
          
        </div>
      </div>
    </>
  )
}

export default App
