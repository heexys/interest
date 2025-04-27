import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("MongoDB is connected!")
    } catch (err) {
        console.log("MONGODB CONECTION ERROR",err)
    }
}

export default connectDB;