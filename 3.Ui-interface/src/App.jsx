import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import {data} from './Data'
import { data2 } from './Data'
const App = () => {
   
  const [bgColor, setbgColor] = useState("#232D3f");
  const [color,setcolor] = useState("white")
  const [toggle,setToggle] = useState(true)
  
  const toggleButton = () =>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("rgb(255,255,255");
      setcolor("black")
      document.querySelector("body").style.backgroundColor = '#cbc5c5'
    }else{
      setbgColor("#232D3f");
      setcolor("white");
      document.querySelector("body").style.backgroundColor = 'black'

    }
  }

  return (
    <div>
 
      <Navbar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle} />
      <div className="container">
      <div className="side_bar">
        <Sidebar bgColor={bgColor} color={color} toggleButton={toggleButton}/>
      </div>
     
       <div className="post_section">
        {
          data.map((d) => (
          <Post key={d.id} data={d} bgColor={bgColor} color={color} toggleButton={toggleButton} />
          ))
         }
      </div>

      <div className="right_bar">
        {
          data2.map((m)=>(
            <Rightbar key={m.id} data={m}  bgColor={bgColor} color={color} toggleButton={toggleButton}/>
          ))
        }
      </div>

      </div>

    </div>
  )
}

export default App