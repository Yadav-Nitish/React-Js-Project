import React from 'react'

const Rightbar = ({data}) => {
  return (
    <div className='right_container'>
        <div className="postImg">
            <img src={data.img} />
            <div className="inside_img">
                <div className="img">
                    <img src={ data.authorImg} />
                </div>
                <div className="text">
                    <h3> {data.authorName} </h3>
                    <p> {data.authortext} </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Rightbar