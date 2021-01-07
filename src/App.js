import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';

function App() {
  const [images, setImages] = useState([]);

  const getImages = (images) => {
    setImages(images);

    // send to API here
  }

  const renderImages = () => {
    return images.map((image, index) => {
      return <img src={image.base64} alt={`image-${index}`} className="image"/>
    });
  }

  return (
    <div className="container">
      <h3 className="heading">Phalbum</h3>
      <div className="image-container">    
        <h4 className="subheader">Upload Image</h4>
        <div className="files">
          <FileBase64 type="file" multiple={true} onDone={getImages} />
        </div>
        <br/>
        <div className="images">
          You uploaded:
        </div>
        {renderImages()}
      </div>
    </div>
  );
}

export default App;
