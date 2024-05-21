const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    createdbyId : {
        type : String,
        
        
    },
    createdbyName : {
        type : String,
        
        
    },
    donebyId : {
        type : String,
        
        
    },
    donebyName : {
        type : String,
        
        
    },
    postuledby : {
        type : Array,
        
        
    },
    prjectname : {
        type : String,
        
        
    },
    budget : {
        type : Number,
       
        
    },
    detail : {
        type : String,
        
    },
    duree : {
        type : String,
        
    },
    type : {
        type : String,
        
    },
    date :{
        type : Date,
        default: Date.now()
    },
    isAffectted:{
        type : Boolean,
        default : false 
    },
    isCompleted:{
        type : Boolean,
        default : false 
    },
    images: [Object],
},);
module.exports = OfferInfo =  mongoose.model("OFFER", offerSchema);