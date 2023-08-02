const userModel = require("../models/userModel");

//donar list
const getDonarsListController=async(req,res)=>{
    try {
        const donarData = await userModel
        .find({ role: 'donar'})
        .sort({ createdAt: -1});

        return res.status(200).send({
            success:true,
            Totalcount: donarData.length,
            message:'Donar List Fetched Successfully',
            donarData,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in donar list api',
            error
        })
    }
};

//donar list
const getHospitalListController=async(req,res)=>{
    try {
        const  hospitalData = await userModel
        .find({ role: 'hospital'})
        .sort({ createdAt: -1});

        return res.status(200).send({
            success:true,
            Totalcount:  hospitalData.length,
            message:'Hospital List Fetched Successfully',
            hospitalData,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in hospital list api',
            error
        })
    }
};

//org list
const getOrgListController=async(req,res)=>{
    try {
        const orgData = await userModel
        .find({ role: 'organisation'})
        .sort({ createdAt: -1});

        return res.status(200).send({
            success:true,
            Totalcount: orgData.length,
            message:'Organisation List Fetched Successfully',
            orgData,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in organisatin list api',
            error
        })
    }
};

//======================================================
//delete donar
const deleteDonarController=async(req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success:true,
            message:' Record Deleted Successfully',
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while deleting donar',
            error
        })
    }
};

//export
module.exports={getDonarsListController,getHospitalListController,getOrgListController, deleteDonarController}