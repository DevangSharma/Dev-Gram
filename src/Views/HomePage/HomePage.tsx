import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { stateType } from '../../redux';
import *  as actions from  '../../redux/posts/PostActions'

function HomePage() {

  const dispatch = useDispatch();
  const {fetchPosts} = bindActionCreators(actions, dispatch);
  const state = useSelector((state:stateType) => state.posts);
  
  return <div>
      <h1>Number is {state.nums}</h1>
      <button onClick={fetchPosts}>press</button>
  </div>;
}

export default HomePage;
