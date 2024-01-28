import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
    const [currentTab, handleTabChange] = useState('About');

    const renderTab = () => {
        if (currentTab === 'About') {
            return <About />;
        }
        if (currentTab === 'Contact') {
            return <Contact />;
        }
        if (currentTab === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentTab === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };
    return (
        <>
            <Helmet>
                <title>Maxfield Kraus' Portfolio | {currentTab} </title>
            </Helmet>
            <Header 
                currentTab={currentTab} handleTabChange={handleTabChange}>  
            </Header>
            <main>
                {renderTab()}
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
