import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HeaderBanner from './components/HeaderBanner';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import TeamMember from './components/TeamMember';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Navbar />
            <HeaderBanner />
            <main>
                <StatsSection />
                <AboutSection />
                <TeamMember />
            </main>
            <Footer />
        </div>
    );
}

export default App;
