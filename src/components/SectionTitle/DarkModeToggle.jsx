import React from 'react';
import Switch from 'react-switch';

const DarkModeToggle = ({ darkMode, onChange }) => {
  return (
    <div>
      <Switch
        onChange={onChange}
        checked={darkMode}
        onColor="#2E2E2E"
        offColor="#888"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  );
};

export default DarkModeToggle;
