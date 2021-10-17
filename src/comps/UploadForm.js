import React, { useState } from "react";

const UploadFrom = () => {

    const changeHandler =(e)=>{
 const [file , setFile] = useState(null);
 const [error, setError] = useState(null);
 const types = ['image/png', 'image/jpeg']


   let selected = e.target.files[0];
  
   if(selected && types.includes(selected.type)){
       setFile(selected)
   }else{
       setFile(null)
       setError("Plz select an Image file(png or jpeg");

   }
    }

    return (
        <form>
            <input type="file" onChange ={changeHandler}/>
        </form>
    )
}

export default UploadFrom;