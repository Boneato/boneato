import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import TeamCard from './modules/TeamCard';
import Lauren from '../imgs/Lauren.jpg';
import Cate from '../imgs/Cate.png';
import Anthony from '../imgs/Anthony.jpg';
import Laura from '../imgs/Laura.jpg';
import Brian from '../imgs/brian.jpg';
import Grid from '@material-ui/core/Grid';


export default class AboutPage extends Component {


    // renders a TeamCard for each team member, as well as a paragraph description of the project
    render() {

        let featuredCards = (
            <Grid container spacing={2} justify="flex-start">
                <Grid item xs={12} sm={6} md={4} xl><TeamCard FirstName='Anthony' LastName='Nguyen' Position='CEO' picture={Anthony} /></Grid>
                <Grid item xs={12} sm={6} md={4} xl><TeamCard FirstName='Lauren' LastName='Smith' Position='Project Manager' picture={Lauren} /></Grid>
                <Grid item xs={12} sm={6} md={4} xl><TeamCard FirstName='Laura' LastName='Freeman' Position='Designer' picture={Laura} /></Grid>
                <Grid item xs={12} sm={6} md={4} xl><TeamCard FirstName='Cate' LastName='Lyu' Position='CTO' picture={Cate} /></Grid>
                <Grid item xs={12} sm={6} md={4} xl><TeamCard FirstName='Brian' LastName='Uyeda' Position='CTO' picture={Brian} /></Grid>
            </Grid>
        );

        return (
            <div className="content-container">
                <Grid container direction="row" justify="center" spacing={3}>
                    <Grid item xs={12}>
                        <div className="page-title">About Us</div>
                        {featuredCards}
                        <p className="about-paragraph">
                            Thanks to easily accessible online cookbooks, home cooks from all around the country are able to 
                            quickly and efficiently explore recipes for foods that they've never tried before. However, a 
                            consequence of all of these different recipes online is that cooks will see an interesting recipe 
                            for a meal from a different culture, but that recipe will contain obscure and hard to obtain 
                            ingredients. This barrier might be a big enough of an annoyance to deter amatuer chefs from creating 
                            and experiencing other cultural cuisines. As of now, there is no direct solution that fixes this 
                            issue of uncertainty. That's where Bonito comes in. Bonito provides a crowd-sourced space for fellow 
                            home-cooks to share where they sourced hard-to-find ingredients.
                        </p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}