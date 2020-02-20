import React, {useState, useEffect }from 'react';
import '../Pages.scss';
import './Services.scss';
import API from '../../common/API.js';



const ServicesList = () => {


    const [servisceItems, setservisceItems] = useState([]);
    useEffect(() => {
        // 2. retrueve the data from the server 
        API.get('services/gallery').then((result) => {
            // 3. updatye staffMember with date from servise
            console.log('Staff Sercer Response', result);
            setservisceItems(result.data);
        });
    },[])
    
    return servisceItems.map((servisceItem, dox) => {
        return (
           <div key={ dox }className='Service'>       
            <img src={ servisceItem.image } alt={ servisceItem.title } />
            <h3>{ servisceItem.title }</h3>
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