import User from '../models/userSchema.js';

const createUser = async (req, res) => {
    const {username, first_name, last_name, email, password, phone, address, role, restaurants, isDeleted} = req.body;
    const newUser = new user({username, first_name, last_name, email, password, phone, address, role, restaurants, isDeleted});
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

const getUsers = async (req, res) => {
    try{
        const{email, password, username} = req.body;
        let user;
        if(email && password){
            user= await User.findOne({email, password});    
        }else if(username){
            user=await User.findOne({username});
        }else{
            res.status(400).json({message: "Bad request"});
            return;
        }
        if(!user){
            res.status(404).json({message: "User not found"});
            return;
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const updateUser = async (req, res) => {
    const{username}=req.params;
    const{first_name, last_name, email, password, phone, address, role, restaurants} = req.body; 
    try{
        const updateUser=await User.findOneUpdate(
            {username: username, isDeleted: false},
            {
                $set:{  
                    first_name,
                    second_name,
                    email,
                    password,
                    phone,
                    address,
                    role,
                    ...(restaurants && {restaurants}),
            }
        },
        {new:true}
        )
        res.status(200).json(updateUser);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const deleteUser = async (req, res) => {
 try{
    const{username}=req.params;
    const user=await User.findOneAndUpdate( username, {isDeleted:true});
 }catch(err){
    res.status(500).json({message: error.message});
 }
 res.send({message:"User deleted successfully"});
}

export {createUser, getUsers, updateUser, deleteUser};
