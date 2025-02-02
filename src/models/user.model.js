

import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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
    fullName:{
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

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

     this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPassowordCorrect = async function(password){

    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this.id,
            email:this.email,
            username: this.username,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
        }
    )
}
userSchema.methods.generateRefreshToken = function(){

    return jwt.sign(
        {
            _id : this.id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY 
        }
    ) 
}

export const User =  mongoose.model('User', userSchema)