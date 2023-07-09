import React from 'react';
import './style.css';

class MyAlert extends React.Component {
  render() {
    const { success, index, children } = this.props;

    return (
      <div
        className={`alert ${success ? "success" : ""}`}
        style={{ top: index ? (index + 1) * 55 : 55 }}
      >
        {children}
      </div>
    );
  }
}

export default MyAlert;
