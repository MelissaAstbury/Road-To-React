// Display a variable
const title = 'React';

// Display an object
const welcome = {
  greeting: 'Hello',
  title: 'Melissa',
};

// Display a function
const getHeading = (heading) => {
  return heading;
};

const JsxIntro = () => {
  return (
    <div className="App">
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <h2>
        {welcome.greeting} {''}
        {welcome.title}
      </h2>
      <h3>{getHeading('Heading is here')}</h3>
    </div>
  );
};

export default JsxIntro;
