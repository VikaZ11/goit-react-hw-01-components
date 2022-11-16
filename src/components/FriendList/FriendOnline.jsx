import React from 'react';

const FriendIsOnline = ({ status, children }) => (
  <div className={`status ${status ? "active" : ""}`}>{children}</div>
);

export default FriendIsOnline;