import { useState } from 'react';
import { MapPin, Home, Briefcase, Plus, Trash2, CheckCircle2, Edit3, Building } from 'lucide-react';

interface SavedLocation {
  id: string;
  label: string;
  address: string;
  isDefaultPickup: boolean;
}

const INITIAL_LOCATIONS: SavedLocation[] = [
  { id: '1', label: 'Home', address: '12 Mango Street, East Legon, Accra', isDefaultPickup: true },
  { id: '2', label: 'Office', address: 'Stanbic Heights, Airport City, Accra', isDefaultPickup: false }
];

export default function SavedLocations() {
  const [locations, setLocations] = useState<SavedLocation[]>(INITIAL_LOCATIONS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [labelType, setLabelType] = useState('Home');
  const [customLabel, setCustomLabel] = useState('');
  const [address, setAddress] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l === 'home') return <Home className="w-6 h-6 text-brand-maroon" />;
    if (l === 'office') return <Briefcase className="w-6 h-6 text-brand-maroon" />;
    return <Building className="w-6 h-6 text-brand-maroon" />;
  };

  const handleEdit = (loc: SavedLocation) => {
    setEditingId(loc.id);
    if (loc.label === 'Home' || loc.label === 'Office') {
      setLabelType(loc.label);
      setCustomLabel('');
    } else {
      setLabelType('Custom');
      setCustomLabel(loc.label);
    }
    setAddress(loc.address);
    setIsDefault(loc.isDefaultPickup);
    setShowAddForm(true);
  };

  const handleSetDefault = (id: string) => {
    setLocations(locations.map(loc => ({
      ...loc,
      isDefaultPickup: loc.id === id
    })));
  };

  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to remove this location?')) {
      const isRemovingDefault = locations.find(l => l.id === id)?.isDefaultPickup;
      const updatedLocations = locations.filter(l => l.id !== id);
      
      if (isRemovingDefault && updatedLocations.length > 0) {
        updatedLocations[0].isDefaultPickup = true;
      }
      
      setLocations(updatedLocations);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalLabel = labelType === 'Custom' ? customLabel : labelType;
    if (!finalLabel || !address) return;

    let updatedLocations = [...locations];

    // If making this default, reset others
    if (isDefault || updatedLocations.length === 0) {
      updatedLocations = updatedLocations.map(l => ({ ...l, isDefaultPickup: false }));
    }

    if (editingId) {
      updatedLocations = updatedLocations.map(l => 
        l.id === editingId ? { id: editingId, label: finalLabel, address, isDefaultPickup: isDefault || l.isDefaultPickup } : l
      );
    } else {
      updatedLocations.push({
        id: Date.now().toString(),
        label: finalLabel,
        address,
        isDefaultPickup: isDefault || updatedLocations.length === 0
      });
    }

    setLocations(updatedLocations);
    
    // Reset
    setShowAddForm(false);
    setEditingId(null);
    setLabelType('Home');
    setCustomLabel('');
    setAddress('');
    setIsDefault(false);
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setLabelType('Home');
    setCustomLabel('');
    setAddress('');
    setIsDefault(false);
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Saved Locations
            </h1>
            <p className="text-gray-300 font-medium">Manage your frequently used locations for faster booking.</p>
          </div>
          {!showAddForm && (
            <button 
              onClick={() => setShowAddForm(true)}
              className="mt-6 md:mt-0 bg-brand-yellow text-gray-900 font-bold py-3 px-6 uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors inline-flex items-center shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
              Add Location
            </button>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {showAddForm ? (
          <div className="bg-white shadow-xl border border-gray-100 p-8 mb-8 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider flex items-center">
              <MapPin className="w-6 h-6 mr-3 text-brand-maroon" />
              {editingId ? 'Edit Location' : 'Add New Location'}
            </h2>

            <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Label</label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <label className={`flex flex-col items-center justify-center p-4 border-2 cursor-pointer transition-all ${labelType === 'Home' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}>
                    <input type="radio" value="Home" checked={labelType === 'Home'} onChange={(e) => setLabelType(e.target.value)} className="sr-only" />
                    <Home className="w-6 h-6 mb-2" />
                    <span className="font-bold text-xs uppercase tracking-wider">Home</span>
                  </label>
                  <label className={`flex flex-col items-center justify-center p-4 border-2 cursor-pointer transition-all ${labelType === 'Office' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}>
                    <input type="radio" value="Office" checked={labelType === 'Office'} onChange={(e) => setLabelType(e.target.value)} className="sr-only" />
                    <Briefcase className="w-6 h-6 mb-2" />
                    <span className="font-bold text-xs uppercase tracking-wider">Office</span>
                  </label>
                  <label className={`flex flex-col items-center justify-center p-4 border-2 cursor-pointer transition-all ${labelType === 'Custom' ? 'border-brand-maroon bg-brand-maroon/5 text-brand-maroon' : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'}`}>
                    <input type="radio" value="Custom" checked={labelType === 'Custom'} onChange={(e) => setLabelType(e.target.value)} className="sr-only" />
                    <Building className="w-6 h-6 mb-2" />
                    <span className="font-bold text-xs uppercase tracking-wider">Custom</span>
                  </label>
                </div>
                {labelType === 'Custom' && (
                  <input 
                    type="text" 
                    value={customLabel} 
                    onChange={(e) => setCustomLabel(e.target.value)}
                    required
                    placeholder="e.g. Grandma's House"
                    className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm animate-in fade-in"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    rows={3}
                    placeholder="Enter full street address or popular landmark..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <label className="flex items-center cursor-pointer group">
                <div className={`w-6 h-6 border-2 flex items-center justify-center mr-3 transition-colors ${isDefault ? 'border-brand-maroon bg-brand-maroon' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}>
                  {isDefault && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={isDefault}
                  onChange={(e) => setIsDefault(e.target.checked)}
                />
                <div>
                  <span className="font-bold text-gray-900 text-sm block">Set as Default Pickup Location</span>
                  <span className="text-xs text-gray-500">This address will be pre-filled automatically when you book a ride.</span>
                </div>
              </label>

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="bg-brand-maroon text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors flex-1 md:flex-none"
                >
                  Save Location
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="bg-white text-gray-900 border-2 border-gray-200 font-bold py-3 px-8 text-sm uppercase tracking-wider hover:border-gray-900 transition-colors flex-1 md:flex-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            {locations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {locations.map((loc) => (
                  <div key={loc.id} className={`bg-white border-2 shadow-sm flex flex-col relative overflow-hidden transition-all ${loc.isDefaultPickup ? 'border-green-500' : 'border-gray-200'}`}>
                    
                    <div className="p-6 pb-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                            {getIcon(loc.label)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wider">{loc.label}</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 border border-gray-100 flex items-start text-sm text-gray-700 font-medium">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{loc.address}</span>
                      </div>
                    </div>
                    
                    <div className="flex border-t border-gray-100 mt-auto bg-gray-50">
                      {loc.isDefaultPickup ? (
                        <div className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-green-700 bg-green-50/50 border-r border-gray-100">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" /> Default Pickup
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleSetDefault(loc.id)}
                          className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-100"
                        >
                           Set as Default
                        </button>
                      )}
                      
                      <button 
                        onClick={() => handleEdit(loc)}
                        className="px-6 flex justify-center items-center py-3 text-sm font-bold text-gray-700 hover:bg-gray-200 transition-colors border-r border-gray-100"
                        title="Edit location"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button 
                        onClick={() => handleRemove(loc.id)}
                        className="px-6 flex justify-center items-center py-3 text-sm font-bold text-red-600 hover:bg-red-100 transition-colors"
                        title="Remove location"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Saved Locations</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Add places you frequently visit like Home or Office to book rides with just one tap.
                </p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
                  Add Location
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
