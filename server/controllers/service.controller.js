const serviceModel = require("../database/models/service.mode")
const eventModel=require("../database/models/event.model")
class Service{
    static addService= async(req,res)=>{
     
        try{
            
            const serviceData = new serviceModel({
                ...req.body,
                userId: req.user._id,
                // eventId:event.find( event._id)
            })
            await serviceData.save()
            res.status(200).send({
                apiStatus:true,
                data:serviceData,
                message:"Service added successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //get all Events
    static getAllService = async(req, res) => {
        try{
            const allServices = await serviceModel.find()
            res.status(200).send({
                apiStatus:true,
                data:allServices,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
      //get single Service
      static getSingleService = async(req, res) => {
        try{
            const serviceData = await serviceModel.findById(req.params.id)
            if(!serviceData){
                res.status(404).send({
                    apiStatus:false,
                    data:null,
                    message:"invalid event id"
                })
            }
            res.status(200).send({
                apiStatus:true,
                data:serviceData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update service
    static updateService= async(req,res)=>{
        try{
            const serviceData = await serviceModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {runValidators:true}
                )
            res.status(200).send({
                apiStatus:true,
                data:serviceData ,
                message:"service updated successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
     //delete  Service
     static deleteService= async(req,res)=>{
        try{
            const serviceData = await serviceModel.findByIdAndDelete( req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:serviceData,
                message:"Service deleted successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    // TO GET all services related with event
    static manyServices = async(req,res)=>{
        try{

          let data= await  serviceModel.find(req.params.eventId).populate("manyServices")
           
            res.status(200).send(data)
        }
        catch(e){
            res.status(500).send({err:e.message})
        }
    }

    
    static myServices = async(req,res)=>{
        try{
            await req.user.populate("myServices")
            res.status(200).send({data:req.user.myServices})
        }
        catch(e){
            res.status(500).send({err:e.message})
        }
    }
}
module.exports =Service