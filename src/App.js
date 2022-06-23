// import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Screens/Home/Home';
import Foorter from './footer/Footer';
function App() {
  return (
    //Router
    <Router>
      <div>
        <Header></Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>

        <Foorter></Foorter>
      </div>

    </Router>
    // <div className="App">
    //   <Header></Header>
    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;