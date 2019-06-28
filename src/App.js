import React from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';
import TopBarTwo from '../src/component/TopBarTwo';
import PostCard from '../src/component/postCard';



class App extends React.Component{
    render() {
        return (
            <div className="main">
                <div>
                    <TopBarTwo />
                </div>
                <div>   
                    <PostCard />
                </div>  
                {/* <div> 
                    <PostCard />
                </div>   */}
            </div>
        )
    }
}

export default App;