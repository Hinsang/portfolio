"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 5555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE),
/* harmony export */   "Xd": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "pK": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "I": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "bP": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "uh": () => (/* binding */ SIGN_UP_RESET),
/* harmony export */   "qq": () => (/* binding */ LOAD_MY_INFO_REQUEST),
/* harmony export */   "LJ": () => (/* binding */ LOAD_MY_INFO_SUCCESS),
/* harmony export */   "Cq": () => (/* binding */ LOAD_MY_INFO_FAILURE),
/* harmony export */   "x6": () => (/* binding */ ADD_POST_TO_ME),
/* harmony export */   "vR": () => (/* binding */ logoutRequestAction),
/* harmony export */   "tP": () => (/* binding */ loginRequestAction),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7133);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
// 더미데이터 넣을 때 아래 3개 주석 풀기
// import shortId from 'shortid';

// import faker from 'faker';



const initialState = {
    // 여기에 필요한 스테이트 넣기
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    me: null
};
// 더미데이터를 무작위로 넣는다면 어래와같이 넣어준다.
// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//   id: shortId.generate(),
//   User: {
//     id: shortId.generate(),
//     nickname: faker.name.findName(),
//   },
//   content: faker.lorem.paragraph(),
//   Images: [{
//     src: faker.image.image(),
//   }],
//   Comments: [{
//     User: {
//       id: shortId.generate(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.sentence(),
//   }],
// }));
// 이 아래 3개는 사가로 익스포트하는 예제. 각각 요청, 성공, 실패의 3가지 변수를 만든다.
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_RESET = 'SIGN_UP_RESET';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
// 새로고침때마다 로그인 정보 넣어주기
// export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
// 이 아래 예제는 사가에서 실행할 함수이다. 타입과 데이터를 합쳐서 사가에 넘겨준다.
// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });
const logoutRequestAction = ()=>({
        type: LOG_OUT_REQUEST
    })
;
// export const logoutAction = () => ({
//   type: 'LOG_OUT_REQUEST',
// });
// useEffect(() => {
//   const { me } = state.me;
//   if (me) axios.defaults.headers.common.sessionid = me.sessionId;
// }, [me]);
const loginRequestAction = (data)=>({
        type: LOG_IN_REQUEST,
        data
    })
;
const reducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        // const { me } = useSelector((state) => state.user);
        switch(action.type){
            // <- 이 부분에 아래와 같이 draft로 불변성 지키면서 각각의 상태를 고쳐줌
            case LOAD_MY_INFO_REQUEST:
                draft.loadUserDone = false;
                draft.loadUserError = null;
                draft.loadUserLoading = true;
                break;
            case LOAD_MY_INFO_SUCCESS:
                draft.loadUserDone = true;
                draft.loadUserError = null;
                draft.loadUserLoading = false;
                draft.me = action.data;
                break;
            case LOAD_MY_INFO_FAILURE:
                draft.loadUserDone = false;
                draft.loadUserError = action.error;
                draft.loadUserLoading = false;
                break;
            case LOG_IN_REQUEST:
                draft.logInDone = false;
                draft.logInError = null;
                draft.logInLoading = true;
                break;
            case LOG_IN_SUCCESS:
                draft.logInDone = true;
                draft.logInError = null;
                draft.logInLoading = false;
                draft.me = action.data;
                break;
            case LOG_IN_FAILURE:
                draft.logInDone = false;
                draft.logInError = action.error;
                draft.logInLoading = false;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutDone = false;
                draft.logOutError = null;
                draft.logOutLoading = true;
                break;
            case LOG_OUT_SUCCESS:
                draft.logInDone = false;
                draft.logOutDone = true;
                draft.logOutError = null;
                draft.logOutLoading = false;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutDone = false;
                draft.logOutError = action.err;
                draft.logOutLoading = false;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpDone = false;
                draft.signUpError = null;
                draft.signUpLoading = true;
                draft.logInError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpDone = true;
                draft.signUpError = null;
                draft.signUpLoading = false;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpDone = false;
                draft.signUpError = action.err;
                draft.signUpLoading = false;
                break;
            case SIGN_UP_RESET:
                draft.signUpDone = false;
                draft.logInError = null;
                break;
            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({
                    id: action.data
                });
                break;
            default:
                break;
        }
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;