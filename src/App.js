import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const mappingFuction = (item) => {
    return (
      <ul className="list-group">
        <li className="list-group-item">{item}</li>
      </ul>
    );
  };
  const originalData = [
    "Mars",
    "Venus",
    "Jupiter",
    "Earth",
    "Saturn",
    "Neptune",
  ];
  const htmlList = originalData.map(mappingFuction);
  return htmlList;
}

export default App;
