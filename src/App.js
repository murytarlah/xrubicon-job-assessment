import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss';
import Login from './pages/Login'
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
