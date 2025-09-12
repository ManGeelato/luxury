import React from 'react';
import { Home, Users, Gamepad2, Bed, Utensils, Wifi, Beer, Camera, Shield } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Gamepad2,
      title: 'Recreational Rooms',
      description: 'Entertainment spaces designed for relaxation and fun'
    },
    {
      icon: Bed,
      title: 'Luxury Rooms',
      description: 'Elegantly appointed bedrooms with premium amenities'
    },
    {
      icon: Users,
      title: 'Family Rooms',
      description: 'Spacious accommodations perfect for families and groups'
    },
    {
      icon: Utensils,
      title: 'Self-Catering',
      description: 'Fully equipped kitchens for your convenience'
    }
  ];

  const extras = [
    {
      icon: Wifi,
      title: '24/7 WiFi',
      description: 'High-speed internet throughout the property'
    },
    {
      icon: Beer,
      title: 'Refreshments',
      description: 'Ciders and beers available (R28-R30)'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture your special moments with our photographer'
    },
    {
      icon: Shield,
      title: 'Premium Service',
      description: 'Impeccable service and attention to detail'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            World-Class <span className="text-amber-600">Facilities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for an unforgettable luxury experience
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Facilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-colors duration-300">
                  <facility.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">{facility.title}</h4>
                <p className="text-slate-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Premium Extras</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extras.map((extra, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <extra.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{extra.title}</h4>
                <p className="text-slate-600 text-sm">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;