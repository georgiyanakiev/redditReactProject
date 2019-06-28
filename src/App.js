import React from 'react';
import './App.css';
import TopBarTwo from './component/TopBarTwo';
import PostCard from './component/postCard';
import Topbar from './component/Topbar/Topbar';
import Topbar1 from './component/TopBar1/TopBar1';
import reddit from './component/reddit.png';
import reddit1 from './component/reddit1.png';
import Home from './component/redditHome.png';
import Popular from './component/popular.png';
import Populararrow from './component/populararrow.png';
import Scale from './component/scale.png';
import Oc from './component/oc.png';
import Login from './component/Login.png';
import Signup from './component/signup.png';
import SearchBar from './component/SearchBar/SearchBar';
import Topbarimage from './component/topbarimage.png';



class App extends React.Component{
    render() {
        return (
            <div className="main">
              
            
            <div className="App">
      <div className="Logo">
      <a href="https://www.reddit.com/" >
      <img src={reddit} alt="redditicon" height="25" />
      </a>
      </div>
      <div className="Topbarimage">
      <a href="https://www.reddit.com/" >
      <img src={Topbarimage} alt="Topbarimage"  />
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
      
      
      <SearchBar/>
        <Topbar1/>
      <Topbar />
      <TopBarTwo />
      <PostCard />
    </div>
    </div>
        )
    }
}

export default App;