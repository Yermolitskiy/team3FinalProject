const multer = require('multer')
const {v1 : uuidv1} = require('uuid')
const {resolve} = require('path')

const storage = multer.diskStorage({
    destination:(req , file ,cb) => cb( null , resolve(__dirname , '../public/uploads/posts')),

    filename:(req , file , cb) => cb(null , uuidv1() + "_" + file.originalname)
})

//@param1 accepts error to throw @param2 accepts boolean , that on false rejects file saving without throwing an error , on true it saves in dir
//cb(@param1 , @param2)
const fileFilter = (req , file , cb) => file.mimeType === 'image/jpeg' || file.mimeType === 'image/jpeg' ? cb(null,true) : cb(null,false)
//maximum 10mb
const fileSize = 1024 * 1024 * 10 

module.exports = multer({storage  , limits:{fileSize}} , fileFilter)