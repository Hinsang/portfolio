import React, { useCallback } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import { logoutRequestAction } from '../reducers/user';

function Toolbar() {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogOutHandler = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div className={styles.inner}>
      <div style={{ height: '10px' }} />
      <Link href="/">
        <span className={styles.title}>
          NEXT
        </span>
      </Link>
      <span>
        <div className={styles.mark} />
      </span>
      {
      me
        ? (
          <span className={styles.toolbar_box}>
            <span onClick={LogOutHandler} className={styles.toolbar}>
              <span style={{ fontSize: '24px' }}>({me.id})</span>
              &nbsp;로그아웃
            </span>
          </span>
        )
        : (
          <span>
            <span className={styles.toolbar_box}>
              <Link href="Signup">
                <span className={styles.toolbar}>
                  회원가입
                </span>
              </Link>
            </span>
            <span style={{ float: 'right', marginRight: 10, fontSize: '19px' }}>
              |
            </span>
            <span className={styles.toolbar_box}>
              <Link href="/Login">
                <span className={styles.toolbar}>
                  로그인
                </span>
              </Link>
            </span>
          </span>
        )
      }

      <div className={styles.title_line} />
      <Link href="/">
        <span className={styles.side_toolbar}>Home</span>
      </Link>
      <Link href="/Studies">
        <span className={styles.side_toolbar}>Studies</span>
      </Link>
      <Link href="/Mypage">
        <span className={styles.side_toolbar}>About</span>
      </Link>
      <Link href="/Introduce">
        <span className={styles.side_toolbar}>Introduce</span>
      </Link>
      {/* <Link href="/Board">
        <span className={styles.side_toolbar}>Board</span>
      </Link> */}
      <div className={styles.side_toolbar_line} />
    </div>
  );
}

export default Toolbar;
