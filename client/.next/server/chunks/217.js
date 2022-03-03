"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 1217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z9": () => (/* binding */ ADD_POST_REQUEST),
/* harmony export */   "_s": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "tP": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "jM": () => (/* binding */ ADD_POST_RESET),
/* harmony export */   "aO": () => (/* binding */ LOAD_POSTS_REQUEST),
/* harmony export */   "ZP": () => (/* binding */ LOAD_POSTS_SUCCESS),
/* harmony export */   "T5": () => (/* binding */ LOAD_POSTS_FAILURE),
/* harmony export */   "GZ": () => (/* binding */ postRequestAction),
/* harmony export */   "Co": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE */
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
    mainPosts: [],
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null
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
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_POST_RESET = 'ADD_POST_RESET';
const LOAD_POSTS_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
// export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
// export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
// 이 아래 예제는 사가에서 실행할 함수이다. 타입과 데이터를 합쳐서 사가에 넘겨준다.
// export const addPost = (data) => ({
//   type: ADD_POST_REQUEST,
//   data,
// });
// export const logoutAction = () => ({
//   type: 'LOG_OUT_REQUEST',
// });
// useEffect(() => {
//   const { me } = state.me;
//   if (me) axios.defaults.headers.common.sessionid = me.sessionId;
// }, [me]);
const postRequestAction = (data)=>({
        type: ADD_POST_REQUEST,
        data
    })
;
const reducer = (state = initialState, action)=>immer__WEBPACK_IMPORTED_MODULE_0___default()(state, (draft)=>{
        // const { me } = useSelector((state) => state.user);
        switch(action.type){
            // <- 이 부분에 아래와 같이 draft로 불변성 지키면서 각각의 상태를 고쳐줌
            // case LOAD_POSTS_REQUEST:
            //   draft.loadPostsLoading = true;
            //   draft.loadPostsDone = false;
            //   draft.loadPostsError = null;
            //   break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.addPostError = null;
                draft.mainPosts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.error;
                break;
            case ADD_POST_RESET:
                draft.addPostDone = false;
                break;
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.loadPostsError = null;
                draft.mainPosts = draft.mainPosts.concat(action.data);
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = false;
                draft.loadPostsError = action.error;
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