import {  Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Game from './elements/game/Game'


function App() {
  return ( 

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='game' element={<Game/>}/>
     </Routes>
  
  )
}
export default App
