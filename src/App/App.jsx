// React libreary
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// App compaonent Styles
import './App.scss';

// My Component 
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';
import Footer from'./Footer/Footer.jsx';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Nav />
                <Main />
                <Footer />
            </div>
        </Router>
    )
}

export default App;