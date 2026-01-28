
import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            BLACK <span className="text-[#C5A059]">IRIS</span>
          </div>
          <div className={`hidden md:flex space-x-8 font-medium text-xs uppercase tracking-widest ${isScrolled ? 'text-stone-700' : 'text-stone-200'}`}>
            <a href="#home" className="hover:text-[#C5A059] transition">Home</a>
            <a href="#about" className="hover:text-[#C5A059] transition">About</a>
            <a href="#menu" className="hover:text-[#C5A059] transition">Menu</a>
            <a href="#gallery" className="hover:text-[#C5A059] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#C5A059] transition">Contact</a>
          </div>
          <a href="#menu" className="bg-[#1B2B24] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-all">
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
            alt="Black Iris Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 px-6 max-w-4xl">
          <span className="uppercase tracking-[0.4em] text-[#C5A059] font-bold mb-6 block animate-in fade-in slide-in-from-top-4 duration-700">
            Premium Coffee & Fine Dining
          </span>
          <h1 className="text-6xl md:text-8xl mb-8 serif animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Experience Elegance <br/> in Meknes
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-stone-200 font-light max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-300">
            From artisanal sunrise espressos to gourmet candlelit dinners, Black Iris brings luxury to your daily routine.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-in fade-in duration-1000 delay-500">
            <a href="#menu" className="bg-[#C5A059] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition shadow-lg shadow-[#C5A059]/30">
              View Our Menu
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-stone-900 transition shadow-xl">
              Reserve a Table
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
              alt="Coffee preparation" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C5A059] rounded-2xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C5A059] rounded-3xl z-0"></div>
          </div>
          <div>
            <span className="text-[#C5A059] font-bold uppercase tracking-widest block mb-4">Our Story</span>
            <h2 className="text-4xl md:text-5xl mb-8 serif text-stone-900 leading-tight">The Sanctuary of Gastronomy in Meknes</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
              Named after the rare and sophisticated flower, Black Iris was founded with a single mission: to provide Meknes with a haven of taste and comfort. We blend the warmth of traditional Moroccan hospitality with a sleek, modern aesthetic.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light">
              Whether you're here for our signature dark roast, a quick gourmet burger, or a relaxing evening pizza, every ingredient is sourced locally and prepared with precision.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-100">
              <div>
                <h4 className="font-bold text-2xl text-stone-900 mb-2 serif">Excellence</h4>
                <p className="text-stone-500 text-sm">Premium Arabica beans & artisanal local produce.</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-stone-900 mb-2 serif">Ambiance</h4>
                <p className="text-stone-500 text-sm">An elegant space designed for work and leisure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Component */}
      <Menu />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4 serif text-stone-900">Vibe & Atmosphere</h2>
                <p className="text-stone-500 font-light">A glimpse into your next favorite spot</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="overflow-hidden rounded-2xl group relative h-80">
                    <img src="https://images.unsplash.com/photo-1559925393-8be0ec41b50b?auto=format&fit=crop&q=80" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Café Vibe" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="overflow-hidden rounded-2xl group relative h-80">
                    <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Pastries" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="overflow-hidden rounded-2xl group relative h-80">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Dining area" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="overflow-hidden rounded-2xl group relative h-80">
                    <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Coffee art" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B2B24] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-5xl mb-8 serif text-stone-900 leading-tight">Find Us in the <br/> Heart of Meknes</h2>
            <p className="mb-12 text-stone-600 text-lg font-light leading-relaxed max-w-lg">
              Located on Avenue Mohammed V, we are your urban escape. Come for the coffee, stay for the experience.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Address</h4>
                  <p className="text-stone-500 font-light">Avenue Mohammed V, Meknes 50000, Morocco</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Phone</h4>
                  <p className="text-stone-500 font-light">+212 535 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#C5A059] shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Hours</h4>
                  <p className="text-stone-500 font-light">Open Daily: 07:00 AM — 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-xl shadow-stone-200 border border-stone-200">
            <h3 className="text-3xl serif mb-8 text-stone-900">Reserve or Inquire</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Name</label>
                        <input type="text" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none transition" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email</label>
                        <input type="email" className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none transition" placeholder="Email Address" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Subject</label>
                    <select className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none transition appearance-none">
                        <option>Table Reservation</option>
                        <option>Private Event</option>
                        <option>General Feedback</option>
                        <option>Business Partnership</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                    <textarea rows={5} className="w-full p-4 bg-stone-50 border border-stone-100 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none transition" placeholder="How can we assist you?"></textarea>
                </div>
                <button className="w-full bg-[#1B2B24] text-white py-5 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
                    Send Message
                </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-20 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-1">
            <div className="text-3xl font-bold tracking-tighter text-white mb-6">
              BLACK <span className="text-[#C5A059]">IRIS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-light">The pinnacle of café culture in Meknes. Experience the perfect blend of Moroccan spice and modern luxury.</p>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" className="hover:text-[#C5A059] transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-[#C5A059] transition"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-[#C5A059] transition"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#menu" className="hover:text-white transition">Full Menu</a></li>
              <li><a href="#contact" className="hover:text-white transition">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm mb-6 font-light">Join the circle for exclusive tasting invites.</p>
            <div className="flex">
                <input type="email" placeholder="Email" className="bg-stone-800 border-none p-3 rounded-l-lg w-full text-white text-sm outline-none" />
                <button className="bg-[#C5A059] text-white px-4 rounded-r-lg hover:bg-white hover:text-stone-900 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-stone-800 text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-medium">&copy; 2024 Black Iris Meknes. Design & Elegance Redefined.</p>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
