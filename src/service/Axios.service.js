import axios from "axios";

const instance = axios.create({
    timeout: 30000,
    baseURL: `http://${process.env.REACT_APP_HOST}:3000/api`
});


const uploadImages = async (images) => {
    for (const image of images) {
        try {
            await instance.post('upload', {
                images: [image]
            });
        } catch(error) {
            console.log(`Error sending photos! ${error.message}`);
            return false;
        }
    }
    return true;
};

const processImages = async () => {
    try {
        await instance.post('process');
    } catch(error) {
        console.log(`Error processing photos! ${error.message}`);
    }
};

export default {
    uploadImages,
    processImages
}