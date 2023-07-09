import React from 'react';
import './style.css';

class MyCheckBox extends React.Component {
  render() {
    const { value, onChange, name } = this.props;

    return (
      <div className='checkbox'>
        <label className='checkbox-label' htmlFor={name}>
          <span className={`checkbox-marker ${value ? "checkbox-marker__active" : ""}`}></span>
        </label>
        <input
          className="checkbox-input"
          type="checkbox"
          value={value}
          onChange={onChange}
          name={name}
          id={name}
        />
      </div>
    );
  }
}

export default MyCheckBox;
