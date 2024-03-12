import multer from "multer"

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)  //better if done with anther method
    }
  })
  
export const upload = multer({ storage, })