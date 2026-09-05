import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://firozkhan74755_db_user:saniya123@cluster0.gmn4no3.mongodb.net/FormData"
    )
    console.log("mongodb is connected")
};

export default connectDB