// Node Packages do not need relative paths
import React from 'react';
import './Header.scss';

// This is my component
const Header = () => {
    return (
        <header className='Header'>Component Header</header>    
        );
};
// Every component must be exported
export default Header;
