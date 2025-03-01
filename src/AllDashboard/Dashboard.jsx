import React,{ useState} from 'react'
import '../styles.css/Dashboard.css'
import { BsPlus } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import Registration from '../componets/Registration'
import { Link } from 'react-router-dom';



function Dashboard () {
  const [model, setModel1] = useState(false);
  const [form, setForm] = useState(0);

  const handleRegister = () =>{
    setModel1(1);
  };
  const closeRegister = () =>{
    setModel1(0);
  };
  const handleForm = () =>{
    setForm(!form);
  };
  return (
    <div className='dashboard'>
     
      <div> <h3>Botiga </h3></div>
      
      <div className='task'>
        <a className='item' onClick={handleRegister}> <BsPlus  className='icon' />Logout </a>
        <CiMenuKebab className='iconn' />
      </div>
      
      {model === 1 && < Registration closeRegister={closeRegister}/>}
      
    </div>
  )
}

export default Dashboard