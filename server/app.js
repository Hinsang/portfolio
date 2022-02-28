const express = require('express');
const userRouter = require('./routes/user');
const app = express();
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const User = require('./models/user');
const Post = require('./models/post');
// const { hash, compare } = require('bcryptjs');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
// const { authenticate } = require('./middleware/authentication');
// const bcrypt = require('bcryptjs/dist/bcrypt');
// MongoDB 제작환경 셋팅 <id>:<password> 부분만 바꿔준다.
// let db;
// const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb+srv://star4381:419tkd@cluster0.fslha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client){
  if(err) return console.log(err)
  
  // crud-project DB 폴더에 연결
  // db = client.db('projectDatabase');
  
  app.listen(3065, () => {
    console.log('서버 실행 중');
  });
});

// 아래 2개는 미들웨어는 프론트에서 받은 데이터를 DB에 넣어주는 역할을 한다.
// 라우터 가장 위에 넣어줘야 정상적으로 작동한다.
// 제이슨 형식으로 데이터 저장
app.use(express.json());
// 폼의 데이터를 처리해줌
app.use(express.urlencoded({ extended: true }));
// app.use(authenticate);

// cors origin 안에 프론트 리액트의 루트경로를 입력한다.
app.use(cors({
  // origin: 3000은 3000번 포트로 온 요청만 허용 받겠다는 의미
  origin: 'http://localhost:3000',
  // credentials로 중요한 정보를 넘길때는 정확한 주소를 입력해야 한다.
  credentials: true,
  // 쿠키 전달
}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/Login', function(req, res) {
  //   res.redirect('/');
  // })

// Passport로 로그인하기
app.use(cookieParser('비밀코드'));
app.use(session({
  secret : '비밀코드',
  resave : false,
  saveUninitialized : false,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done){
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({ id: id });
    done(null, user);
  } catch (error) {
    console.error;
    done(error);
  }
})

passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password',
  session: true,
  passReqToCallback: false,
}, async (id, password, done) => {
  const user = await User.findOne({ id: id });
    // if (user) {
    //   if (password == user.password) {
    //     return done(null, user)
    //   }
    try {
      if (!user) {
        return done(null, false, {reason: '존재하지 않는 ID 입니다.'})
        // (서버에러, 성공여부, 클라이언트에러)
      }
      const result = await bcrypt.compare(password, user.password)
      if (result) {
        console.log(user);
        return done(null, user);
      }
      return done(null, false, {reason: '비밀번호가 틀렸습니다.'})
    } catch (err) {
      return console.error(err)
    }
  }
)
)

  // await db.collection('user').findOne({ id: inputId }, function (err, result) {
    //   if (err) return done(err)
    //   if (!result) return done(null, false, { message: '존재하지 않는 아이디입니다.' })
    //   if (inputPw == result.password) {
      //     return done(null, result)
      //   } else {
        //     return done(null, false, { message: '비밀번호가 틀렸습니다.' })
        //   }
        
        
        
        // app.post('/Login', passport.authenticate('local', {
        //   successRedirect : 'http://localhost:3000/',
        //   // 이거 GET요청이다.
        //   failureRedirect : 'http://localhost:3000/Login'
        // }))

app.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      // 로그인 정보가 있을때만 로그인 정보를 보낸다. (새로고침에서도 유지시켜준다.)
      const fullUserWithoutPassword = await User.findOne({
        id: req.user.id,
      })
      return res.status(200).json(fullUserWithoutPassword);
    } else {
      return res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err)
  }
})

app.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // isNodtLoggedIn 가져오고 info로 에러 reason을 받아와서 각각의 에러를 출력
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      // const exUser = await User.findOne({
      //           id: req.body.id,
      //         })
      //       if (exUser) {
      //         next(err)
      //         return res.status(403).send('이미 사용 중인 아이디입니다.');
      //       }
      // 로그인 할때, 내부적으로 res.setHeader('Cookie', 'cxlhy') 이런거 보내줌
      const fullUserWithoutPassword = await User.findOne({
        id: req.body.id,
      })
      // me에 넣을 응답 데이터
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});
        
        // app.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
        //   try {
        //     const exUser = await User.findOne({
        //         id: req.body.id,
        //       })
        //     if (exUser) {
        //       return res.status(403).send('이미 사용 중인 아이디입니다.');
        //     }
        //     const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //     await User.create({
        //       id: req.body.id,
        //       password: hashedPassword,
        //       sessions: [{ createdAt: new Date() }],
        //     });
        //     res.status(201).send('ok');
        //   } catch (error) {
        //     console.error(error);
        //     next(error); // status 500
        //   }
        // });
