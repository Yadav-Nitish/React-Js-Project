import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const Navbar = ({setSearch}) => {

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <> 
    <div className='nav mt-4'>
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("nature")
      navigate("/")
      }}>Nature</div>
  
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Travel")
      navigate("/")
      }}>Travel</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Car")
      navigate("/")}
    }>car</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Fashion")
      navigate("/")}
    }>Fashion</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Animals")
      navigate("/")}
    }>Animals</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Technology")
      navigate("/")}
    }>Technology</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Business")
      navigate("/")}
    }>Business & Finance</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Tokyo")
      navigate("/")}
    }>Tokyo</div>
   
     <div className="button btn btn-outline-primary" onClick={()=>{
      setSearch("Dubai")
      navigate("/")}
    }>Dubai</div>
    
     {location.pathname == "/"?(
       <div className="button btn btn-outline-primary" 
       onClick={()=>navigate("/saved")} >
        Saved
        </div>
     ): (
      <div className="button btn btn-outline-primary"
       onClick={()=>navigate("")} >
        Home
        </div>

     ) }
    
    </div>
    <div className="container my-4" style={{
        width:'780px'
    }}>
      <div className="mb-3">
        <input type="email" 
        className="form-control bg-dark text-light" 
        id="exampleInputEmail1"
         aria-describedby='emailHelp'
         onChange={(e)=>setSearch(e.target.value)}
         />       
     </div>
    </div>
    </>
  )
}

export default Navbar