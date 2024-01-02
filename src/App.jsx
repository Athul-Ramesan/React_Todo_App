import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import './App.css'
import RowPost from './Components/RowPost/RowPost'
import { Documentaries, action,comedy,horror,orginals, romance } from './urls'
function App() {


  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url={orginals} title="Netflix Orginals" />
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={comedy} title="comedy" isSmall/>
    <RowPost url={horror} title="Horror" isSmall/>
    <RowPost url={romance} title="romance" isSmall/>
    <RowPost url={Documentaries} title="Documentaries" isSmall/>
    </>
  )
}

export default App
