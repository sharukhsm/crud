import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        {/* Navbar */}
        <div
          class="ui purple two item inverted menu"
          style={{ marginTop: 200 }}
        >
          <a href="/create" class="active item">
            Create
          </a>
          <a href="/read" class="item">
            Read
          </a>
        </div>

        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 50 }}>
          <Route exact path="/read" component={Read} />
        </div>

        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
