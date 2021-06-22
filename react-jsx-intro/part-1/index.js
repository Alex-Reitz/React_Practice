const FirstComponent = () => {
  return <h1>My very first component</h1>;
};

const NamedComponent = (name) => {
  return <p>My name is {name.name}</p>;
};

/* ReactDOM.render(
  <NamedComponent name="Alex" />,
  document.getElementById("root")
);

ReactDOM.render(<FirstComponent />, document.getElementById("root"));
 */

const App = () => {
  return (
    <div>
      <FirstComponent /> <NamedComponent name="Alex" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
