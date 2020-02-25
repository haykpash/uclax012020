import React, {useState, useEffect }from 'react';
import '../Pages.scss';
import './Services.scss';
import API from '../../common/API.js';

import Service from './Service.jsx';



const ServicesList = () => {


    const [servisceItems, setservisceItems] = useState([]);
    
    useEffect(() => {
        // 2. retrueve the data from the server 
        API.get('services/gallery').then((result) => {
            // 3. updatye serviceMember with date from servise
            console.log('Services Server Response', result);
            setservisceItems(result.data);
        });
    },[])
    
    return servisceItems.map((servisceItem, dox) => {
        return (
          <Service key={ dox } servisceItem={ servisceItem} />
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