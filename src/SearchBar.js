import React, { Component } from 'react'


export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'most-viewed'
        };
    };
    

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
          return 'active';
        }
        return '';
    };

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
        };

  
    handleTermChange(e) {
        this.setState({term: e.target.value});
        };
        
    handleLocationChange(e) {
        this.setState({location: e.target.value});
        };

    handleSearch(e) {
        e.preventDefault();
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
    }


    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li 
            key={ sortByOptionValue } 
            className={this.getSortByClass(sortByOptionValue) }
            onClick={ this.handleSortByChange.bind(this.sortByOptionValue) } >  
                { sortByOption } 
            </li>;
        })
    };

    render() {
        return (
            <div className='SearchBar'>
                <div class="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>

                <div class="SearchBar-fields">
                    <input onChange={ this.handleTermChange } placeholder="Search Businesses" />
                    <input onChange={ this.handleLocationChange }placeholder="Where?" />
                    </div> 
                    <div class="SearchBar-submit">
                    <a onClick={ this.handleSearch }>Let's Go</a>
                </div>
            </div>
        )
    }
};
