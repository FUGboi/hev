import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pocetna from './Components/pocetna';
import Modeli from './Components/modeli';
import Kontakt from './Components/kontakt';
import Sucelje from './Components/sucelje';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Pocetna />}/>
          <Route path='modeli' element={<Modeli />}/>
          <Route path='kontakt' element={<Kontakt />}/>
          <Route path='sucelje' element={<Sucelje />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
