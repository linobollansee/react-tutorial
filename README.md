<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 2a180bc1c0ac7f85bb5cac134ce768a571e7bc61
