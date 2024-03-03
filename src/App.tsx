import { useRoutes } from 'react-router'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import { Routes } from './router'

function App() {
  const routes = useRoutes(Routes)
  return (
    <>
      <div className="App_container">
        <SideBar />
        {routes}
      </div>
    </>
  )
}

export default App