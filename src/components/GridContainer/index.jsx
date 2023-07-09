import React from 'react';
import './style.css';

class GridContainer extends React.Component {
  render() {
    const { className, children } = this.props;

    return (
      <div className={`grid-container ${className}`}>
        {children}
      </div>
    );
  }
}

export default GridContainer;
