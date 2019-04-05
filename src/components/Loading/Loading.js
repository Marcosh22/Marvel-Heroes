import React from 'react';
import './Loading.css';
import loading from '../../assets/images/spider.gif';

export class Loading extends React.Component {
    render() {
        return (
            <div id='loading-container'>
                <img src={loading} alt='loading...'/>
            </div>
        )
    }
} 