const express = require('express');
const mongoose = require('mongoose');
const user = require('./modal/user')
const cors = require('cors');
const expressAsyncHandler = require('express-async-handler');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: true }));
// locall connection start
// mongoose.connect('mongodb://localhost:27017/Food-App', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }).then((result)=>{
  //   console.log('Testing DB and the result is :',result);
  // }).catch((err)=>{console.log('Testing is faild : ',err)});
  // locall connection ends
  // connection with atlas
  mongoose.connect('mongodb+srv://danishiiui22:BCy2Hb2oWxvsfLkW@friendlink.mir4ey7.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((result)=>{
        console.log('Testing DB and the result is :',result);
      }).catch((err)=>{console.log('Testing is faild : ',err)});
// connection with atlas end
//routes for saving the user.....
// create the user
// user.watch(); 
app.get('/', (req, res) => {
  res.send('Hello World! I am hosted on the vercel')
})
app.post('/user/create-user',expressAsyncHandler(async(req,res)=>{
    console.log('Data getting from the frontend : ',req.body);
    const userIs = new user(req?.body?.data);
    let savedUser = await userIs.save();
    console.log('user is : ',savedUser);
    res.send(savedUser);
}));
// create the user end
// Assign league to the user
app.post('/user/assign-league',expressAsyncHandler(async(req,res)=>{
  console.log('Update user credentials : ',req.body.leagueData);
  let {id,email,name} = req?.body?.leagueData;
  let qurey = {
    "email": `${email}`
  };
  let update ={
    "league_name": `${name}`,
    "league_id":`${id}`
  };
  let options={returnNewDocument: true};
  // find the user and update him
   let updaetdUser = await user.findOneAndUpdate(qurey,update,options);
   res.send(updaetdUser);
   console.log('Updated user is ',updaetdUser);
}));
// Assign league to the user end
app.listen(3001,()=>{console.log('server is listening at port 3001')})