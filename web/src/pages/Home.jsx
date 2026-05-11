import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
