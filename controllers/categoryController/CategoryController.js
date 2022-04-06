const catchAsync = require('../../utils/catchAsync')
const CategoryModel = require('../../models/CategoryModel/categoryModel')

exports.createCategory = catchAsync(async (req, res, next) => {
    const category = await CategoryModel.create(req.body);
    res.status(200).json({
        status: 'success',
        category
    })
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