import React, {Component} from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Topbar1 from './components/TopBar1/TopBar1';
import reddit from './components/reddit.png';
import reddit1 from './components/reddit1.png';
import Home from './components/redditHome.png';
import Popular from './components/popular.png';
import Populararrow from './components/populararrow.png';
import Scale from './components/scale.png';
import Oc from './components/oc.png';
import Login from './components/Login.png';
import Signup from './components/signup.png';
import Searchbar from './components/Searchbar/Searchbar';



class App extends Component { 
  
  
  render() {
  return (
    <div className="App">
      <div className="Logo">
      <a href="https://www.reddit.com/" >
      <img src={reddit} alt="redditicon" height="25" />
      </a>
      </div>
      <div className="Logo1">
      <a href="https://www.reddit.com/">
      <img src={reddit1} alt="redditicon" height="25"  />
      </a>
      </div>
      <div className="Home">
      <a href="https://www.reddit.com/">
      <img src={Home} alt="homeicon" height="25"  />
      </a>
      </div>
      <div className="Popular">
      <a href="https://www.reddit.com/">
      <img src={Popular} alt="popularicon" height="20"  />
      </a>
      </div>
      <div className="Populararrow">
      <a href="https://www.reddit.com/">
      <img src={Populararrow} alt="populararrow" height="20"  />
      </a>
      </div>
      <div className="Scale">
      <a href="https://www.reddit.com/">
      <img src={Scale} alt="Scalearrow" height="20"  />
      </a>
      </div>
      <div className="Oc">
      <a href="https://www.reddit.com/">
      <img src={Oc} alt="Original Content" height="20"  />
      </a>
      </div>
      <div className="Login">
      <a href="https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2Fnew%2F">
      <img src={Login} alt="Login" height="37"  />
      </a>
      </div>
      <div className="Signup">
      <a href="https://www.reddit.com/register/?dest=https%3A%2F%2Fwww.reddit.com%2Fnew%2F">
      <img src={Signup} alt="Signup" height="35"  />
      </a>
      </div>
      
      <Searchbar/>
      <Topbar1/>
      <Topbar />
    </div>
  );
}
}
export default App;
