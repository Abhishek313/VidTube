import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async(localFIlePath) => {
    try {
        if(!localFIlePath) {
            return null;
        } 
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFIlePath,{
            resource_type: "auto"
        })

        //file has been uploaded successfully

        console.log("file is uploaded successfully",response.url);

        return response

    } catch (error) {
        
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });