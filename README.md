# 🧠 Complete React Tutorial Guide (Based on W3Schools)

This guide walks you through creating a modern React app using **functional components**, **hooks**, and **modular file structure**, based on the examples from [W3Schools React Tutorial](https://www.w3schools.com/REACT/default.asp).

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/en/download/) (includes `npm`)
- Basic understanding of JavaScript and HTML

---

## 🚀 Step 1: Create the React App

Open your terminal and run:

```bash
npx create-react-app react-tutorial
cd react-tutorial
```

This creates a new React app in the `react-tutorial` folder.

---

## 🗃️ Step 2: Project Structure

We'll be editing these files and creating a few new ones:

```
react-tutorial/
└── src/
    ├── index.js
    ├── App.js
    └── components/
        ├── Welcome.js
        ├── Counter.js
        ├── ToggleButton.js
        ├── Greeting.js
        ├── NumberList.js
        └── NameForm.js
```

---

## 🧩 Step 3: Add the Source Code

### 📄 `src/index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

### 📄 `src/App.js`

```js
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
```

---

### 📄 `src/components/Welcome.js`

```js
import React from 'react';

function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

export default Welcome;
```

---

### 📄 `src/components/Counter.js`

```js
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
    </div>
  );
}

export default Counter;
```

---

### 📄 `src/components/ToggleButton.js`

```js
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
```

---

### 📄 `src/components/Greeting.js`

```js
import React, { useState } from 'react';

function UserGreeting() {
  return <h4>Welcome back!</h4>;
}

function GuestGreeting() {
  return <h4>Please sign up.</h4>;
}

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Greeting;
```

---

### 📄 `src/components/NumberList.js`

```js
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
```

---

### 📄 `src/components/NameForm.js`

```js
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
```

---

## ▶️ Step 4: Run the App

In the terminal:

```bash
npm start
```

This will open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧠 Key React Concepts Covered

| Concept               | Explained In                |
|----------------------|-----------------------------|
| JSX                  | `Welcome.js`                |
| Functional Components| All files                   |
| Props                | `Welcome.js`                |
| useState (state)     | `Counter.js`, `Greeting.js`, `NameForm.js` |
| Conditional Rendering| `Greeting.js`               |
| Event Handling       | `ToggleButton.js`, `Greeting.js`, `NameForm.js` |
| Lists with .map()    | `NumberList.js`             |
| Forms (Controlled)   | `NameForm.js`               |

---

## 📘 Reference: W3Schools Sections Mapped

| W3Schools Section               | Covered By             |
|--------------------------------|------------------------|
| React Introduction              | `Welcome.js`, `App.js` |
| React Components                | All components         |
| Props                           | `Welcome.js`           |
| State and Hooks (`useState`)    | `Counter.js`, `Greeting.js` |
| Events                          | `ToggleButton.js`      |
| Conditional Rendering           | `Greeting.js`          |
| Lists and Keys                  | `NumberList.js`        |
| Forms                           | `NameForm.js`          |

Full tutorial: https://www.w3schools.com/REACT/default.asp

---

## 🧱 Next Steps

Want to keep building? Try adding:

- 🎨 Styles (CSS Modules, Tailwind, or Styled Components)
- 🌐 Data fetching with `useEffect` and `fetch`
- 🧭 Routing using `react-router-dom`
- 🗂️ Lifting state up and sharing between components
- ⚙️ Context API or Redux for larger-scale state

---

Made for learning ❤️ React the modular, modern way.
