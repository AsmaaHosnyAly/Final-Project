const mongoose = require("mongoose")
const serviceSchema = mongoose.Schema({
    eventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Event",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
   serviceName:{
        type:String,
        required:true,
    },
    serviceType:{
        type:String,
        required:true,
        enum:["img", "txt"]
    },
    content:{
        type:String,
        trim:true,
        required: function(){ return this.serviceType=="txt" }
    },
    file:{
        type:String,
        trim:true,
        required: function(){ return this.serviceType=="img"}
    }
},
{timeStamps:true})

 serviceSchema.virtual("manyServices", {
    ref:"Service",
    localField:"_id",
    foreignField:"serviceId"
})
const Service= mongoose.model("Service", serviceSchema)
module.exports = Service