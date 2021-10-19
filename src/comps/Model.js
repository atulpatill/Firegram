import React from 'react'

function Model({selectedImg,  setSelectedImg}) {

    const handleClick = (e) =>{
      setSelectedImg(null);
    }
    
    return (
        <div className= "backdrop" onClick= {handleClick}>
            <img src = {selectedImg} alt = "Enlarge" />
            
        </div>
    )
}

export default Model
