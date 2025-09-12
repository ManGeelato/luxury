import React from 'react';
import { Star, Heart, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Luxury Accommodations
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Experience unparalleled luxury at our two premium properties in Randburg. 
              We offer sophisticated self-catering accommodations with impeccable service 
              and attention to detail.
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-slate-300 ml-2">Five-Star Experience</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Properties</h4>
            <div className="space-y-3">
              <div>
                <p className="text-amber-400 font-semibold">Freedom Luxury</p>
                <p className="text-slate-300 text-sm">26 Countesses Avenue</p>
              </div>
              <div>
                <p className="text-amber-400 font-semibold">Wakanda Luxury</p>
                <p className="text-slate-300 text-sm">36 Basil Street</p>
              </div>
              <p className="text-slate-300 text-sm">Randburg, Johannesburg</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+27622738240"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone size={16} />
                +27 (0) 62 273 8240
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={16} />
                Randburg, Johannesburg
              </div>
            </div>

            <div className="mt-6">
              <a
                href="tel:+27622738240"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Phone size={14} />
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> for luxury hospitality
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © 2025 Luxury Accommodations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;