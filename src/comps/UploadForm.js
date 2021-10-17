import React, { useState } from "react";

const UploadFrom = () => {
    const [file , setFile] = useState(null);
    const [error, setError] = useState(null);

    const changeHandler =(e)=>{

 const types = ['image/png', 'image/jpeg']


   let selected = e.target.files[0];
  
  
   if(selected && types.includes(selected.type)){
       setFile(selected)
       setError(' ')
   }else{
       setFile(null)
       setError("Plz select an Image file(png or jpeg)");

   }
    }

    return (
        <form>
            <input type="file" onChange ={changeHandler}/>
            <div className = "output">
                {error && <div className = "error">{error}</div>}
                {file && <div className = "file">{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadFrom;