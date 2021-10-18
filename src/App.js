import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Model from './comps/Model';
import Title from './comps/Title';
import UploadFrom from './comps/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadFrom/>
      <ImageGrid setSelectedImg= {setSelectedImg} />
      <Model selectedImg ={selectedImg}/>
    </div>
  );
}

export default App;
