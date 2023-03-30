import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>

      <div className='grid grid-cols-2 ml-14'>
        <div>
          <Blogs></Blogs>
        </div>
      <div className=''>
        <h4>Spent time on read : 0 min</h4>
      </div>
      </div>
      
    </div>
  )
}

export default App
