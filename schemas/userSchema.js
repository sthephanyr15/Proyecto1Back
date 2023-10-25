import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{type:String, required:true,unique: true},
    first_name:{type:String, required:true},
    last_name:{type:String,required:true},
    email:{type:String, required:true,unique: true },
    password:{type:String, required:true},
    phone:{type:String, required:true},
    address:{
        street:{type:String, required:true},
        number:{type:String, required:true},
        city:{type:String, required:true},
        state:{type:String, required:true},
        zip:{type:String, required:true},
    },
    role:{type:String, enum:['admin','user','delivery'], default:'user'},
    restaurants: {type:[String]},
    isDeleted:{type:Boolean, default:false},

});
const User = mongoose.model('User', userSchema);
export default User;