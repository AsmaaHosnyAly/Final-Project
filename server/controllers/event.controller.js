const eventModel = require("../database/models/event.model")
class Event{
    static create= async(req,res)=>{
     
        try{
            const eventData = new eventModel({
                ...req.body,
                userId: req.user._id
            })
            await eventData.save()
            res.status(200).send({
                apiStatus:true,
                data:eventData,
                message:"Event added successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    //get all Events
    static getAllEvents = async(req, res) => {
        try{
            const allEvents = await eventModel.find()
            res.status(200).send({
                apiStatus:true,
                data:allEvents,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
      //get single Event
      static getSingleEvent = async(req, res) => {
        try{
            const EventData = await eventModel.findById(req.params.id)
            if(!EventData){
                res.status(404).send({
                    apiStatus:false,
                    data:null,
                    message:"invalid event id"
                })
            }
            res.status(200).send({
                apiStatus:true,
                data:EventData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update Event
    static updateEvent= async(req,res)=>{
        try{
            const eventData = await eventModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {runValidators:true}
                )
            res.status(200).send({
                apiStatus:true,
                data:eventData ,
                message:"Event updated successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
     //delete  Event
     static deleteEvent= async(req,res)=>{
        try{
            const eventData = await eventModel.findByIdAndDelete( req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:eventData,
                message:"Event deleted successfully"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    // TO GET all services related with event
    static manyServices = async(req,res)=>{
        try{
            await req.Event.populate("manyServices")
            res.status(200).send({data:req.Event.manyServices})
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
    static uploadImage=  async(req, res)=>{
        try{
            const ext = path.extname(req.file.originalname)
            const newName = "images/"+req.file.fieldname + Date.now()+ext
            fs.rename(req.file.path, newName, ()=>{})
            req.user.image = newName
            req.user.name= req.body.name
            req.user.age = req.body.age
            await req.user.save()
            res.send({data:req.user})
        }
        catch(e){
            res.send(e.message)
        }
      }
}
module.exports =Event