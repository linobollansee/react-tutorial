import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import Greeting from './components/Greeting';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>React Tutorial App</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <hr />
      <Counter />
      <hr />
      <ToggleButton />
      <hr />
      <Greeting />
      <hr />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <hr />
      <NameForm />
    </div>
  );
}

export default App;