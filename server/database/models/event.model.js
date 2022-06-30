const mongoose = require("mongoose")
const eventSchema = mongoose.Schema({
//    serviceId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Service",
//         required:true
//     },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    eventName:{
        type:String,
        required:true,
    },
    eventType:{
        type:String,
        required:true,
        enum:["img", "txt"]
    },
    content:{
        type:String,
        trim:true,
        required: function(){ return this.eventType=="txt" }
    },
    file:{
        type:String,
        trim:true,
        required: function(){ return this.eventType=="img"}
    }
},
{timeStamps:true})

eventSchema.virtual("manyServices", {
    ref:"Service",
    localField:"_id",
    foreignField:"serviceId"
})
const Event= mongoose.model("Event", eventSchema)
module.exports = Event