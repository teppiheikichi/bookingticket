import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";

function App() {
  return (

    <BrowserRouter>
    <Header />
      <Switch>
        <div className="App">
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* Route mặc định để dưới cùng của ứng dụng */}
          <Route exactpath="/" component={Home} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