// app.get('/'), function(req, res) {
//   console.log('/', req.user)
// }

        // app.patch('/Login', async(req, res) => {
          //   try {
            //     const user = await User.findOne({ id: req.body.id });
            //     if(!user) throw new Error("유저정보가 올바르지 않습니다.")
            //     const isValid = await compare(req.body.password, user.hashedPassword);
            //     if(!isValid) throw new Error("비밀번호가 일치하지 않습니다.")
            //     user.sessions.push({ createdAt: new Date() });
            //     const session = user.sessions[0]
//     await user.save()
//     res.json({ id: user.id, sessionId: session._id })
//   } catch(err) {
//     res.status(400).json({ message: err.message });
//   }
// })

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

// app.use('/get', getRouter); // 미들웨어로 라우터 가져오기

// app.use('/user', userRouter);

app.post('/Logout', isLoggedIn, async(req, res) => {
  req.logout();
  req.session.destroy();
  // res.send('ok');
  res.send('ok');
  // res.redirect('http://localhost:3000/');
  // try {
  //   console.log(req.user)
  //   if(!req.user) throw new Error("유효하지 않은 세션입니다.")
  //   await User.updateOne({ _id: req.user.id }, { $pull: { sessions: { _id: req.headers.sessionid } } })
  //   res.json({ message:"로그아웃 완료." });
  // } catch (err) {
  //   res.status(400).json({ message: err.message })
  // }
})

app.post('/Signup', async(req, res, next) => {
  // db.collection('user').insertOne({ id : req.body.id, password : req.body.password}, (err, result) => {
  //   res.send('true');
  // })
  try {
    if(req.body.password.length<3)
      throw new Error("비밀번호는 3자 이상으로 해주세요.");
    if(req.body.id.length<3)
      throw new Error("아이디는 3자 이상으로 해주세요.");
      console.log(req.body.id,req.body.password)
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // const {user_id} = req.body.id;
    // const userCheck = await User.findOne({user_id});
    // if(!userCheck) {
      // 데이터베이스에서 요청한 id와 같은 값을 찾아서 길이가 0이라면(즉, 없다면) 중복이 아이디가 아니므로, 새로운 데이터를 저장한다.
    const user = await new User({
      id: req.body.id,
      password: hashedPassword,
      sessions: [{ createdAt: new Date() }],
    }).save();
    const session = user.sessions[0];
    res.json({ id: user.id, sessionId: session._id })
  // } else {
  //   // redirect('http://localhost:3000/CheckID')
  //   // return done(null, false, {message: '이미 사용중인 아이디입니다.'})
  //   // 서버에러, 성공여부, 클라이언트에러
    // res.send({message: '존재하지 않는 ID 입니다.'})
    // throw new Error("이미 사용중인 아이디입니다.");
  //   // res.status(400).send('이미 사용중인 아이디입니다.')
  //   res.send('이미 사용중인 아이디입니다.')
  // }
  next()
  } catch (err) {
    // res.status(400).json({ message: err.message });
    // res.status(401).send(err.message);
    console.error(err)
    return next(err);
  }
})

app.get('/Board', async (req, res, next) => {
  try {
    // const posts = await Post.findAll({
    //   limit: 10,
    //   order: [['createdAt', 'DESC']],
    //   // include: [{
    //   //   model: User,
    //   //   attributes: ['id'],
    //   // }]
    // });
    const posts = await Post.findAll({
      // console.log(result);
      limit: 10,
    })
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

app.post('/Board/post', async(req, res, next) => {
  // db.collection('user').insertOne({ id : req.body.id, password : req.body.password}, (err, result) => {
  //   res.send('true');
  // })
  try {
    const posts = await new Post({
      title: req.body.title,
      description: req.body.description,
      // UserId: req.user.id,
    }).save();
    // const session = post.sessions[0];
    res.json(posts)
    // res.status(201).json(post);
    // res.redirect('/');
    // res.send(post);
    next()
  } catch (err) {
    console.error(err)
    next(err);
  }
})
