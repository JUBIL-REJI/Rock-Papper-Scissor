import {  Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Game from './elements/game/Game'
import NotFound from './NotFound'


function App() {
  return ( 

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
  
  )
}
export default App
