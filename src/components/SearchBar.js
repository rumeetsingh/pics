import React from 'react';


class SearchBar extends React.Component {

    state = { term:'' };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({ term:event.target.value });
    };

    showingResults() {
        if(this.state.term){
            return <small>Search Results for: {this.state.term}</small>;
        };
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} >
                    <div className="form-group">
                        <label htmlFor="search-text-input">Image Search</label>
                        <input autoComplete="off" type="text" value={this.state.term} className="form-control" id="search-text-input" onChange={this.onInputChange} />
                        { this.showingResults() }
                    </div>
                </form>
            </div>
        );
    };
};


export default SearchBar;