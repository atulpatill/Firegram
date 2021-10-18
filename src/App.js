import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadFrom from './comps/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFrom/>
      <ImageGrid/>
    </div>
  );
}

export default App;
