import './App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/user';
import NavBar from './NavBar'
import Home from './Home';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path = "/" element={<Home/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
