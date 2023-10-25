import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    restaurantID: {type:mongoose.Schema.Types.ObjectId, required:true},         
    name: {type:String, required:true},
    description: {type:String, required:true},    
    price: {type:Number, required:true},
    category:{type:String, required:true},
    quantityAvailable:{type:Number, required:true},
    isDeleted:{type:Boolean, default:false},
    productStatus:{type:String, enum:['available', 'not available'], default:'available'},
})

const Product = mongoose.model('Product', productSchema);
export default Product;