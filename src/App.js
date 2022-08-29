import { useState } from "react";

import "./App.css";
import Counter from "./Counter";
import User from "./User";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <User name="Bolaji" age={10} />
        <User name="Von" />
        <User name="Time is gone" />
        <User name="test" />
        <Counter counter={counter} setCounter={setCounter} />
      </header>
    </div>
  );
};

export default App;

// assignment in JS
// variables
// objects (create, access, dot notation, indexes )
// arrays (push,pop, unshift, shift, indexes )
// object or array destructing
// ternary operator && spread operator && optional chaining
// array methods (map, find, findIndex)
// functions, arrow functions
// callbacks
// events
//

// assignment in react
// List of all the react hooks
// explain useState, and useEffect
