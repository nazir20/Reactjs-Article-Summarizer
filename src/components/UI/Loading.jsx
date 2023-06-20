import React from 'react';
import LoadingGif from '../../assets/loading.gif';

const Loading = () => {
  return (
    <React.Fragment>
        <img src={LoadingGif} alt="loading__gif" className='loading__gif' />
    </React.Fragment>
  )
}

export default Loading