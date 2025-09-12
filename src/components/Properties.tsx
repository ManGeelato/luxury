import React from 'react';
import { MapPin, Star, Wifi, Users, Camera, Beer } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      name: 'Freedom Luxury Accommodation',
      address: '26 Countesses Avenue, Randburg, Johannesburg',
      description: 'Nestled in the city of Randburg, our opulent hotel offers guests a self catering unforgettable experience of refined luxury and impeccable service.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      rooms: ['Recreational Room', 'Bedroom', 'Family Room'],
      facilities: ['Recreational Rooms', 'Luxury Room', 'Family Room'],
      extras: [
        { icon: Wifi, text: '24/7 WiFi' },
        { icon: Beer, text: 'Ciders @R30' },
        { icon: Beer, text: 'Beers @R28' },
        { icon: Camera, text: 'Professional Photographer' }
      ]
    },
    {
      name: 'Wakanda Luxury Accommodation',
      address: '36 Basil Street, Randburg, Johannesburg',
      description: 'Experience an exquisite stay in our opulent luxury hotel, offering unparalleled self-catering service, elegance, and indulgence.',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      rooms: ['Luxury Bedroom', 'Modern Kitchen', 'Elegant Dining Area'],
      facilities: ['Recreational Rooms', 'Luxury Rooms', 'Family Rooms'],
      extras: [
        { icon: Wifi, text: '24/7 WiFi' },
        { icon: Beer, text: 'Ciders @R30' },
        { icon: Beer, text: 'Beers @R30' },
        { icon: Camera, text: 'Professional Photographer' }
      ]
    }
  ];

  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-amber-600">Properties</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Two distinct luxury experiences, both offering the finest in self-catering accommodation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {property.name}
                </h3>
                <div className="flex items-center gap-2 text-amber-600 mb-4">
                  <MapPin size={18} />
                  <span className="text-slate-600">{property.address}</span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {property.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Facilities</h4>
                    <ul className="space-y-2">
                      {property.facilities.map((facility, i) => (
                        <li key={i} className="text-slate-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Extras</h4>
                    <div className="space-y-2">
                      {property.extras.map((extra, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600">
                          <extra.icon size={16} className="text-amber-600" />
                          <span className="text-sm">{extra.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <a
                    href="tel:+27622738240"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Book This Property
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;