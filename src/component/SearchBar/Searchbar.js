import React, {Component} from './node_modules/react';
import './Searchbar.css';

class Searchbar extends Component { 

    state = { 
        search: '',
    };

    updateSearch = search => {
        this.setState({ search: search });
    };
  
    render() {
        const { search } = this.state;
        return (
            <input className="Searchbar" 
                placeholder="Search reddit..."
                onChangeText={this.updateSearch}
                value={search}
            />
            
        );
    }
}
export default Searchbar;