import React, {useState, useEffect }from 'react';
import '../Pages.scss';
import './Services.scss';
import API from '../../common/API.js';
import Categories from './Categories.jsx';
import ServiceList from './Servicelist.jsx';

const Services = () => {
    const [serviceArrey, setserviceArrey] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currCat, setCurrCat] = useState('All');

    useEffect(() => {
        // 2. retrueve the data from the server 
        API.get('services/categories').then((result) => {
            // 3. updatye serviceMember with date from servise
            console.log('Categories Response', result);
            setCategories(result.data);
        });
        API.get('services/gallery').then((result) => {
            // 3. updatye serviceMember with date from servise
            console.log('Services Server Response', result);
            setserviceArrey(result.data);
        });
    },[]);

    return (
        <div className = 'Pages Services'>
            <h2>Services</h2>
            <Categories 
                categories={categories} 
                currCat={currCat}
                setCurrCat={setCurrCat}
                />
            <div className='container'>
                <ServiceList 
                serviceArrey={serviceArrey} 
                currCat={currCat}
                />
            </div>
        </div>
    );
}

export default Services;