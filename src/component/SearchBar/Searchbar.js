import React, {Component} from 'react';

import './SearchBar.css';


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
            <input className="SearchBar" 
                placeholder="Search reddit..."
                onChangeText={this.updateSearch}
                value={search}
            />
            
        );
    }
}
export default Searchbar;