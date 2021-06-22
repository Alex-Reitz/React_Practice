const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>{props.name.length >= 8 ? props.name.slice(0, 8) : props.name}</p>
      <h3>{props.age > 18 ? "Please go vote" : "No one to vote for"}</h3>
      <p>Hobbies Include</p>
      <ul>
        {props.hobbies.map((hobby) => (
          <li key={props.age}>{hobby}</li>
        ))}
      </ul>
      <br />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Person
        age="20"
        name="Johnson"
        hobbies={["running", "texting", "working"]}
      />
      <Person
        age="17"
        name="bob"
        hobbies={["lifting", "jogging", "rock climbing"]}
      />
      <Person
        age="82"
        name="Hellosddsfsadf"
        hobbies={["twitter", "facebook", "youtube"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
