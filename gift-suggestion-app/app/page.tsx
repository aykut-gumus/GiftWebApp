import HeroSection from './components/HeroSection';
import FloatingGifts from './components/FloatingGifts';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-800 to-orange-900">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large Gradient Circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/25 to-purple-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Additional Colorful Orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
        
        {/* Animated Particles Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
          <div className="absolute bottom-40 left-40 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-35"></div>
        </div>
      </div>
      
      {/* Floating Gift Icons */}
      <FloatingGifts />
      
      {/* Content */}
      <div className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="footer">
          <Footer />
        </section>
      </div>
    </main>
  );
}
