import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { setName } from '@actions/action'

import './index.scss';

function Home(props) {
  const { user, setUsername } = props;

  const navigate = useNavigate();

  const toList = () => {
    navigate('/list', { state: 'alien' });
  }
  return (
    <div className="home">
      <button onClick={toList}>
        Home
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  setUsername: (newName) => dispatch(setName(newName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);