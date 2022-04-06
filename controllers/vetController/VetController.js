const catchAsync = require('../../utils/catchAsync')
const VetModel = require('../../models/VetModel/vetModel')

exports.createVet = catchAsync(async (req, res, next) => {
    const vet = await VetModel.create(req.body);
    res.status(200).json({
        status: 'success',
        vet
    })
})

exports.getallVet = catchAsync(async (req, res, next) => {
    const vet = await VetModel.find()
    res.status(200).json({
        status: 'success',
        vet
    })
})



exports.getsingleVet = catchAsync(async (req, res, next) =>{
    const {id} = req.params
    const singleVet = await VetModel.findOne({_id:id})
    if(!singleVet){
        res.status(200).json({
            status: 'success',
            message: 'Vet not found'
        })
    }
    res.status(200).json({
        status: 'success',
        singleVet
    })
})

exports.updateVet = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const updatesingleVet = await VetModel.updateOne({ _id: id },req.body , {new: true})
    if (!updatesingleVet) {
        res.status(200).json({
            status: 'success',
            message: 'Vet not found'
        })
    }
    res.status(200).json({
        status: 'success',
        updatesingleVet
    })
})

exports.deleteVet = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const deletesingleVet = await VetModel.deleteOne({ _id: id })
    if (!deletesingleVet) {
        res.status(200).json({
            status: 'success',
            message: 'Vet not found'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'Vet Deleted'
    })
})