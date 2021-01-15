import React from 'react';

const FileUploaderButton = (props) => {

    const handleChange = (event) => {
        const filesToUpload = event.target.files; 

        let files = [];
        for (const file of filesToUpload) {       
            const fileReader = new FileReader();    
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                const fileInfo = {
                    name: file.name,
                    type: file.type,              
                    file: file,
                    size: `${Math.round(file.size/1000)} kB`,
                    base64: fileReader.result,
                };
                files.push(fileInfo);  

                if (files.length === filesToUpload.length) {
                    props.onDone(files);              
                }  
            }                      
        }
    };
    
    const onPress = () => {
        props.onPress();
    };

    return (
        <input
            type="file"
            onChange={handleChange}
            onClick={onPress}
            multiple={true} 
        />
    );
}


export default FileUploaderButton;