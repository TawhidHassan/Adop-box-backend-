const catchAsync = require('../../utils/catchAsync')
const CategoryModel = require('../../models/CategoryModel/categoryModel')
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
//cloudnary
cloudinary.config({ 
    cloud_name: 'sifat-it', 
    api_key: '152464894557898', 
    api_secret: 'f4bN19XFCndeyzFqvUsR-DlBSzY' 
  });
exports.createCategory = catchAsync(async (req, res, next) => {
    // var category;
    const file=req.files.photo;
    console.log(file)
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        // console.log("Error"+err)
        console.log(result.url)
        const category =  CategoryModel.create({
            name:req.body.name,
            photo:result.url
        });
        res.status(200).json({
            status: 'success',
            category
        })
        
    });
   
})


exports.getallCategory = catchAsync(async (req, res, next) => {
    const category = await CategoryModel.find()
    res.status(200).json({
        status: 'success',
        category
    })
})



exports.getsingleCategory = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlecategory = await CategoryModel.findOne({_id:id})
    if(!singlecategory){
        res.status(200).json({
            status: 'success',
            message: 'category not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlecategory
    })
})

exports.updateCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglecategory = await CategoryModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglecategory) {
        res.status(200).json({
            status: 'success',
            message: 'category not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglecategory
    })
})

exports.deleteCategory = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglecategory = await CategoryModel.deleteOne({ _id: id })
    if (!deletesinglecategory) {
        res.status(200).json({
            status: 'success',
            message: 'category not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'category Deleted'
    })
})