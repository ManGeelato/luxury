import React from 'react';
import { Phone, MapPin, Mail, Star, Clock, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-amber-400">Us</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to book your luxury experience? Get in touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300">For all bookings and inquiries</p>
                <a 
                  href="tel:+27622738240"
                  className="text-amber-400 hover:text-amber-300 text-lg font-semibold transition-colors"
                >
                  +27 (0) 62 273 8240
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Locations</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-amber-400 font-semibold">Freedom Luxury</p>
                    <p className="text-slate-300">26 Countesses Avenue, Randburg, Johannesburg</p>
                  </div>
                  <div>
                    <p className="text-amber-400 font-semibold">Wakanda Luxury</p>
                    <p className="text-slate-300">36 Basil Street, Randburg, Johannesburg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Availability</h3>
                <p className="text-slate-300">Contact us anytime for bookings</p>
                <p className="text-amber-400">24/7 Support Available</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Book Your Luxury Stay
              </h3>
              <p className="text-slate-600">
                Experience unparalleled comfort and elegance
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-50 rounded-lg p-4">
                  <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-semibold">Self-Catering</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-semibold">5-Star Luxury</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-sm text-slate-600 font-semibold">Prime Location</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <a
                  href="tel:+27622738240"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now to Book
                </a>
                
                <p className="text-slate-500 text-sm">
                  Speak directly with our team to secure your reservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;