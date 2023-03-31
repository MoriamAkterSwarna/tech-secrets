import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import QnA from './components/QnA/QnA'
import SideBar from './components/SideBar/SideBar'


function App() {
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time) => {
    
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'))
    
    if(previousReadTime){
        const newReadTime = JSON.parse(previousReadTime) + parseInt(time);
        localStorage.setItem("readTime",newReadTime);
        setReadTime(newReadTime);
    }
    else{
      localStorage.setItem("readTime",time);
      setReadTime(time);
    }
  };

  return (
    <div className="App">
      <Header></Header>

      <div className='grid grid-cols-4'>
        
          <div className='col-span-3'>
            <Blogs handleReadTime={handleReadTime}></Blogs>
          </div>
          <div className='text-center'>
                <SideBar readTime={readTime}></SideBar>
           </div>
      
      </div>
      
      <QnA></QnA>
    </div>
  )
}

export default App
