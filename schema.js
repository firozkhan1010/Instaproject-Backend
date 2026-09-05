import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    followers : String
});
 const User = mongoose.model("User", userSchema);

 export default User