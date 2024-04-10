import { BrowserRouter , Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TopRated from "./components/TopRated"
import NotFound from "./components/NotFound"
import Upcoming from "./components/Upcoming"
import DetailedMovie from "./components/DetailedMovie"

import "./App.css";

const App = () => (
  <div className="container-holding-movies">
  <BrowserRouter >
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/:id" component={DetailedMovie} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  </div>
);

export default App;
