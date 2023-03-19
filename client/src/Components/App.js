import '../App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context/user';
import NavBar from './NavBar'
import Home from './Home';
import Login from './Login'
import Signup from './Signup'
import UserClimbs from './UserClimbs'
import ClimbSubmissionForm from './ClimbSubmissionForm';
import AllClimbs from './AllClimbs';
import Climb from './Climb';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path = "/home" element={<Home/>} />
          <Route exact path = "/signup" element={<Signup/>} />
          <Route exact path = "/login" element={<Login/>} />
          <Route exact path = "/myclimbs" element={<UserClimbs/>} />
          <Route exact path = "/submitclimb" element={<ClimbSubmissionForm/>} />
          <Route exact path = "/allclimbs" element={<AllClimbs />} />
          <Route exact path = "/climb/:id" element={<Climb />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
