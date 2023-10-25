import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    restaurantId:{type:Schema.Types.ObjectId, required:true},
    username:{type:Schema.Types.ObjectId, required:true},
    deliveryUser:{type:Schema.Types.ObjectId, required:true},
    total:{type:Number, required:true},
    status:{type:String, enum:['created', 'in course','sent','accepted' ]},
    products:{
        type:[
            {
                productId:{type:Number, required:true},
                quantity:{type:Number, required:true}
            },
        ],
    },
    distance:{type:Number,inmutable:true },
    createdAt:{type:Number, inmutable:true},
    isDeleted:{type:Boolean, default:false}
});

const Product = mongoose.model('Order', orderSchema);
export default Order;