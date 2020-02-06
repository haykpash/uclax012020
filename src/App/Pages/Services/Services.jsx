import React from 'react';
//import '../Pages.scss';
import './Services.scss';
import { serviceType } from './services.js';

const ServiceType = () => {
    return serviceType.map((serviceType, idx) => {
        return (
        <div  key={ idx } className={ 'ServiceType' }>
            <img src={ serviceType.img } alt={serviceType.name } />
            <h3>{ serviceType.name }</h3>
        </div>
        );
    });
}

const Services = () => {
    return (
        <div className = 'Services'>
            <h2>Services</h2>
            <ServiceType />
        </div>
    );
}

export default Services;