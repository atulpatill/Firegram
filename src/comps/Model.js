import React from 'react'

function Model({selectedImg}) {
    
    return (
        <div className= "backdrop">
            <img src = {selectedImg} alt = "Enlarge" />
            
        </div>
    )
}

export default Model
