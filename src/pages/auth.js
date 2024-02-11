import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import user1 from '../components/user1';
import user2 from '../components/user2';
import user3 from '../components/user3';
import user4 from '../components/user4';
import user5 from '../components/user5';
import user6 from '../components/user6';
import user7 from '../components/user7';
import user8 from '../components/user8';
const Auth = (props) => {
    const [id,setId] = useState()
    const [password,setPassword] = useState()
    const [validUser,setValidUser] = useState()
    console.log(props.users)
    const navigate = useNavigate()
    const handleClick =()=>{
        if(getIdIfExists()){
            props.setIndex(getIdIfExists())
            navigate('/dashboard')
        }
    }
    const getIdIfExists = () => {
        const user = props.users.find(user => user.uid === id && user.pin === password);
        return user ? user : null;
      };
    const handleIdChange = (e)=>{
        setId(e.target.value)
        console.log(id)
    }
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center px-5 py-9 rounded-lg gap-5 shadow-lg shadow-gray-500/50'>
            <div className='text-3xl'>
                Login
            </div>
        <div className='text-xl'>
            <label className='mx-3'>UID</label><input type='text' className='border ' onChange={handleIdChange}/>
        </div>
        <div className='text-xl'>
        <label className='mx-3'>Pin</label><input type='password' className='border ' onChange={handlePasswordChange}/>
        </div>
        <div >
            <button className='bg-blue-600 px-5 py-2 rounded-lg text-white' onClick={handleClick}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Auth
