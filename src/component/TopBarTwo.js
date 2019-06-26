import React from 'react';
import ReactDOM from 'react-dom'; 
import viewLrgIcn from '../component/viewLrgIcn.png';
import viewMedIcn from '../component/viewMedIcn.png';
import viewSmIcn from '../component/viewSmIcn.png';
import fireIcn from '../component/fire.png';
import newIcn from '../component/newIcn.png';
import boltIcn from '../component/boltIcn.png';
import topIcn from '../component/topIcn.png';
import risingIcn from '../component/risingIcn.png';
import SimpleMenu from '../component/SimpleMenu';





class TopBarTwo extends React.Component{
    render(){
        return(
            <div className="mainBar">
                <div>
                  <ViewOpt /> 
                  <SortOpt />
                </div> 
                <div className="sortMenu">
                </div>
            </div>
        )
    }
}


    const ViewOpt = () =>{
        return (
            <div className="viewCont">
                <div className='viewSection'>
                <SimpleMenu />
                    <div>
                        <p id="viewText">VIEW</p>
                    </div>
                    <div className='viewIcons'>
                        <img src={viewLrgIcn} id="viewLrgIcn"  /> 
                        <img src={viewMedIcn} id="viewMedIcn"/>
                        <img src={viewSmIcn} id="viewSmIcn"/>
                    </div>
                
                </div>
                
            </div>
        )
    }
    const SortOpt = () =>{
        return (
            <div className="sortSection">
                <div>
                    <p id="sortText">SORT</p>
                </div>
                <div className="sortIcons">
                    <div className="dropDown">
                        <ul className="menuList">
                            <li><img src={fireIcn} />Hot</li>
                            <li><img src={newIcn} />New</li>
                            <li><img src={boltIcn} />Controversial</li>
                            <li><img src={topIcn} />Top</li>
                            <li><img src={risingIcn} />Rising</li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        )
    }


export default TopBarTwo;