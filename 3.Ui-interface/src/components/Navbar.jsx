import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BsToggle2Off } from 'react-icons/bs';
import { BsToggle2On } from 'react-icons/bs';

const Navbar = ({ bgColor, color, toggleButton,toggle }) => {
  return (
    <>
      <div className="nav_bar"  >
        <div className="logo"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`
          }}
        >Wdm
          <div onClick={toggleButton}>
            {toggle?(

            <BsToggle2On /> 
            ):(
               <BsToggle2Off /> 
            )}
            {" "}
          </div>
        </div>

        <div className="search" style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`
        }}>
          <div className="left"><FaSearch /> Search here ....</div>
          <div className='right'><FaFilter /> Filters </div>
        </div>
        <div className="seller" style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`
        }}>Become a Seller</div>
      </div>

      <div></div>
    </>


  )
}

export default Navbar