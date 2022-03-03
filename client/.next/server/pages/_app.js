(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3940:
/***/ ((module) => {

// Exports
module.exports = {
	"inner": "Toolbar_inner__xchK1",
	"title": "Toolbar_title__f7_iu",
	"toolbar_box": "Toolbar_toolbar_box__je8PC",
	"toolbar": "Toolbar_toolbar__j05g8",
	"title_line": "Toolbar_title_line__o8EsK",
	"side_toolbar": "Toolbar_side_toolbar___L0PI",
	"side_toolbar_line": "Toolbar_side_toolbar_line__EVuSF",
	"mark": "Toolbar_mark__gMpZt"
};


/***/ }),

/***/ 2252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Toolbar.module.css
var Toolbar_module = __webpack_require__(3940);
var Toolbar_module_default = /*#__PURE__*/__webpack_require__.n(Toolbar_module);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(5555);
;// CONCATENATED MODULE: ./components/Toolbar.js




// import PropTypes from 'prop-types';


function Toolbar() {
    const { me  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const LogOutHandler = (0,external_react_.useCallback)(()=>{
        dispatch((0,user/* logoutRequestAction */.vR)());
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Toolbar_module_default()).inner,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: '10px'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).title,
                    children: "NEXT"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Toolbar_module_default()).mark
                })
            }),
            me ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Toolbar_module_default()).toolbar_box,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    onClick: LogOutHandler,
                    "aria-hidden": "true",
                    className: (Toolbar_module_default()).toolbar,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            style: {
                                fontSize: '24px'
                            },
                            children: [
                                "(",
                                me.id,
                                ")"
                            ]
                        }),
                        "\xa0로그아웃"
                    ]
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Toolbar_module_default()).toolbar_box,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "Signup",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Toolbar_module_default()).toolbar,
                                children: "회원가입"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            float: 'right',
                            marginRight: 10,
                            fontSize: '19px'
                        },
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Toolbar_module_default()).toolbar_box,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/Login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Toolbar_module_default()).toolbar,
                                children: "로그인"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Toolbar_module_default()).title_line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Studies",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Studies"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Mypage",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Introduce",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Introduce"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Toolbar_module_default()).side_toolbar_line
            })
        ]
    }));
}
/* harmony default export */ const components_Toolbar = (Toolbar);

;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__(1217);
;// CONCATENATED MODULE: ./reducers/index.js




// <- 여기에 연결할 리듀서 임포트 해오기
// (이전상태, 액션) => 다음상태
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    // 서버사이드 랜더링을 위해 HYDRATE를 인덱스에 추가해줌
    index: (state = {}, action)=>{
        switch(action.type){
            case external_next_redux_wrapper_namespaceObject.HYDRATE:
                console.log('HYDRATE', action);
                return {
                    ...state,
                    ...action.payload
                };
            default:
                return state;
        }
    },
    user: user/* default */.ZP,
    post: post/* default */.Co
});
/* harmony default export */ const reducers = (rootReducer); // import { HYDRATE } from 'next-redux-wrapper';
 // import { combineReducers } from 'redux';
 // import user from './user';
 // // (이전상태, 액션) => 다음상태
 // const rootReducer = (state, action) => {
 //   switch (action.type) {
 //     case HYDRATE:
 //       console.log('HYDRATE', action);
 //       return action.payload;
 //     default: {
 //       const combinedReducer = combineReducers({
 //         user,
 //       });
 //       return combinedReducer(state, action);
 //     }
 //   }
 // };
 // export default rootReducer;

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./sagas/user.js




