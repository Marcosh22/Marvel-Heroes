import React from 'react';
import './Search.css';

export class Search extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.search(document.getElementById('search-content').value);
    }
    
    render() {

        return (
            <div id="searchContainer">
                <div className="container">
                    <form action='#'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Type your hero's name" aria-describedby="basic-addon2" id="search-content"/>
                            <div className="input-group-append">
                                <button onClick={this.handleClick} className="btn btn-danger" type="button">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}