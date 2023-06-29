const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./models/user');
const Post = require('./models/post');
const multer = require('multer');
const uploadMiddlewear = multer({dest: 'uploads/'})
const fs = require ('fs');
const { log } = require('console');



const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser())
app.use('/uploads', express.static(__dirname +'/uploads'))

const salt = bcrypt.genSaltSync(10);
const secret = "hbsdcu78364chj239784jbvdsch"


mongoose.set('strictQuery', false);
const uri = 'mongodb+srv://yazan:lafanda@cluster0.mgzqay3.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri);

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await User.create({
            email,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (err) {
        res.status(400).json(err);
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
      
        if (passOk) {
            jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id:userDoc._id,
                    email, 
                });
            });
        } else {
        res.status(400).json({ message: 'Wrong Password' });

        }
      } else {
        res.status(400).json({ message: 'User Not Found' });
      }

});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, secret, (err, info) => {
      if (err) {
        // Handle JWT verification errors
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        } else {
          return res.status(401).json({ message: 'Invalid token' });
        }
      }
  
      res.json(info);
    });
  });
  

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

app.post ('/post',uploadMiddlewear.single("file"), async  (req,res)=>{
    const {filename, path} = req.file;
    //const fileNameSplit = filename.split('.');
    //const ext = fileNameSplit[fileNameSplit.length];
    const newFileName = path + '.' + "png"
    fs.renameSync(path, newFileName);

    const {title, summary, content} = req.body
    const postDoc = await Post.create({
        title,
        summary,
        content,
        image:newFileName,
    })
    res.json(postDoc);
})

app.get('/post', async (req,res) =>{
    res.json(await Post.find().sort({createdAt: 1}))

})


app.get('/post/:id', async(req, res) =>{
    const {id} = req.params;
    const postDoc = await Post.findById(id)
    res.json(postDoc)
})


app.listen(4000, function () {
    console.log("running");
});
//
