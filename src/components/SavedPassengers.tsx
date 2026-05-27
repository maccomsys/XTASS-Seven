import { useState } from 'react';
import { Users, User, Phone, Briefcase, Plus, Edit3, Trash2, Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Passenger {
  id: string;
  name: string;
  relationship: string;
  phone: string;
}

const INITIAL_PASSENGERS: Passenger[] = [
  { id: '1', name: 'Jane Doe', relationship: 'Family', phone: '+233 20 987 6543' },
  { id: '2', name: 'David Smith', relationship: 'Colleague', phone: '+233 24 111 2222' }
];

export default function SavedPassengers() {
  const [passengers, setPassengers] = useState<Passenger[]>(INITIAL_PASSENGERS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Family');
  const [phone, setPhone] = useState('');

  const getRelationshipIcon = (rel: string) => {
    switch (rel) {
      case 'Family': return <Heart className="w-4 h-4 text-red-500" />;
      case 'Colleague': return <Briefcase className="w-4 h-4 text-blue-500" />;
      default: return <User className="w-4 h-4 text-gray-400" />;
    }
  };

  const handleEdit = (p: Passenger) => {
    setEditingId(p.id);
    setName(p.name);
    setRelationship(p.relationship);
    setPhone(p.phone);
    setShowAddForm(true);
  };

  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to remove this passenger?')) {
      setPassengers(passengers.filter(p => p.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    if (editingId) {
      setPassengers(passengers.map(p => p.id === editingId ? { id: editingId, name, relationship, phone } : p));
    } else {
      setPassengers([...passengers, { id: Date.now().toString(), name, relationship, phone }]);
    }
    
    // Reset form
    setShowAddForm(false);
    setEditingId(null);
    setName('');
    setRelationship('Family');
    setPhone('');
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setName('');
    setRelationship('Family');
    setPhone('');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Saved Passengers
            </h1>
            <p className="text-gray-300 font-medium">Manage profiles for people you regularly travel with.</p>
          </div>
          {!showAddForm && (
            <button 
              onClick={() => setShowAddForm(true)}
              className="mt-6 md:mt-0 bg-brand-yellow text-gray-900 font-bold py-3 px-6 uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors inline-flex items-center shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
              Add Passenger
            </button>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {showAddForm ? (
          <div className="bg-white shadow-xl border border-gray-100 p-8 mb-8 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider">
              {editingId ? 'Edit Passenger' : 'Add New Passenger'}
            </h2>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Jane Doe"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Relationship *</label>
                  <select
                    value={relationship} 
                    onChange={(e) => setRelationship(e.target.value)}
                    className="block w-full px-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm font-medium"
                  >
                    <option value="Family">Family</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Friend">Friend</option>
                    <option value="Client">Client</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number (Optional)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +233 20 123 4567"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-brand-maroon text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors flex-1 md:flex-none"
                >
                  Save Passenger
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
            {passengers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {passengers.map((p) => (
                  <div key={p.id} className="bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-lg mr-4">
                          {p.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg leading-tight">{p.name}</h3>
                          <div className="flex items-center text-sm mt-1">
                             {getRelationshipIcon(p.relationship)}
                             <span className="ml-1.5 text-gray-600 font-medium">{p.relationship}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {p.phone && (
                      <div className="bg-gray-50 px-4 py-2 border border-gray-100 flex items-center text-sm text-gray-600 mb-4">
                        <Phone className="w-4 h-4 mr-2" />
                        {p.phone}
                      </div>
                    )}
                    
                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                      <button 
                        onClick={() => handleEdit(p)}
                        className="flex-1 flex justify-center items-center py-2 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Edit3 className="w-4 h-4 mr-1.5" /> Edit
                      </button>
                      <button 
                        onClick={() => handleRemove(p.id)}
                        className="flex-1 flex justify-center items-center py-2 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 mr-1.5" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Saved Passengers</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Add regular travelers to your account to pre-fill their details and make booking faster.
                </p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider"
                >
                  <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
                  Add Passenger
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
