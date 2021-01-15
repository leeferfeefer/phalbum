import React, {useState} from 'react';
import AxiosService from './service/Axios.service';
import Loader from "react-loader-spinner";
import Image from './model/Image';
import FileUploaderButton from './component/FileUploaderButton';

function App() {
  const [images, setImages] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isError, setIsError] = useState(false);


  const getImages = async (images) => {
    setIsLoaderVisible(true);
    const phalbumImages = Image.transform(images);
    const isSuccessful = await AxiosService.uploadImages(phalbumImages);
    setIsLoaderVisible(false);

    if (isSuccessful) {
      setImages(images);
    } else {
      setIsError(true);    
    }
  }

  const renderImages = () => {
    return images.map((image, index) => {
      return <img key={index} src={image.base64} className="image"/>
    });
  }

  const onFileUploadButtonPress = () => {
    setIsError(false); 
    setImages([]);
  };

  return (
    <div className="container">
      <h3 className="heading">Phalbum</h3>
      <div className="image-container">    
        <h4 className="subheader">Upload Image</h4>
        <div className="files">
          <FileUploaderButton 
            onDone={getImages}
            onPress={onFileUploadButtonPress}
          />
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
        {images.length > 0 &&
          <> 
            <div className="images">
              You uploaded:
            </div>
            {renderImages()}
          </>
        }
        {isError && 
          <div style={{color: 'red'}}> Error! Try again.</div>
        }
      </div>
    </div>
  );
}

export default App;
