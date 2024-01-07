import './App.css';
import { BrowserRouter, Routes, Route,redirect,useNavigate } from "react-router-dom";
import Auth from './pages/auth';
import Dashboard from './pages/Dashboard';
import { useEffect,useState } from 'react';
import user1 from './components/user1';
import user2 from './components/user2';
import user3 from './components/user3';
import user4 from './components/user4';
import user5 from './components/user5';
import user6 from './components/user6';
import user7 from './components/user7';
import user8 from './components/user8';
function App() {
  const navigate = useNavigate();
 useEffect(()=>{
  navigate('/auth')
 },[])
 const [index,setIndex] = useState()
 const [auth,setAuth] = useState()
 const users = [
  {
    id : 1,
  uid : 'user1',
  pin : 'user1',
  userData : user1
  },
  {
    id : 2,
    uid : 'user2',
    pin : 'user2',
    userData : user2

  },
  {
    id : 3,
    uid : 'user3',
    pin : 'user3',
    userData : user3
  },
  {
    id : 4,
    uid : 'user4',
    pin : 'user4',
    userData : user4
  },
  {
    id : 5,
    uid : 'user5',
    pin : 'user5',
    userData : user5
  },
  {
    id : 6,
    uid : 'user6',
    pin : 'user6',
    userData : user6
  },
  {
    id : 7,
    uid : 'user7',
    pin : 'user7',
    userData : user7
  },
  {
    id : 8,
    uid : 'user8',
    pin : 'user8',
    userData : user8
    },

];
  return (
      <Routes>
      <Route path="/">
          <Route path="auth" element={<Auth auth={auth} setAuth={setAuth} users={users} setIndex={setIndex}/>} />
          <Route path="dashboard" element={<Dashboard auth = {auth} index={index}/>} />
        </Route>
      </Routes>
  );
}

export default App;
