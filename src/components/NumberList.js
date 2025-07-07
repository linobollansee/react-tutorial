import React from 'react';

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}

export default NumberList;