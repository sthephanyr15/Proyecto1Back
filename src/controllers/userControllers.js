import User from '../schemas/userSchema.js';

export const createUser = async (req, res) => {
  const {
    username,
    first_name,
    last_name,
    email,
    password,
    phone,
    address,
    role,
    restaurants,
    isDeleted,
  } = req.body;
  const newUser = new User({
    username,
    first_name,
    last_name,
    email,
    password,
    phone,
    address,
    role,
    restaurants,
    isDeleted,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    let user;
    if (email && password) {
      user = await User.findOne({ email, password });
    } else if (username) {
      user = await User.findOne({ username });
    } else {
      res.status(400).json({ message: 'Bad request' });
      return;
    }
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData={
      username,
      first_name,
      last_name,
      email,
      password,
      phone,
      address,
      role,
      restaurants,
      isDeleted,
    }
    const updateUser= await user.findOneAndUpdate(userId);
    if (!updateUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    Object.assign(updateUser, updatedData);
    await updateUser.save();
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("id", userId);
    const user = await User.findOneAndUpdate({ userId }, { isDeleted: true });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send({ message: 'User deleted successfully' });
};
