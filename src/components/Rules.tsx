import React from 'react';
import { CheckCircle, XCircle, DollarSign, Shield } from 'lucide-react';

const Rules = () => {
  const rules = [
    {
      type: 'allowed',
      icon: CheckCircle,
      title: 'Only booked guests allowed',
      description: 'Exclusive access for registered guests only'
    },
    {
      type: 'fee',
      icon: DollarSign,
      title: 'Extra guests: R500 each',
      description: 'Additional charges apply for unregistered guests'
    },
    {
      type: 'responsibility',
      icon: Shield,
      title: 'Guests are liable for any damages',
      description: 'Please treat our property with care and respect'
    },
    {
      type: 'forbidden',
      icon: XCircle,
      title: 'No smoking indoors',
      description: 'Smoking is strictly prohibited inside all rooms'
    },
    {
      type: 'forbidden',
      icon: XCircle,
      title: 'No loud music',
      description: 'Please keep noise levels considerate of other guests'
    },
    {
      type: 'forbidden',
      icon: XCircle,
      title: 'No food or drinks in bedrooms',
      description: 'Meals and beverages should be enjoyed in designated areas'
    },
    {
      type: 'required',
      icon: CheckCircle,
      title: 'Keep the place clean at all times',
      description: 'Help us maintain our high standards of cleanliness'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'allowed':
      case 'required':
        return 'text-green-600';
      case 'forbidden':
        return 'text-red-600';
      case 'fee':
        return 'text-amber-600';
      case 'responsibility':
        return 'text-blue-600';
      default:
        return 'text-slate-600';
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'allowed':
      case 'required':
        return 'bg-green-50 border-green-200';
      case 'forbidden':
        return 'bg-red-50 border-red-200';
      case 'fee':
        return 'bg-amber-50 border-amber-200';
      case 'responsibility':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-slate-50 border-slate-200';
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            House <span className="text-amber-600">Rules</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Please review our policies to ensure a pleasant stay for all guests
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div key={index} className={`border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${getBgColor(rule.type)}`}>
              <div className="flex items-start gap-4">
                <rule.icon className={`w-6 h-6 mt-1 flex-shrink-0 ${getIconColor(rule.type)}`} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-slate-600 mb-6">
              Contact us today to book your unforgettable stay at either of our premium properties
            </p>
            <a
              href="tel:+27622738240"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              <Shield size={20} />
              Book Now: +27 (0) 62 273 8240
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;