import { Switch, Route } from "react-router-dom";

import Keyboard from "./pages/Keyboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Keyboard} />
    </Switch>
  );
};

export default Routes;