// <- 이 부분에 리듀서에서 가져올 요청을 임포트한다.
// import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';
// function signUpAPI() {
// return axios.get('http://localhost:3065/user')
// }
function loadUserAPI() {
    // const { me } = useSelector((state) => state.user);
    // if (me) { console.log(me); }
    return external_axios_default().get('http://localhost:3065/');
// get이랑 delete는 데이터가 없으므로 2번째 자리에 옵션이 들어가는데
// saga index에서 credentials 공통 처리를 해주었으므로 생략한다.
}
function* loadUser(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(loadUserAPI, action.data);
        // console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOAD_MY_INFO_SUCCESS */.LJ,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOAD_MY_INFO_FAILURE */.Cq,
            error: err.response.data
        });
    }
}
function logInAPI(data) {
    // const { me } = useSelector((state) => state.user);
    // if (me) { console.log(me); }
    return external_axios_default().post('http://localhost:3065/Login', data);
}
function* logIn(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(logInAPI, action.data);
        // console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_SUCCESS */.RZ,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_FAILURE */.yK,
            error: err.response.data
        });
    }
}
function logOutAPI() {
    return external_axios_default().post('http://localhost:3065/Logout');
}
function* logOut() {
    try {
        yield (0,effects_namespaceObject.call)(logOutAPI);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_SUCCESS */.kV
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_FAILURE */.mD,
            error: err.response.data
        });
    }
}
function signUpAPI(data) {
    return external_axios_default().post('http://localhost:3065/Signup', data);
}
function* signUp(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(signUpAPI, action.data);
        console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGN_UP_SUCCESS */.I,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGN_UP_FAILURE */.bP,
            error: err.response.data
        });
    }
}
// 아래는 백엔드에서 가져올 API를 넣어준다.
// function addPostAPI(data) {
//   return axios.post('/api/post', data);
// }
// 아래 함수는 요청이 일어나면 실행될 함수를 넣어준다.
// function* addPost(action) {
//   try {
//     // const result = yield call(addPostAPI, action.data)
//     yield delay(1000);
//     const id = shortId.generate();
//     yield put({
//       type: ADD_POST_SUCCESS, // post 리듀서 바꾸기
//       data: {
//         id,
//         content: action.data,
//       },
//     });
//     yield put({
//       type: ADD_POST_TO_ME, // user 리듀서 바꾸기
//       data: id,
//     });
//   } catch (err) {
//     yield put({
//       type: ADD_POST_FAILURE, // post 리듀서 바꾸기
//       data: err.response.data,
//     });
//   }
// }
// 이 아래는 yield all 배열 안에 있는 fork 요청들을 한번씩 실행한다.
// 요청 실행중 가장최근에 실행된 ADD_POST_REQUEST 요청이 되면, 위에 만든 addpost 함수를 실행한다
// function* watchAddPost() {
//   yield takeLatest(ADD_POST_REQUEST, addPost);
// }
function* watchLoadUser() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOAD_MY_INFO_REQUEST */.qq, loadUser);
}
function* watchLogIn() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_IN_REQUEST */.uF, logIn);
}
function* watchLogOut() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_OUT_REQUEST */.Xd, logOut);
}
function* watchSignUp() {
    yield (0,effects_namespaceObject.takeLatest)(user/* SIGN_UP_REQUEST */.pK, signUp);
}
function* userSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchLoadUser),
        (0,effects_namespaceObject.fork)(watchLogIn),
        (0,effects_namespaceObject.fork)(watchLogOut),
        (0,effects_namespaceObject.fork)(watchSignUp), 
    ]);
};

;// CONCATENATED MODULE: ./sagas/post.js





function addPostAPI(data) {
    return external_axios_default().post('http://localhost:3065/Board/post', data);
}
function* addPost(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(addPostAPI, action.data);
        console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: post/* ADD_POST_SUCCESS */._s,
            data: result.data
        });
        yield (0,effects_namespaceObject.put)({
            type: user/* ADD_POST_TO_ME */.x6,
            data: result.data.id
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: post/* ADD_POST_FAILURE */.tP,
            error: err.response.data
        });
    }
}
function loadPostsAPI(data) {
    return external_axios_default().get('/Board', data);
}
function* loadPosts(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(loadPostsAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: post/* LOAD_POSTS_SUCCESS */.ZP,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: post/* LOAD_POSTS_FAILURE */.T5,
            error: err.response.data
        });
    }
}
function* watchAddPost() {
    yield (0,effects_namespaceObject.takeLatest)(post/* ADD_POST_REQUEST */.z9, addPost);
}
function* watchLoadPosts() {
    yield (0,effects_namespaceObject.throttle)(5000, post/* LOAD_POSTS_REQUEST */.aO, loadPosts);
// 5초에 한번씩만 요청 받게 설정
}
function* postSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchAddPost),
        (0,effects_namespaceObject.fork)(watchLoadPosts), 
    ]);
};

;// CONCATENATED MODULE: ./sagas/index.js




// axios.defaults.baseURL = 'http://localhost:3065';
(external_axios_default()).defaults.withCredentials = true;
// 서로 다른 도메인에서 credentials로 쿠키 전송을 원할하게 해줌
function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(userSaga),
        (0,effects_namespaceObject.fork)(postSaga), 
    ]);
};

;// CONCATENATED MODULE: ./configure/configure.js






// // 미들웨어 thunk 3단 고차함수, 액션객체를 함수화해서 시간 지연
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action); // 액션을 실행하기전에 콘솔을 한 번 찍어주는 미들웨어
//   return next(action);
// };
const configure = (context)=>{
    console.log(context);
    const sagaMiddleware = external_redux_saga_default()();
    const middlewares = [
        sagaMiddleware
    ];
    // 빈 배열을 그대로 넣는게 아니라 만들어 스프레드 형식으로 넣는다. ★ 중요 ★
    const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middlewares)) // Dev툴 연결 안 한 것
     : 0; // Dev툴 연결 한 것
    const store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
    // enhancer를 파라미터로 받고 인핸서 기능 확장
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(configure, {
    debug: "production" === 'development'
});
/* harmony default export */ const configure_configure = (wrapper);

;// CONCATENATED MODULE: ./pages/_app.js

/* eslint-disable react/jsx-props-no-spreading */ 







function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: user/* LOAD_MY_INFO_REQUEST */.qq
        });
    // dispatch({
    //   type: LOAD_POSTS_REQUEST,
    // });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NEXT 게시판"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Toolbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    pageProps: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const _app = (configure_configure.withRedux(MyApp));


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,555,217], () => (__webpack_exec__(2252)));
module.exports = __webpack_exports__;

})();