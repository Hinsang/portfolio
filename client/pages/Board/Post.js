import React, { useCallback, useEffect } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import PostForm from '../../components/PostForm';
import PostCard from '../../components/PostCard';
import { ADD_POST_RESET } from '../../reducers/post';

function Post() {
  const { me } = useSelector((state) => state.user);
  // const { logInDone } = useSelector((state) => state.user);

  return (
    <div>
      { me
        ? <PostForm />
        : <div style={{ width: '1000px', margin: '0 auto' }}>로그인 해주세요!!</div>}
      {/* { console.log(me) } */}
    </div>
  );
}

export default Post;
