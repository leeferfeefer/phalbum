import axios from "axios";

const instance = axios.create({
    timeout: 5000,
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

export default {
    uploadImages
}