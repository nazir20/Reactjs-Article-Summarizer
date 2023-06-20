import React from 'react';
import {TbFaceIdError} from 'react-icons/tb';
import {GrClose} from 'react-icons/gr';

const Error = () => {
  return (
    <div className='error__container'>
      <TbFaceIdError className='error-icon'/>
      <p>Please Make sure that you have provided a valid URL</p>
    </div>
  )
}

export default Error