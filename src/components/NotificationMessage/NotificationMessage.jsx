import React from 'react';
import css from './NotificationMessage.module.css';

const NotificationMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>There is no feedback</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1721/1721407.png"
        alt="coffee"
        width={150}
        height={150}
      />
    </div>
  );
};

export default NotificationMessage;
