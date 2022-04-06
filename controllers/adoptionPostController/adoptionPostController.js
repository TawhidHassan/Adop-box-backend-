const catchAsync = require('../../utils/catchAsync')
const AdoptionPostModel = require('../../models/AdoptionPostModel/adoptionPostModel')

exports.createAdoptionPost = catchAsync(async (req, res, next) => {
    const AdoptionPost = await AdoptionPostModel.create(req.body);
    res.status(200).json({
        status: 'success',
        AdoptionPost
    })
})

exports.getallAdoptionPost = catchAsync(async (req, res, next) => {
    const AdoptionPost = await AdoptionPostModel.find()
    res.status(200).json({
        status: 'success',
        AdoptionPost
    })
})



exports.getsingleAdoptionPost = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singleAdoptionPost = await AdoptionPostModel.findOne({_id:id})
    if(!singleAdoptionPost){
        res.status(200).json({
            status: 'success',
            message: 'AdoptionPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singleAdoptionPost
    })
})

exports.updateAdoptionPost = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesingleAdoptionPost = await AdoptionPostModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesingleAdoptionPost) {
        res.status(200).json({
            status: 'success',
            message: 'AdoptionPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesingleAdoptionPost
    })
})

exports.deleteAdoptionPost = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesingleAdoptionPost = await AdoptionPostModel.deleteOne({ _id: id })
    if (!deletesingleAdoptionPost) {
        res.status(200).json({
            status: 'success',
            message: 'AdoptionPost not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'AdoptionPost Deleted'
    })
})