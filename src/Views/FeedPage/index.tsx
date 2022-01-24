import { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import NetworkImage from '../../common/NetworkImages/NetworkImage';
import { stateType } from '../../redux';
import *  as actions from  '../../redux/posts/PostActionCreators'
function FeedPage() {


  const dispatch = useDispatch();
  const {fetchPosts} = bindActionCreators(actions, dispatch);
  const state = useSelector((state:stateType) => state.posts);

  useEffect(() => {
      fetchPosts();
  },[]);  
  
  if(state.isLoading)
  {
      return <h2>Data is Loading</h2>
  }

  return <div>
      {state.postList.map((item:any) => <NetworkImage key={item.id} url={item.urls.small}/>) }
  </div>
}

export default FeedPage;
