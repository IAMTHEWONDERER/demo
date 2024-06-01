import './App.css'
import Contactus from './pages/Contactus'
import Homepage from './pages/Homepage'
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App