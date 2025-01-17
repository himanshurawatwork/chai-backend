import mongoose,{Schema} from "mongoose";

const videoSchema  =  new Schema({

    videoFiles:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type: Number,
        required:true
    },
    views:{
        type: Number,
        default:0,  
    },
    isPublished:{
        type:Boolean,
        default:true,
        enum:["true","false"]
    }
},{timestamps:true})

export const Video = mongoose.model('Video',videoSchema)