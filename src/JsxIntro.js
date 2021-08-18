// Display a variable
const title = "React";

// Display an object
const welcome = {
  greeting: "Hello",
  title: "Melissa",
};

// Display a function
const getHeading = (heading) => {
  return heading;
};

const JsxIntro = () => {
  // Synthetic event - responds to user interaction
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <h2>
        {welcome.greeting} {""}
        {welcome.title}
      </h2>
      <h3>{getHeading("Heading is here")}</h3>
    </div>
  );
};

export default JsxIntro;
