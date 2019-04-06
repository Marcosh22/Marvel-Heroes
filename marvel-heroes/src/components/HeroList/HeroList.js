import React from 'react';
import './HeroList.css';
import  { Hero } from '../Hero/Hero';
import { Loading } from '../Loading/Loading';

export class HeroList extends React.Component {

    constructor(props){
        super(props);

        this.state = {loading: true}
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        if(!this.props.loading) {
            return <Loading />;
        }
        else {
            return (
                <div id='hero-list'>
                    <div className='container'>
                        <div className='row d-flex'>
                            {
                                this.props.heroes.map(hero => {
                                    return (
                                        <div key={hero.id} className='col-12 col-sm-4 col-lg-3 hero-container'> { <Hero hero={hero}/> } </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}
