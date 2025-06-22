
import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios';
import Home from './components/Home';
import Saved from './components/Saved';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState("nature")
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([])

  // APi
  const API_KEY = "JA84fyeyo3GvTmCln5fpHUX3ENCPe8n1zM7DiImgDUkIC0Xg0GOiKUof"
  const getImageData = async () => {
    try {

      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          }
        }
      )

      setImages(res.data.photos);
      setLoader(false)

    } catch (error) {
      console.log(error.message)

    }
  }
  useEffect(() => {
    getImageData();
    
    const data = JSON.parse(localStorage.getItem("Images"))
    if(data){
      setSaved(data)
    }
  }, [search]);
 
  useEffect(()=>{
    if(saved.length !=0){
      const json = JSON.stringify(saved)
      localStorage.setItem("Images",json)
    }
  },[saved])


  console.log("img saved",saved)

  return (

    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved} />} />
          <Route path="/saved" element={<Saved  saved={saved} loader={loader}  />}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
