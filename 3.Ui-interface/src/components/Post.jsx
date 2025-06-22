import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoHeartSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
const Post = ({data}) => {



  return (
    <div>
        <div className="post_container">
            <div className="person">
                <div className="author">
                    <div className="img">
                        <img src={data.pImg} alt="" />
                    </div>
                    <div className="text">
                    <h3> {data.userName} </h3>
                    <p>  {data.title} </p>
                    </div>
                </div>
                <div className="dot"><BsThreeDotsVertical /></div>
            </div>
            <p>{data.description}</p>
            <div className="post_img">
                <img src={data.mImg} alt="" />
            </div>
            <div className="like_comment">
                <div className="likes"><IoHeartSharp className="items" /> {data.like}{" "}k </div>
                <div className="comments"><FaComments className="items"/> {data.comment}{" "}k </div>
                <div className="share"><FaShare className="items"/> {data.share}{" "}k  </div>
            
            </div>
        </div>
    </div>
  )
}

export default Post