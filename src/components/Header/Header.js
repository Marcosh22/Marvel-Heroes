import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.png';

export class Header extends React.Component {
    render() {
        return (
            <div id='header-container'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div id='logo-container'>
                            <img className='img-fluid' src={Logo} alt='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}