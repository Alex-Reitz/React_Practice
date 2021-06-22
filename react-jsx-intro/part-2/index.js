const Tweet = (props) => {
  return (
    <div>
      <p>This is our tweet</p>
      <p>This is the username: {props.username}</p>
      <p>This is the name of the author: {props.author}</p>
      <p>This is the date:{props.date}</p>
      <p>This is the message: {props.message}</p>
    </div>
  );
};

const App = () => (
  <div>
    <Tweet
      username="al123"
      author="Alex"
      date="22Jun2021"
      message="Our tweet is here"
    />
    <Tweet
      username="al123"
      author="Alex"
      date="22Jun2021"
      message="Our tweet is here"
    />
    <Tweet
      username="al123"
      author="Alex"
      date="22Jun2021"
      message="Our tweet is here"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
