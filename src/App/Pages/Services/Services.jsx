import React from 'react';
import '../Pages.scss';
import './Services.scss';
import { timbuktuArrey } from './servicesArrey.js';

const ServicesList = () => {
    console.log('timbuktuArrey', timbuktuArrey);
    return timbuktuArrey.map((singleService, idx) => {
        return (
           <div className='Service'>       
            <img src={ singleService.img } alt={ singleService.title } />
            <h3>{ singleService.name }</h3>
        </div>
        );
    });
}

const Services = () => {
    return (
        <div className = 'Pages Services'>
            <h2>Services</h2>
            <div className='container'>
                <ServicesList />
            </div>
        </div>
    );
}

export default Services;