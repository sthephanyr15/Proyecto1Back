import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    restaurantId:{type:String, required:true},
    name:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    availableQuantity:{type:Boolean, required:true},
    price:{type:Number, required:true},
    isDeleted:{type:Boolean, default:false}
});

const Product = mongoose.model('Product', productSchema);
export default Product;