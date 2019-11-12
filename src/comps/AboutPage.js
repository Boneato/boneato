import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TeamCard from './modules/TeamCard';

export class AboutPage extends Component {
    
    
    // renders a TeamCard for each team member, as well as a paragraph description of the project
    render() {

        let featuredCards = (
            <div className='row'>
                <TeamCard FirstName='Anthony' LastName='Nguyen' Position='CEO' />
                <TeamCard FirstName='Lauren' LastName='Smith' Position='Project Manager' />
                <TeamCard FirstName='Laura' LastName='Freeman' Position='Designer' />
                <TeamCard FirstName='Cate' LastName='Lyu' Position='CTO' />
                <TeamCard FirstName='Brian' LastName='Uyeda' Position='CTO' />
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