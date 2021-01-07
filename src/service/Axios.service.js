import axios from "axios";

const instance = axios.create({
    timeout: 5000,
    baseURL: `http://${process.env.REACT_APP_HOST}:3001/api`
});


const uploadImages = async (images) => {
    try {
        await instance.post('upload', {
            images
        });
        return true;
    } catch(error) {
        console.log(`Error sending photos! ${error.message}`);
        return false;
    }
};

export default {
    uploadImages
}