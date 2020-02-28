import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {

    const [showLightbox, setShowLightbox] = useState('false');

    const turnLightOn = () => {
        setShowLightbox('true');
    }
    const turnLightOff = () => {
        setShowLightbox('false');
    }
    
    
    return (
        <div className='Service'>       
            <img 
                onClick={ turnLightOn }
                src={ props.serviceItem.image } 
                alt={ props.serviceItem.title } />
        <h3>{props.serviceItem.title}: Category: {props.serviceItem.category}</h3>
        <Lightbox  
            show={ showLightbox }  
            turnLightOff={turnLightOff}
            imageURL={ props.serviceItem.image}
            imageAlt={ props.serviceItem.title}
        />
    </div>
    );
}

export default Service;
