const multer = require('multer')
const {resolve} = require('path')
const {v1} = require('uuid')

const postsStoragePath = resolve(__dirname , '../../public/posts/uploads/')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , postsStoragePath)
    },
    filename:function(req,file,cb){
        cb(null , v1() +"_" + file.originalname)
    }
})

const fileFilter = (req , file ,cb) => {
        //accept file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null , true)
    }else{
        //reject a file
        cb(null , false)
    }
}

//set storage engine for form-data format
const upload = multer({storage ,
     limits:{
        fileSize:1024*1024 * 10 } ,
    fileFilter})

module.exports = upload