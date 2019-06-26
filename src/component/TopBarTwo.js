import React from 'react';
import ReactDOM from 'react-dom'; 
import viewLrgIcn from '../component/viewLrgIcn.png';
import viewMedIcn from '../component/viewMedIcn.png';
import viewSmIcn from '../component/viewSmIcn.png';
import SimpleMenu from '../component/SimpleMenu';
import LocationSimpleMenu from '../component/locationMenu';






class TopBarTwo extends React.Component{
    render(){
        return(
            <div className="mainBar">
                <div>
                  <ViewOpt /> 
                </div> 
                <div className="sortMenu">
                <SortOpt />
                </div>
                <div className="locationMenu">
                <LocationSimpleMenu />
                </div>
            </div>
        )
    }
}


    const ViewOpt = () =>{
        return (
            <div className="viewCont">
                <div className='viewSection'>
                
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
            <div className="sortCont">
                <div className="sortSection">
                    <div>
                        <p id="sortText">SORT</p>
                    </div>
                    <div className="sortIcons">
                        <div className="dropDown">
                        <SimpleMenu />
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default TopBarTwo;