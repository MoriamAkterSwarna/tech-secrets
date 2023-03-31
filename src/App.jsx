import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import QnA from './components/QnA/QnA'
import SideBar from './components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [readTime, setReadTime] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] =useState(0);
  const [isBookMark, setIsBookMark] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
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
const handleBookmark =(blog)=>{
  setCount(count+1);
  // if(count >= 1){
  //   toast('🦄 Already Bookmarked!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     });
  // }
  // setIsBookMark(isBookMark);
  // setIsBookMark([])
    if(isBookMark){
      setIsBookMark([...isBookMark,blog]);
    }

  
}
 

  return (
    <div className="App">
      <Header></Header>

      <div className='grid grid-cols-3'>
        
          <div className='col-span-2'>
            <Blogs blogs={blogs} key={blogs.id} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blogs>
          </div>
          <div className='pl-20 ml-20'>
            
                <SideBar readTime={readTime} blogs={blogs} count={count} key={blogs.id} isBookMark={isBookMark}></SideBar>
                
           </div>
      
      </div>
      <ToastContainer></ToastContainer>
      <QnA></QnA>
    </div>
  )
}

export default App
