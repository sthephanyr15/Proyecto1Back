import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{type:String, required:true,unique: true },
    password:{type:String, required:true},
    first_name:{type:String, required:true},
    last_name:{type:String,required:true},
    phone:{type:String, required:true},
    address:{
        street:{type:String, required:true},
        number:{type:String, required:true},
        city:{type:String, required:true},
        state:{type:String, required:true},
        zip:{type:String, required:true},
    }

});
const User = mongoose.model('User', userSchema);
export default User;