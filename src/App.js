import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ChatBox from './Pages/ChatBox';
import Login from './Pages/Login';
import Header from './Pages/Header';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='chatGroup' element={<ChatBox></ChatBox>}>Chat Group</Route>
        <Route path='login' element={<Login></Login>}>Login</Route>
      </Routes>
    </div>
  );
}

export default App;
