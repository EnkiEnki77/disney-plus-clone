import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path = '/' element = {<Login/>}></Route>
        <Route path = 'home' element = {<Home/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
