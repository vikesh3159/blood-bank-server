const mongoose= require("mongoose");
//const MONGO_URL="mongodb+srv://viku:viku@clusterbloodbank.arqkpro.mongodb.net/bloodbank?retryWrites=true&w=majority"
const connectDB=async()=>{
    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        console.log("database is connected to server")
      }).catch((err)=>{
        console.log("err");
      })
};

module.exports=connectDB;