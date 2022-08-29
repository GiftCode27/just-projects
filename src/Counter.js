const Counter = ({ counter, setCounter }) => {
  return (
    <div className="">
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
      <p>Total count: {counter}</p>
    </div>
  );
};

export default Counter;
