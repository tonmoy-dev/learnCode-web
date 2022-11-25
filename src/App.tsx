import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CodePlayground from './pages/CodePlayground';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/code-playground' element={<CodePlayground/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
