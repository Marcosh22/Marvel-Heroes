import React from 'react';
import './Hero.css';

export class Hero extends React.Component {

    handleClick(e) {
        console.log('Testando....');
        return <h1>TESTANDO.....</h1>
    }

    render() {
        return (
            <div className='hero'>
                <div className='image-container'>
                    <div>
                        <img onClick={this.handleClick} src={`${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`} alt={this.props.hero.name} className='img-thumbnail'/>
                    </div>
                </div>
                <h2 className='hero-name'>{this.props.hero.name}</h2>
            </div>
        )
    }
}