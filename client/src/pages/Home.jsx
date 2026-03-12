import HomeHero from '../components/HomeHero';
import useScrollReveal from '../hooks/useScrollReveal';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectSection from '../components/ProjectSection';
import TeamMember from '../components/TeamMember';
import QuoteForm from '../components/QuoteForm';
import Testimonials from '../components/Testimonials';

const Home = () => {
    useScrollReveal();
    return (
        <>
            <HomeHero />
            <div className="reveal"><StatsSection /></div>
            <div className="reveal"><AboutSection /></div>
            <div className="reveal"><ServicesSection /></div>
            <div className="reveal"><WhyChooseUs /></div>
            <div className="reveal"><ProjectSection /></div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }} className="reveal">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <QuoteForm />
                        </div>
                        <div className="col-lg-6">
                            <TeamMember />
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    );
};

export default Home;
