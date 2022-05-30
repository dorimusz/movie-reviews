const User = require("../model/user");

const getUserByCredential = async (option) => {
  try {
    const singleUser = await User.find(option);
    return singleUser;
  } catch (error) {
    console.log(`Could not fetch user ${error}`)
  }
}

const saveGoogleUser = async (userdata) => {
  try {
    const user = new User(userdata);
    const newUser = await user.save();  
    return newUser;
  } catch (error) {
    console.log(`Could not save user ${error}`)
  }
}

module.exports = { 
  getUserByCredential,
  saveGoogleUser
}