
import React from 'react';
import { MENU_ITEMS, COLORS } from '../constants';

const Menu: React.FC = () => {
  const categories = ['Coffee & Breakfast', 'Main Plates', 'Sweets & Pizzas'] as const;

  return (
    <section id="menu" className="py-24 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-bold uppercase tracking-widest block mb-2">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl mb-6 serif">A Curated Gastronomy</h2>
          <div className="w-24 h-1 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="group">
              <h3 className="text-2xl text-[#C5A059] mb-8 border-b border-stone-800 pb-4 serif flex items-center gap-3">
                {cat}
              </h3>
              <div className="space-y-8">
                {MENU_ITEMS.filter(item => item.category === cat).map((item) => (
                  <div key={item.id} className="relative pb-6 border-b border-stone-800/50 last:border-0 hover:translate-x-1 transition-transform">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-semibold text-stone-100">{item.name}</h4>
                      <span className="text-[#C5A059] font-bold ml-4 whitespace-nowrap">{item.price} MAD</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-stone-500 italic mb-8">All prices are inclusive of taxes. Fresh ingredients delivered daily from local farms.</p>
            <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                Download Full Menu PDF
            </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
