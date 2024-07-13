// src/components/ToggleSwitch.js
import React from 'react';

const ToggleSwitch = ({ toggleDarkMode, darkMode }) => {
  return (
    <label className="form-switch">
      <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
      <i></i>
    </label>
  );
};

export default ToggleSwitch;
