import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
   admin:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
   restaurantId:{type:String, required:true, unique:true},
   name:{type:String, required:true},
   address:{
       street:{type:String, required:true},
       number:{type:String, required:true},
       city:{type:String, required:true},
       state:{type:String, required:true},
       zip:{type:String, required:true},
   },
    phone:{type:String, required:true},
    categories:[{type:String, required:true}],
    popularity:{type:Number, required:true,default:0},
    products:{type:[String],default:[]},
    isDeleted:{type:Boolean, default:false}
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;