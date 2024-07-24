import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import { MatchDetails } from './pages/MatchDetails';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='match-details' element={<MatchDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
