const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pin");

const userSchema = mongoose.Schema({
  username : String,
  name:String,
  password : String,
  profileImage:String,
  email:String,
  contact:Number,
  boards:[],
  posts:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"post"
  }
]
});


userSchema.plugin(plm);
module.exports = mongoose.model("users",userSchema);