import React from 'react'
import Loader from './Loader'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Home = ({images, loader, setSaved,saved}) => {

  const saveImage = (img) => {
  let flag = true;
    
    if(saved !=null && saved.length > 0){
      for(let i=0; i<saved.length;i++){
        if(saved[i].id === img.id){
          flag = false;
          toast.info('🦄 Image Already Exist', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          break;
        }
      }
    }
    if(flag) {
      setSaved([...saved,img])
      // console.log("img saved");
      toast.success('🦄 Image Saved!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
  }    
  return (
   <>
    <ToastContainer/>

     <div className="container-fluid text-center">
        
         {loader?(
          <Loader/>
         ):(
          <>
            <div className="flex">
             {images.map((image) => 
              <div key={image.id} className='items' onClick={()=>saveImage(image)}>
               <img src={image.src.medium} alt={image.photographer} />
              </div>    
              )}
             </div>
          </>
         )}

         
            {images.length != 0 &&  <a href="#top" className='btn btn-warning my-5 '>Back to Top</a> }
     </div>

   </>
    
  
  )
}

export default Home