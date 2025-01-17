

import mongoose,{Schema} from "mongoose";

const userSchema =  new Schema({
    userID:{
        type:Number,
        requited:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:string,
        required:true,
        trim:true,
        index:true
    },
    avtar:{
        type:String //coudinary URL
    },
    coverImage:{
        type:String //coudinary URL
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        require:[true,'Password is required'],
    },

    refreshToken:{
        type:String
    }
 
},{timestamps:ture})

export const User =  mongoose.model('User', userSchema)