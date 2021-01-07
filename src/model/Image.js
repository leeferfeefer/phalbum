

const transform = (fileBase64ObjectArray) => {
    const phalbumImages = [];
    for (const fileBase64Object of fileBase64ObjectArray) {
        phalbumImages.push({
            name: fileBase64Object.name,
            imageBase64: fileBase64Object.base64,
            size: fileBase64Object?.file.size,
            type: fileBase64Object.type,        
            dateMillis: fileBase64Object?.file.lastModified
        });
    }
    return phalbumImages;
};

export default {
    transform
}