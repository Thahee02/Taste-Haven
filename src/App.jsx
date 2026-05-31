import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReservationCTA from './components/ReservationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenReservation={openReservation} />
      
      {/* Main Sections */}
      <main>
        <Hero onOpenReservation={openReservation} />
        <About />
        <Menu onOpenReservation={openReservation} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ReservationCTA onOpenReservation={openReservation} />
        <Contact />
      </main>

      {/* Sticky Bottom Footer */}
      <Footer />
      
      {/* Interactive Reservation Modal Popup */}
      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </div>
  );
}
