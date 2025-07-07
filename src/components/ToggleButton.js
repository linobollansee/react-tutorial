import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(true);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton;