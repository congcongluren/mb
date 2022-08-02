import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';

// atom
import { textState } from '@recoil/user';
import Detail from './detail';
import './index.scss';

function Home(props) {
  const navigate = useNavigate(); // 跳转方法

  const [text, setText] = useRecoilState(textState);

  // 跳转方法
  const toList = () => {
    navigate('/list', { state: 'alien' });
  }

  return (
    <div className="home">
      <h2>
        Welcome to use cclr !!
        <p>text: <span>{text}</span></p>
      </h2>
      <div className='name'>
        <input type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <a onClick={toList}>去看列表</a> <i className='iconfont icon-changyong_chakangengduo' />
      <Detail />
    </div>
  )
}

export default Home;