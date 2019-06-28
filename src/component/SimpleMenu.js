import React from 'react';

import fireIcn from '../component/fire.png';
import newIcn from '../component/newIcn.png';
import boltIcn from '../component/boltIcn.png';
import topIcn from '../component/topIcn.png';
import risingIcn from '../component/risingIcn.png';


class SimpleMenu extends React.Component {
     
    state = {
        value: null,
        active: 'hot'
    }

render() {

    return (
        <div>

                    <div>
                    <img className="sortMenuIcns" src={fireIcn} 
                    />Hot
                    </div>

                    <div>
                    <img className="sortMenuIcns" src={newIcn} 
                    />New
                    </div>

                    <div>
                    <img className="sortMenuIcns" src={boltIcn} 
                    />Controversial
                    </div>

                    <div>
                    <img className="sortMenuIcns" src={topIcn} 
                    />Top
                    </div>

                    <div>
                    <img className="sortMenuIcns" src={risingIcn} 
                    />Rising
                    </div>
            
        </div>
    );
}
 }
export default SimpleMenu;