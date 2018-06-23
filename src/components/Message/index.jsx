// @flow
import React from 'react';

import './style.css';

const Message = ({ text, img }: { text: string, img: string }) => (
  <div className="message">
    <img src={img} alt="" />
    <p>{text}</p>
  </div>
);

export default Message;
