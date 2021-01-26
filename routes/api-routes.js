// const passport = require("passport");
// const User = require("../models/user");
// const Chat = require("../models/chat");
// const bcrypt = require("bcryptjs");
// app.use(passport.initialize());
// app.use(passport.session());
// require("../passportConfig")(passport);
// const app = express();

// module.exports = function(app) {



//     app.post("/api/", (req, res, next) => {
//         passport.authenticate("local", (err, user, info) => {
//           if (err) throw err;
//           if (!user) return res.sendStatus(403);
//           console.log('here')
//           req.login(user, err => {
//             if (err) throw err;
//             delete user.password;
//             res.json(user);
//             console.log(req.user);
//           })
      
//         })(req, res, next);
//       });
      
//       app.post("/api/signup", (req, res) => {
//         User.findOne({ username: req.body.username }, async (err, doc) => {
//           if (err) throw err;
//           if (doc) res.send("User Already Exists");
//           if (!doc) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 10);
      
//             const newUser = new User({
//               email: req.body.email,
//               username: req.body.username,
//               password: hashedPassword,
//               skill: req.body.skill
//             });
//             await newUser.save();
//             res.send("User Created");
      
//           }
//         })
//       });
      
      
//       app.put("/api/selfedit", (req, res) => {
//         console.log("Put Route Hit!!!!!")
//         console.log(req.user, "<=======")
//         User.findOneAndUpdate({ username: req.user.username },{skill: req.body.skill},(err, doc) => {
//           if (err) return res.sendStatus(404);
//           return res.sendStatus(200);
//         })
//       });
      
      
//       app.get("/api/message/:type", async (req, res) => {
//           const chatLog = await Chat.find({type : req.params.type});
//           res.json(chatLog)
//       })
      
//       app.get('/api/logout', (req, res) =>{
//         req.logout();
//         res.redirect('/');
//       });
      

// }