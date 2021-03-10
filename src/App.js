import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Background from "./Prospects/Background";
import Gideon from "./Prospects/Gideon";

function App({ tt }) {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/prospects" exact component={Gideon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
