import React from 'react';

export const Tab = ({ title, onClick }) => {
  return (
    <a href='#' onClick={onClick}>{title}</a>
  );
};

Tab.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func,
  name: React.PropTypes.string,
};
