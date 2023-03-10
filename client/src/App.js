import './App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/user';
import NavBar from './NavBar'
import Home from './Home';
// import Login from './Login'
// import Signup from './Signup'


function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path = "/" element={<Home/>} />
          {/* <Route exact path = "/signup" element={<Signup/>} />
          <Route exact path = "/login" element={<Login/>} /> */}
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
