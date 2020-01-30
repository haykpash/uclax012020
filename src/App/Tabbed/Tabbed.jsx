import React, { useState } from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image: '/img/MissionVision/about.jpg',
        title: 'About',
        text: 'This is the About text content.',
    },
    {
        image: '/img/MissionVision/mission.jpg',
        title: 'Mission',
        text: 'This is the Mission text content.',
    },
    {
        image: '/img/MissionVision/vision.jpg',
        title: 'Vision',
        text: 'This is the Vision text content.',
    },
];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState(tabItems[1]);

    return (
         <div className={ 'Tabbed' }>

        <div className="tabs">
            <div onClick={ () => { setCurrentTab(tabItems[0]) } } className="tab">About</div>
            <div onClick={ () => { setCurrentTab(tabItems[1]) } } className="tab">Mission</div>
            <div onClick={ () => { setCurrentTab(tabItems[2]) } } className="tab">Version</div>
        </div>

        <div className="content">
             <img src={ currentTab.image }/>
             <h2>{ currentTab.title }</h2>
             <p>{ currentTab.text }</p>

        </div>
    </div>
     )
}

export default Tabbed;