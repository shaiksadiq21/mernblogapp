const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database`.bgMagenta.white)
    } catch (error){
        console.log(`MONGO Connect Error ${error}`.bgRed.white)
    }
}

module.exports = connectDB