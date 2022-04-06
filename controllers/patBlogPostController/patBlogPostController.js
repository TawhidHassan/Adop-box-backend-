const catchAsync = require('../../utils/catchAsync')
const PatBlogPost = require('../../models/PatBlogPostModel/patBlogPostModel')

exports.createPatBlogPost = catchAsync(async (req, res, next) => {
    const patBlogPost = await PatBlogPost.create(req.body);
    res.status(200).json({
        status: 'success',
        patBlogPost
    })
})

exports.getallPatBlogPost = catchAsync(async (req, res, next) => {
    const patBlogPost = await PatBlogPost.find()
    res.status(200).json({
        status: 'success',
        patBlogPost
    })
})



exports.getsinglePatBlogPost = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singlePatBlogPost = await PatBlogPost.findOne({_id:id})
    if(!singlePatBlogPost){
        res.status(200).json({
            status: 'success',
            message: 'PatBlogPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singlePatBlogPost
    })
})

exports.updatePatBlogPost = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesinglePatBlogPost = await PatBlogPost.updateOne({ _id: id },req.body , {new: true})
    if (!updatesinglePatBlogPost) {
        res.status(200).json({
            status: 'success',
            message: 'PatBlogPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesinglePatBlogPost
    })
})

exports.deletePatBlogPost = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesinglePatBlogPost = await PatBlogPost.deleteOne({ _id: id })
    if (!deletesinglePatBlogPost) {
        res.status(200).json({
            status: 'success',
            message: 'PatBlogPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'PatBlogPost Deleted'
    })
})