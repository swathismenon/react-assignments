import "./App.css";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      {/* Render the person data directly in the App component */}
      <div>
        <h2>{person.name}</h2>
        <p>Age: {person.info.age}</p>
        <p>City: {person.info.city}</p>
        <p>Job: {person.info.job}</p>
        <h3>Hobbies:</h3>
        <ul>
          {person.info.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
