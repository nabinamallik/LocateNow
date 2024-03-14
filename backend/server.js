const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cors());
mongoose.connect('mongodb+srv://nabinamallik2003:nabinamallik2003@cluster0.epiqhjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {dbName: 'LocateNow', useNewUrlParser: true,useUnifiedTopology: true,});

app.post('/login', (req, res) =>{
  const {email, password} = req.body;
  User.findOne({email: email})
  .then(user =>{
    if(user){
      if(user.password === password){
        res.json("Success")
      } else {
        res.json("the password is incorrect")
      }
    }else{
      res.json("user does not exits!!")
    }
  })
})

app.post('/signup', (req, res) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});