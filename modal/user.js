const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    phone: Number,
    email: String,
    sleeper_username: String,
    sleeper_user_id:Number,
    number_leagues:Number,
    dateCreated: String,
    dateUpdated:String,
    league_name:String,
    league_id:String
  });
const User = mongoose.model('User', userSchema);
module.exports=User;