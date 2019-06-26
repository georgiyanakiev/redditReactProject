import React from 'react';
import ReactDOM from 'react-dom'; 
import './App.css';
import TopBarTwo from '../src/component/TopBarTwo';



class App extends React.Component{
    render() {
        return (
            <div className="main">
                <TopBarTwo />
            </div>
        )
    }
}

export default App;