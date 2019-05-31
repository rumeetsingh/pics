import React from 'react';


class SearchBar extends React.Component {

    state = { term:'' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({ term:event.target.value });
    };

    countImages = (count) => {
        if(count>0){
            return <small>{count} Results Found</small>;
        }
    };

    render() {
        return (
            <div style={{height:'130px'}}>
                <form onSubmit={this.onFormSubmit} >
                <label htmlFor="input-grp">Image Search</label>
                    <div id="input-grp" className="input-group">
                        <input autoComplete="off" type="text" value={this.state.term} className="form-control" onChange={this.onInputChange} />
                        <div class="input-group-append">
                            <button  type="submit" class="btn btn-primary">Search</button>
                        </div>
                    </div>
                    { this.countImages(this.props.imgCount) }
                </form>
            </div>
        );
    };
}


export default SearchBar;