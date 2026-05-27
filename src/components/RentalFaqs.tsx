import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: "Rental Pricing",
    questions: [
      { 
        q: "How are daily rental rates calculated?", 
        a: "Rates are calculated on a 24-hour basis starting from the exact pickup time. A grace period of 1 hour is allowed, after which a new daily rate applies." 
      },
      { 
        q: "What is included in the base rental price?", 
        a: "The base rate includes the vehicle, standard insurance (CDW), and required safety equipment. Depending on the plan, it may also include limited or unlimited mileage." 
      },
    ]
  },
  {
    category: "Self-Drive",
    questions: [
      { 
        q: "What documents are required for a Self-Drive rental?", 
        a: "You must provide a valid National Driver’s Licence, a secondary form of ID (like a Passport or National ID card), and a valid credit card for the security deposit." 
      },
      { 
        q: "Are there age restrictions for Self-Drive?", 
        a: "Yes, you must be at least 25 years old and have held a valid driver’s licence for a minimum of 2 years to qualify for our Self-Drive option." 
      },
      { 
        q: "Does the insurance cover everything?", 
        a: "Standard CDW covers major damage with a deductible. You will be responsible for the deductible and any damage to tyres, glass, or the interior unless additional coverage is purchased." 
      }
    ]
  },
  {
    category: "Chauffeured Rental",
    questions: [
      { 
        q: "How do I request a chauffeur?", 
        a: "You can select the 'Chauffeured' option during the first step of the booking process. We will automatically assign a vetted driver to your reservation." 
      },
      { 
        q: "What are the working hours for a chauffeur?", 
        a: "A standard chauffeur shift is up to 10 hours per day. Any time beyond this is considered overtime and will be billed at a premium hourly rate." 
      },
      { 
        q: "Do I need to pay for the driver's meals or accommodation?", 
        a: "If the rental involves overnight travel outside the base city, the customer is responsible for providing or funding the driver's accommodation and a standard meal allowance." 
      }
    ]
  },
  {
    category: "Rental Agreement",
    questions: [
      { 
        q: "What are the four agreement checkboxes before booking?", 
        a: "They confirm that you understand the fuel policy, mileage limits (if any), acceptable usage of the vehicle, and our strict non-smoking policy." 
      },
      { 
        q: "Can I take the vehicle off-road?", 
        a: "Unless you have rented a designated 4x4 off-road vehicle and received explicit written permission, off-road driving is strictly prohibited." 
      }
    ]
  },
  {
    category: "Cancellation & Modification",
    questions: [
      { 
        q: "How can I change my rental dates?", 
        a: "You can modify your dates via the 'Manage Reservation' portal on our website. Rate changes may apply depending on vehicle availability and the notice given." 
      },
      { 
        q: "Is there a cancellation fee?", 
        a: "Cancellations made up to 24 hours before the scheduled pickup time are fully refunded. Late cancellations will incur a fee equivalent to a one-day rental rate." 
      }
    ]
  }
];

export default function RentalFaqs() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="bg-brand-maroon text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <HelpCircle className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Car Rental FAQs</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto font-medium">
            Everything you need to know about our rates, vehicles, and rental policies.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100">
          
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight pb-2 border-b-2 border-brand-yellow inline-block">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const currentIndex = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === currentIndex;
                  
                  return (
                    <div 
                      key={qIndex} 
                      className={`border ${isOpen ? 'border-brand-maroon' : 'border-gray-200'} transition-colors duration-200`}
                    >
                      <button
                        onClick={() => toggleAccordion(currentIndex)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                      >
                        <span className={`font-bold pr-4 ${isOpen ? 'text-brand-maroon' : 'text-gray-900'}`}>
                          {item.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-brand-maroon shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-5 pt-2 text-gray-600 font-medium animate-in fade-in slide-in-from-top-2 duration-200">
                          <p className="border-t border-gray-100 pt-4 text-justify leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-maroon-dark text-white py-16 mt-8">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white/80 font-medium mb-8">
            Our support team is available to assist you with any specific rental inquiries or special requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-maroon-dark font-bold uppercase tracking-widest text-sm transition-colors inline-flex items-center justify-center"
            >
              Contact Support
            </Link>
            <Link 
              to="/start-reservation" 
              className="px-8 py-3 border border-white hover:bg-white hover:text-brand-maroon-dark text-white font-bold uppercase tracking-widest text-sm transition-colors inline-flex items-center justify-center"
            >
              Start Reservation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
