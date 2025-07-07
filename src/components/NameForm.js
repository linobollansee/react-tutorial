import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('A name was submitted: ' + value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;