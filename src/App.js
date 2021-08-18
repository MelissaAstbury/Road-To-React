import "./App.css";
import JsxIntro from "./JsxIntro";
import Lists from "./Lists";
import Props from "./Props";

function App() {
  const stories = [
    {
      title: "React",
      author: "Mel",
      id: 1,
    },
    {
      title: "Redux",
      author: "Andy",
      id: 2,
    },
  ];
  return (
    <div className="App">
      <JsxIntro />
      <Lists />
      <Props stories={stories} />
    </div>
  );
}

export default App;
