import { useState } from 'react';
import { Phone, Users, Plus, Edit3, Trash2, Heart, ShieldAlert, Bell, Search, Activity, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  preference: 'Every Trip' | 'Emergency Only';
}

const INITIAL_CONTACTS: EmergencyContact[] = [
  { id: '1', name: 'Mary Doe', relationship: 'Spouse', phone: '+233 24 999 8888', preference: 'Every Trip' }
];

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState<EmergencyContact[]>(INITIAL_CONTACTS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('Parent');
  const [phone, setPhone] = useState('');
  const [preference, setPreference] = useState<'Every Trip' | 'Emergency Only'>('Emergency Only');

  const getRelationshipIcon = (rel: string) => {
    if (rel === 'Spouse' || rel === 'Partner') return <Heart className="w-4 h-4 text-red-500" />;
    if (rel === 'Parent' || rel === 'Child' || rel === 'Sibling') return <Users className="w-4 h-4 text-blue-500" />;
    return <HeartHandshake className="w-4 h-4 text-green-500" />;
  };

  const handleEdit = (c: EmergencyContact) => {
    setEditingId(c.id);
    setName(c.name);
    setRelationship(c.relationship);
    setPhone(c.phone);
    setPreference(c.preference);
    setShowAddForm(true);
  };

  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to remove this emergency contact?')) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    if (editingId) {
      setContacts(contacts.map(c => c.id === editingId ? { id: editingId, name, relationship, phone, preference } : c));
    } else {
      setContacts([...contacts, { id: Date.now().toString(), name, relationship, phone, preference }]);
    }
    
    // Reset
    setShowAddForm(false);
    setEditingId(null);
    setName('');
    setRelationship('Parent');
    setPhone('');
    setPreference('Emergency Only');
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setName('');
    setRelationship('Parent');
    setPhone('');
    setPreference('Emergency Only');
  };

  return (
    <main className="flex-grow bg-gray-50 pb-24">
      <section className="bg-brand-maroon pt-12 pb-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Emergency Contacts
            </h1>
            <p className="text-gray-300 font-medium">Add up to 3 trusted contacts to keep informed during your trips.</p>
          </div>
          {!showAddForm && contacts.length < 3 && (
            <button 
              onClick={() => setShowAddForm(true)}
              className="mt-6 md:mt-0 bg-brand-yellow text-gray-900 font-bold py-3 px-6 uppercase tracking-wider text-sm hover:bg-brand-yellow-hover transition-colors inline-flex items-center shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
              Add Contact
            </button>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        
        {showAddForm ? (
          <div className="bg-white shadow-xl border border-gray-100 p-8 mb-8 animate-in fade-in zoom-in-95 duration-300">
            <h2 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider flex items-center">
              <ShieldAlert className="w-6 h-6 mr-3 text-brand-maroon" />
              {editingId ? 'Edit Emergency Contact' : 'Add Emergency Contact'}
            </h2>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Mary Doe"
                    className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Relationship *</label>
                  <select
                    value={relationship} 
                    onChange={(e) => setRelationship(e.target.value)}
                    className="block w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm font-medium"
                  >
                    <option value="Spouse">Spouse / Partner</option>
                    <option value="Parent">Parent</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Child">Child</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="e.g. +233 24 123 4567"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">Notification Preference</label>
                <div className="flex flex-col sm:flex-row gap-4">
                   <label className={`flex-1 flex items-center p-4 border-2 cursor-pointer transition-colors ${preference === 'Emergency Only' ? 'border-brand-maroon bg-brand-maroon/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                     <input type="radio" value="Emergency Only" checked={preference === 'Emergency Only'} onChange={() => setPreference('Emergency Only')} className="sr-only" />
                     <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center border-brand-maroon">
                        {preference === 'Emergency Only' && <div className="w-2.5 h-2.5 bg-brand-maroon rounded-full"></div>}
                     </div>
                     <div>
                       <div className="font-bold text-gray-900 text-sm">Emergency Only</div>
                       <div className="text-xs text-gray-500 mt-0.5">Alerted only if SOS triggered.</div>
                     </div>
                   </label>

                   <label className={`flex-1 flex items-center p-4 border-2 cursor-pointer transition-colors ${preference === 'Every Trip' ? 'border-brand-maroon bg-brand-maroon/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                     <input type="radio" value="Every Trip" checked={preference === 'Every Trip'} onChange={() => setPreference('Every Trip')} className="sr-only" />
                     <div className="w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center border-brand-maroon">
                        {preference === 'Every Trip' && <div className="w-2.5 h-2.5 bg-brand-maroon rounded-full"></div>}
                     </div>
                     <div>
                       <div className="font-bold text-gray-900 text-sm">Every Trip Tracking</div>
                       <div className="text-xs text-gray-500 mt-0.5">Receives live link for all trips.</div>
                     </div>
                   </label>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="bg-brand-maroon text-white font-bold py-3 px-8 text-sm uppercase tracking-wider hover:bg-brand-maroon-hover transition-colors flex-1 md:flex-none"
                >
                  Save Contact
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
            <div className="mb-6 flex justify-between items-center text-sm font-bold text-gray-600 uppercase tracking-wider px-2">
               <span>{contacts.length} / 3 Contacts Added</span>
               <div className="flex gap-1">
                  {[1,2,3].map(i => (
                    <div key={i} className={`w-12 h-1.5 ${i <= contacts.length ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  ))}
               </div>
            </div>

            {contacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contacts.map((c) => (
                  <div key={c.id} className="bg-white border border-gray-200 shadow-sm flex flex-col relative overflow-hidden">
                    <div className={`h-1.5 w-full ${c.preference === 'Every Trip' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg leading-tight">{c.name}</h3>
                          <div className="flex items-center text-sm mt-1">
                             {getRelationshipIcon(c.relationship)}
                             <span className="ml-1.5 text-gray-600 font-medium">{c.relationship}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 px-4 py-3 border border-gray-100 flex items-center text-sm text-gray-900 font-bold mb-4">
                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                        {c.phone}
                      </div>

                      <div className="flex items-start text-xs bg-gray-50 border border-gray-200 p-3">
                        <Bell className={`w-4 h-4 shrink-0 mr-2 ${c.preference === 'Every Trip' ? 'text-blue-500' : 'text-red-500'}`} />
                        <span className="text-gray-600 leading-snug">
                          <strong className="text-gray-900">{c.preference}:</strong> {c.preference === 'Every Trip' ? 'Gets SMS links for all active trips.' : 'Only alerted when SOS triggered.'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex border-t border-gray-100 mt-auto">
                      <button 
                        onClick={() => handleEdit(c)}
                        className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors border-r border-gray-100"
                      >
                        <Edit3 className="w-4 h-4 mr-1.5" /> Edit
                      </button>
                      <button 
                        onClick={() => handleRemove(c.id)}
                        className="flex-1 flex justify-center items-center py-3 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
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
                  <ShieldAlert className="w-10 h-10 text-brand-maroon" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Emergency Contacts</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  Add up to 3 trusted individuals who can be notified in case of an emergency or track your ride progress.
                </p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="inline-flex items-center bg-brand-yellow font-bold text-gray-900 py-3 px-8 hover:bg-brand-yellow-hover transition-colors text-sm uppercase tracking-wider shadow-lg"
                >
                  <Plus className="w-5 h-5 mr-2 -ml-1 border-2 border-gray-900 rounded-full" />
                  Add First Contact
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
