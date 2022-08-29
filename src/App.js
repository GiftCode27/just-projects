import { Fragment, useState } from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const Counter = () => {
    return (
      <Fragment>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          +
        </button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
          -
        </button>
        <p>Total count: {counter}</p>
      </Fragment>
    );
  };

  const User = ({ name, age }) => {
    return (
      <>
        <p>
          Username: {name}, age: {age}
        </p>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <User name="Bolaji" age={10} />
        <User name="Von" />
        <User name="Time is gone" />
        <User name="test" />
        <Counter />
      </header>
    </div>
  );
};

export default App;
