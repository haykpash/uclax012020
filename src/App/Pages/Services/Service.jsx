import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {

    const [showLightbox, setShowLightbox] = useState('false')

    const turnLightOn = () => {
        console.log('Turning ON');
        setShowLightbox('true');
    }
    const turnLightOff = () => {
        console.log('Turning OFF');
        setShowLightbox('false');
    }
    

    return (
        <div className='Service'>       
            <img 
                onClick={ turnLightOn }
                src={ props.servisceItem.image } 
                 alt={ props.servisceItem.title } />
         <h3>{ props.servisceItem.title }</h3>
         <Lightbox  
         show={ showLightbox }  
         turnLightOff={turnLightOff}
         imageURL={ props.servisceItem.image}
         imageAlt={ props.servisceItem.title}
         />
     </div>
     );
}

export default Service;
