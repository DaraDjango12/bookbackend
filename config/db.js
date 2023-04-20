const mongoose=require("mongoose");
const DbConnect=()=>{
    return mongoose.connect(process.env.MONGO);
};
module.exports=DbConnect;