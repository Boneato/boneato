import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import TeamCard from './modules/TeamCard';
import Lauren from '../imgs/Lauren.jpg';
import Cate from '../imgs/Cate.png';
import Anthony from '../imgs/Anthony.jpg';
import Laura from '../imgs/Laura.jpg';
import Brian from '../imgs/brian.jpg';


export default class AboutPage extends Component {
    
    
    // renders a TeamCard for each team member, as well as a paragraph description of the project
    render() {

        let featuredCards = (
            <div className='row'>
                <TeamCard FirstName='Anthony' LastName='Nguyen' Position='CEO' picture={Anthony}/>
                <TeamCard FirstName='Lauren' LastName='Smith' Position='Project Manager' picture={Lauren}/>
                <TeamCard FirstName='Laura' LastName='Freeman' Position='Designer' picture={Laura}/>
                <TeamCard FirstName='Cate' LastName='Lyu' Position='CTO' picture={Cate}/>
                <TeamCard FirstName='Brian' LastName='Uyeda' Position='CTO' picture={Brian}/>
            </div>
        );

        return (
            <div>
                Paragraph about our site. This also could go after the cards.
                {featuredCards}
            </div>
        )
    }
}