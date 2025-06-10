import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <Layout>
                <Hero />
                <Events />
                <Schedule />
                <Gallery />
                <Sponsors />
                <Team />
                <Contact />
            </Layout>
        </MotionConfig>
    );
}

export default App;
