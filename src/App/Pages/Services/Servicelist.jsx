
import React from 'react';

import Service from './Service.jsx';

const ServicesList = ({serviceArrey, currCat}) => {
    return serviceArrey.map((serviceItem, dix) => {

        if (currCat === 'All' || currCat === serviceItem.category) {
            return (
                <Service key={ dix } serviceItem={ serviceItem } />
            );
        } 
    });
}

export default ServicesList;