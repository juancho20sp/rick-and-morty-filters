import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./routes/Routes";

import Layout from "./layout/Layout";
// Vista principal
import Home from "./views/Home/Home";

// Vista de personaje
import Character from "./views/Character/Character";

// Vista del 404
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            {/* Vista principal */}
            <Route exact path={Routes.home.path} component={Home}></Route>

            {/* Vista de personaje */}
            <Route
              exact
              path={Routes.character.path}
              component={Character}
            ></Route>

            {/* Vista 404 */}
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
