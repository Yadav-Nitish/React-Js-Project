import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
const Sidebar = () => {
  return (
    <div>
      <div className='side_bar_content'>
       <div className="top_content">
        <div className="items"><FaHome className='icons'/> Home</div>
        <div className="items"><IoIosNotifications className='icons'/> Notification</div>
        <div className="items"><FaShoppingBag className='icons' /> shop</div>
        <div className="items"><FaRocketchat className='icons'/> Conversation</div>
        <div className="items"><FaWallet className='icons'/> Wallet</div>
        <div className="items"><MdSubscriptions className='icons'/> Subscription</div>
        <div className='items'><FaUser className='icons'/> My Profile</div>
       </div>
       <div className="bottom_content items"><CiLogout /> Log Out</div>
      </div>
    </div>
  )
}

export default Sidebar