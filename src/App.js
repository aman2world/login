import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
      <Route excat path="/" element={<Home/>}></Route>
      <Route excat path="/signin" element={<Signin/>}></Route>
      <Route excat path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
