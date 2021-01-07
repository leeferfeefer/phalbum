import React, {useState, useEffect} from 'react';
import FileBase64 from 'react-file-base64';
import AxiosService from './service/Axios.service';
import Loader from "react-loader-spinner";

function App() {
  const [images, setImages] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isError, setIsError] = useState(false);


  const getImages = async (images) => {
    setIsError(false);    

    setIsLoaderVisible(true);
    const isSuccessful = await AxiosService.uploadImages(images);
    setIsLoaderVisible(false);

    if (isSuccessful) {
      setImages(images);
      setIsError(false);    
    } else {
      setIsError(true);    
    }
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
        {isLoaderVisible && 
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}        
          />
        }
        {!isError ?
          <> 
            <div className="images">
              You uploaded:
            </div>
            {renderImages()}
          </>
          :
          <div style={{color: 'red'}}> Error! Try again.</div>
        }
      </div>
    </div>
  );
}

export default App;
