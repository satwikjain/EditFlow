import mongoose from "mongoose";

const Connection = async(username = 'user', password = 'strongpassword') => {
    const URL = `mongodb+srv://user:strongpassword@cluster0.61n9b2c.mongodb.net/`

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('DataBase Connected Successfully')
    }catch(error){
        console.log('Error while connecting to the database', error)
    }
}
export default Connection;