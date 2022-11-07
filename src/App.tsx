import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CourseDetails from './components/Course/CourseDetails';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course/:id' element={<CourseDetails/>} />
          <Route path='*' element={<Home/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
