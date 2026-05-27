import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingProgress from './BookingProgress';
import { Shield, ShieldAlert, Wrench, Baby, Map, Wifi, ChevronDown, ChevronUp } from 'lucide-react';

interface ExtraItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  perDay: boolean;
  icon: React.ReactNode;
}

export default function BookingStep4() {
  const navigate = useNavigate();
  const basePrice = 450; // Mock base price passed from step 3
  
  const [addedExtras, setAddedExtras] = useState<Record<string, boolean>>({});
  const [openSections, setOpenSections] = useState({ protection: true, equipment: true });
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);

  const protectionItems: ExtraItem[] = [
    { id: 'cdw', name: 'Collision Damage Waiver', desc: 'Limits financial liability for vehicle body damage.', price: 50, perDay: true, icon: <Shield /> },
    { id: 'pec', name: 'Personal Effects Coverage', desc: 'Protects laptops, cameras, and personal items in vehicle.', price: 20, perDay: true, icon: <ShieldAlert /> },
    { id: 'rsa', name: 'Roadside Assistance Plus', desc: '24/7 premium towing, flat tire, and lockout service.', price: 15, perDay: true, icon: <Wrench /> },
  ];

  const equipmentItems: ExtraItem[] = [
    { id: 'child', name: 'Child Safety Seat', desc: 'Standard toddler seat meeting safety regulations.', price: 30, perDay: true, icon: <Baby /> },
    { id: 'gps', name: 'GPS Navigation System', desc: 'Standalone Garmin unit with preloaded regional maps.', price: 25, perDay: true, icon: <Map /> },
    { id: 'wifi', name: '4G LTE Wi-Fi Hotspot', desc: 'Portable internet keeping up to 5 devices connected.', price: 150, perDay: false, icon: <Wifi /> },
  ];

  const calculateTotal = () => {
    let extraDaily = 0;
    Object.keys(addedExtras).forEach(key => {
      if (addedExtras[key]) {
         const item = [...protectionItems, ...equipmentItems].find(i => i.id === key);
         if (item && item.perDay) extraDaily += item.price;
      }
    });
    return basePrice + extraDaily;
  };

  const toggleExtra = (id: string) => {
    setAddedExtras(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const ExtrasList = ({ items }: { items: ExtraItem[] }) => (
    <div className="space-y-4">
      {items.map(item => {
        const isAdded = !!addedExtras[item.id];
        const isExpanded = expandedDetails === item.id;
        
        return (
          <div key={item.id} className={`border-2 transition-colors ${isAdded ? 'border-brand-maroon bg-brand-maroon/5' : 'border-gray-200 bg-white'}`}>
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Info section */}
              <div className="flex items-start flex-grow">
                <div className={`w-12 h-12 rounded flex items-center justify-center shrink-0 mr-4 ${isAdded ? 'bg-brand-maroon text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">{item.desc}</p>
                  <button 
                    onClick={() => setExpandedDetails(isExpanded ? null : item.id)}
                    className="text-brand-maroon text-xs font-bold uppercase tracking-wider mt-3 hover:underline flex items-center gap-1"
                  >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-gray-100 pt-4 md:pt-0 shrink-0">
                <div className="text-left md:text-right md:mb-4">
                  <p className="text-xl font-black text-gray-900 leading-none">GH₵{item.price.toFixed(2)}</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{item.perDay ? '/day' : 'total'}</p>
                </div>
                
                <button 
                  onClick={() => toggleExtra(item.id)}
                  className={`px-6 py-3 font-bold uppercase tracking-wider text-sm transition-colors border-2 w-32 ${
                    isAdded 
                      ? 'bg-transparent border-gray-300 text-gray-500 hover:text-red-500 hover:border-red-500 group relative overflow-hidden' 
                      : 'bg-white border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <span className="group-hover:opacity-0 transition-opacity absolute inset-0 flex items-center justify-center">✓ Added</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center">Remove</span>
                    </>
                  ) : '+ Add'}
                </button>
              </div>

            </div>

            {/* Details panel */}
            {isExpanded && (
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-sm text-gray-600 font-medium">
                This is a detailed description of the extra/add-on outlining coverage specifics, limits, and exclusions as required by XTASS policy. By selecting this option, you agree to the supplemental terms outlined in the rental agreement.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <main className="flex-grow bg-gray-50 pb-24 font-sans focus-within:">
      <BookingProgress currentStep={4} totalPrice={calculateTotal()} />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">Optional Extras</h1>
            <p className="text-gray-500 font-medium">Customize your reservation with add-ons.</p>
          </div>
          <button 
            onClick={() => navigate('/booking/step-5')}
            className="mt-4 sm:mt-0 px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold uppercase tracking-wider text-sm transition-colors shadow-sm"
          >
            Continue to Review
          </button>
        </div>

        <div className="space-y-10">
          
          {/* Protection Section */}
          <section>
            <button 
              onClick={() => setOpenSections(p => ({...p, protection: !p.protection}))}
              className="w-full bg-green-800 text-white p-4 flex items-center justify-between hover:bg-green-700 transition-colors"
            >
              <h2 className="font-black uppercase tracking-wider text-lg">Protection &amp; Coverages</h2>
              {openSections.protection ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSections.protection && (
              <div className="pt-4">
                <ExtrasList items={protectionItems} />
              </div>
            )}
          </section>

          {/* Equipment Section */}
          <section>
            <button 
              onClick={() => setOpenSections(p => ({...p, equipment: !p.equipment}))}
              className="w-full bg-green-800 text-white p-4 flex items-center justify-between hover:bg-green-700 transition-colors"
            >
              <h2 className="font-black uppercase tracking-wider text-lg">Equipment Add-Ons</h2>
              {openSections.equipment ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSections.equipment && (
              <div className="pt-4">
                <ExtrasList items={equipmentItems} />
              </div>
            )}
          </section>

        </div>

        <div className="mt-12 flex justify-end">
          <button 
            onClick={() => navigate('/booking/step-5')}
            className="px-10 py-5 bg-brand-maroon hover:bg-brand-maroon-hover text-white font-bold uppercase tracking-wider transition-colors shadow-lg text-lg w-full md:w-auto text-center"
          >
            Continue to Review
          </button>
        </div>

      </div>
    </main>
  );
}
