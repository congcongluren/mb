import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUserName } from '@actions/action'

import './index.scss';

function Home(props) {
  const { user, setUserName } = props;

  const navigate = useNavigate();
  const [name, setName] = useState('');

  const toList = () => {
    navigate('/list', { state: 'alien' });
  }

  const sendName = useCallback(() => {
    setUserName(name);
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = { setUserName }

export default connect(mapStateToProps, mapDispatchToProps)(Home);