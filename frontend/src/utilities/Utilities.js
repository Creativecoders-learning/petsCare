
import axios from "axios"

export const imageUpload = async(image)=>{
    
    // create form instance
    const formData = new FormData()
    // append image in form data
    formData.append('image',image)
     const {data} = await  axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,formData)
     console.log(data?.data?.display_url)
     return data
}

export const uploadMultipleImages =async images=>{
    const uploadedUrls = [];

    for(let image of images){
        const formData = new FormData();
        formData.append('image',image)

        try {
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,
                formData
            );
            const imageUrl = data?.data?.display_url;
            uploadedUrls.push(imageUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }
}