import cloudinary from 'cloudinary';

export const cdconnect=()=>{
    try {
    cloudinary.v2.config({
        cloud_name:process.env.CLOUD_NAME ,
        api_key:process.env.CLOUD_API_KEY ,
        api_secret:process.env.CLOUD_API_KEY_SCARTE 
    })
    console.log('Connected to Cloudinary successfully!');
}catch (error) {
    console.error('Error connecting to Cloudinary:', error);
}
}