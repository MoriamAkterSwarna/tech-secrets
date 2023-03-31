import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import QnA from './components/QnA/QnA'
import SideBar from './components/SideBar/SideBar'
import { addToBookmark, getBookmark } from './utilities/fakedb'


function App() {
  const [readTime, setReadTime] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    

  const handleReadTime = (time) => {
    // console.log(parseInt(time));
    
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
    const getBookmark = bookMark.find(bk => bk.id === blog.id);
  
    if(getBookmark){
      console.log("already bookmarked");
    }
    const newBookmarked = [...bookMark , blog];
    setBookMark(newBookmarked);
    addToBookmark(blog.title);
    // console.log(blog.title)
  }
  useEffect(() =>{
    const getBookmarks = getBookmark();
   let storeBookmarked = [];
   for(const title in getBookmarks){
    // console.log(blogs)
    const bookmarked = blogs.find(blog => blog.title === title);
    // console.log(bookmarked);
  {
    if(bookmarked){
        storeBookmarked.push(bookmarked);
    }
   }
   }
   setBookMark(storeBookmarked)
 },[blogs])

  return (
    <div className="App">
      <Header></Header>

      <div className='grid grid-cols-3'>
        
          <div className='col-span-2'>
            <Blogs blogs={blogs} handleBookmark={handleBookmark} handleReadTime={handleReadTime} ></Blogs>
          </div>
          <div className='pl-20 ml-20'>
            
                <SideBar readTime={readTime} blogs={blogs} key={blogs.id} bookMark={bookMark}></SideBar>
                
           </div>
      
      </div>
      
      <QnA></QnA>
    </div>
  )
}

export default App
