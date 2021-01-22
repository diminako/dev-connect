const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bcrypt= require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");

const morgan = require('morgan');
const http = require("http")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

// Define middleware here

app.use(morgan('tiny'));
io.on("connection", socket => {
  console.log('connected')
  socket.emit("your id", socket.id);
  socket.on("send message", body => {
      io.emit("message", body)
  })
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devconnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true
},
() => {
  console.log("mongoose is connected")
});

// .....................Middleware..................................................
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(cors({
//   origin: "http://localhost:3001",
//   credentials: true
// }));

app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//....................end of Middleware...........................................



app.post ("/api/", (req, res, next) =>{
  passport.authenticate("local", (err,user,info) =>{
      if (err) throw err;
      if (!user) res.send("no user exists");
      else {
          req.login(user, err => {
              if (err) throw err;
              res.send("successfully authenticated");
              console.log(req.user);
          })
      }
  })(req, res, next);
});

app.post ("/api/signup", (req,res) =>{
  User.findOne({username: req.body.username}, async (err,doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc){
          const hashedPassword = await bcrypt.hash(req.body.password, 10);

          const newUser = new User({
              email: req.body.email,
              username: req.body.username,
              password: hashedPassword,
              skill: req.body.skill
          });
          await newUser.save();
          res.send("User Created");
        
      }
  })
});

app.get ("/api/message", (req,res) =>{

  if (req.user){

    res.json({"test":"test"});

  }
})

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Add routes, both API and view
// app.use(routes);





// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT }!`);
});
