import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { setUserName } from '@features/userSlice';

import { useDispatch, useSelector } from 'react-redux';
import './index.scss';

function Home(props) {
  const navigate = useNavigate(); // 跳转方法
  const [name, setName] = useState('');

  const user = useSelector(store=>store.user); // store
  const dispatch = useDispatch(); // dispatch

  // 跳转方法
  const toList = () => {
    navigate('/list', { state: 'alien' });
  }

  // 提交到store
  const sendName = useCallback(() => {
    dispatch(setUserName(name));
    setName('');
  }, [name]);

  return (
    <div className="home">
      <h2 onClick={toList}>
        Welcome to use cclr !!
        <p>name: <span>{user.name}</span></p>
      </h2>
      <div className='name'>
        <input type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button onClick={sendName}>发送</button>
      </div>
    </div>
  )
}

export default Home;