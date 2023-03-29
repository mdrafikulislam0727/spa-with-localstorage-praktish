import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { useState } from 'react';


function App() {
  const [watchTime, setWatchTime] =useState("")
  
  const handelWatchTime=(time)=>{
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"))
    if(previousWatchTime){
      const sum =previousWatchTime + time;
      localStorage.setItem("watchTime", sum)
      setWatchTime(sum)
    }
    else{
      localStorage.setItem("watchTime", time)
      setWatchTime(time)
    }
  }

  return (
    <div className=''>
      <div className='main row w-100'>
        <div className='home-container col-md-8 card'>
        <Home handelWatchTime={handelWatchTime}></Home>
        </div>
        <div className='sideCart col-md-4 card'>
          <SideCart watchTime={watchTime}></SideCart>
        </div>
      </div>
    </div>
  )
}

export default App
