import Order from '../schemas/ordersSchema.js';
import Restaurant from '../schemas/restaurantsSchema.js';
import mongoose from 'mongoose';    

const createDelivery = async (req, res) => {
    const {restaurantID, total, products}= req.body;
        const order= new Order({
            restaurantID,
            username, 
            products, 
            total, 
            status: 'created',
            distance:Math.random()*(10-0.1)+0.1,
        });
        const orderCreated= await order.save();
        orderCreated
        ? res.send(orderCreated)
        : res.status(404).json({message: "Order not found"});
};

const getOrderId = async (req, res) => {
    const {orderID} = req.params;
    try{
        const order = await order.findById(orderID);
        if(!order){
            return res.status(404).json({message: "Order not found"});
        }else{
            return res.status(200).json(order);
        }
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

const getOrderUser = async (req, res) => { 
    const {username} = req.params;
    try{
        const order = await order.find({username: username});
        if(!order){
            return res.status(404).json({message: "Order not found"});
        }else{
            return res.status(200).json(order);
        }
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

const getSentOrders = async (req, res) => {
    try{
        const delivery=await Order.find({status: 'sent'}, {isDeleted: false});
        res.status(200).json(delivery);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const getAllOrders = async (req, res) => {
    try{
        const delivery=await Order.find();
        res.status(200).json(delivery);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const updateOrder = async (req, res) => {
    const {orderID} = req.params;
    const {username, deliveryUser,restaurantID, products, status} = req.body;
    try{
        const order = await Order.findById({orderID: orderID, isDeleted: false, status: 'created'},
        {
            $set: {
                username: username,
                deliveryUser: deliveryUser,
                restaurantID: restaurantID,
                products: products,
                status: status
            },
        },
        {new: true}
        );
        if(!updateOrder){
            return res.status(404).json({message: "Order not found"});
    }
    res.status(200).json({message: "Order updated successfully"});
    
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

const deleteOrder = async (req, res) => {
    const {orderID} = req.params;
    try{
        Order.findById(orderID, {isDeleted: true});
    }catch(error){
        return res.status(500).json({message: error.message});
    }
    res.status(200).json({message: "Order deleted successfully"});
};

export {createDelivery, getOrderId, getOrderUser, getSentOrders, getAllOrders, updateOrder, deleteOrder};