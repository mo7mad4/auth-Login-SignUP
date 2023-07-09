import React from 'react';
import './style.css';

class GridColumn extends React.Component {
  render() {
    const { className = "", children, style } = this.props;

    return (
      <div className={`grid-column ${className}`} style={style}>
        {children}
      </div>
    );
  }
}

export default GridColumn;
